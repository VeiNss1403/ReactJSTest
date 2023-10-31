import { Form } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import { CustomCheckbox, WrapperCountOrder, WrapperInfo, WrapperItemOrder, WrapperLeft, WrapperListOrder, WrapperRight, WrapperStyleHeader, WrapperStyleHeaderDilivery, WrapperTotal } from './style';
import {
  DeleteOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import InputComponent from '../../components/InputComponent/InputComponent';
import ModalComponent from '../../components/ModalComponent/ModalComponent';
import { useDispatch, useSelector } from 'react-redux';
import { WrapperInputNumber } from '../../components/ProductDetailComponent/style';
import { decreaseAmount, increaseAmount, removeAllOrderProduct, removeOrderProduct, selectedOrder } from '../../redux/slices/orderSlide';
import { convertPrice } from '../../ultils';
import * as UserService from "../../services/UserService";
import * as messages from "../../components/Message/Message";
import Loading from '../../components/LoadingComponent/LoadingComponent';
import { useMutationHooks } from '../../hooks/useMutationHook';
import { updateUser } from '../../redux/slices/userSlide';
const OrderPage = () => {
  const order = useSelector((state) => state.order)
  const user = useSelector((state) => state.user)
  const [listChecked, setListChecked] = useState([])
  const [isOpenModalUpdateInfo, setIsOpenModalUpdateInfo] = useState(false)
  const [stateUserDetail, setStateUserDetail] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
  })
  console.log("🚀 ~ file: OrderPage.jsx:31 ~ OrderPage ~ stateUserDetail:", stateUserDetail)
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const handleOnChangeDetail = (e) => {
    setStateUserDetail({
      ...stateUserDetail,
      [e.target.name]: e.target.value
    })
  };
  const handleOnChangeCheckAll = (e) => {
    if (e.target.checked) {
      const newListChecked = []
      order?.orderItems?.forEach((item) => {
        newListChecked.push(item?.product)
      });
      setListChecked(newListChecked)
    } else {
      setListChecked([])
    }
  }
  const handleOnChangeCount = (type, idProduct) => {
    if (type === 'increase') {
      dispatch(increaseAmount({ idProduct }))
    } else {
      dispatch(decreaseAmount({ idProduct }))
    }
  }
  const handleDeleteOrder = (idProduct) => {
    dispatch(removeOrderProduct({ idProduct }))
  }
  const onChange = (e) => {
    if (listChecked.includes(e.target.value)) {
      const newListChecked = listChecked.filter((item) => item !== e.target.value)
      setListChecked(newListChecked)
    } else {
      setListChecked([...listChecked, e.target.value])
    }

  }
  const handleRemoveAllProduct = () => {
    if (listChecked?.length > 1) {
      dispatch(removeAllOrderProduct({ listChecked }))
    }
  }
  const priceMemo = useMemo(() => {
    const result = order?.orderItemSelected?.reduce((total, cur) => {
      return total + ((cur.price * cur.amount))
    }, 0)
    return result
  }, [order])
  const priceDiscountMemo = useMemo(() => {
    const result = order?.orderItemSelected?.reduce((total, cur) => {
      return total + ((priceMemo * cur.discount) / 100)
    }, 0)
    if (Number(result)) {
      return result
    }
    return 0
  }, [order])
  const deliveryPriceMemo = useMemo(() => {
    if (priceMemo > 200000) {
      return 10000
    } else if (priceMemo === 0) {
      return 0
    } else {
      return 20000
    }
  }, [priceMemo])
  const totalPriceMeno = useMemo(() => {
    return Number(priceMemo) - Number(priceDiscountMemo) + Number(deliveryPriceMemo)
  }, [priceMemo, priceDiscountMemo, deliveryPriceMemo])
  useEffect(() => {
    dispatch(selectedOrder({ listChecked }))
  }, [listChecked])
  useEffect(() => {
    form.setFieldsValue(stateUserDetail)
}, [form, stateUserDetail])
  useEffect(() => {
    if (isOpenModalUpdateInfo) {
      setStateUserDetail({
        ...stateUserDetail,
        city: user?.city,
        name: user?.name,
        address: user?.address,
        phone: user?.phone
      })
    }
  }, [isOpenModalUpdateInfo])
  const handleAddCart = () => {
    if (!order?.orderItemSelected?.length) {
      messages.error('Select order item')
    } else if (!user?.phone || !user?.address || !user?.name || !user?.city) {
      setIsOpenModalUpdateInfo(true)
    }
  }
  const handleCancelUpdate = () => {
    setStateUserDetail({
      name: '',
      email: '',
      phone: '',
      isAdmin: false,
    })
    form.resetFields()
    setIsOpenModalUpdateInfo(false)
  }
  const onUpdateUser = () => {

  }
  const mutationUpdate = useMutationHooks(
    (data) => {
      const {
        id,
        token,
        ...rests } = data
      const res = UserService.updateUser(
        id,
        { ...rests },
        token,
      )
      return res
    }
  )
  const { isLoading, data } = mutationUpdate
  console.log("🚀 ~ file: OrderPage.jsx:132 ~ OrderPage ~ data:", data)
  const handleUpdateInfoUser = () => {
    const { name, phone, address, city } = stateUserDetail
    if (name && phone && address && city) {
      mutationUpdate.mutate({ id: user?.id, token: user?.access_token, ...stateUserDetail }, {
        onSuccess: () => {
          dispatch(updateUser({name, phone, address, city}))
          setIsOpenModalUpdateInfo(false);
          messages.success()
        }
      });
    }
  }
  return (
    <div style={{ background: '#f5f5fa', with: '100%', height: '100vh' }}>
      <div style={{ height: '100%', width: '1270px', margin: '0 auto' }}>
        <h3 style={{ fontWeight: 'bold' }}>Giỏ hàng</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <WrapperLeft>
            <WrapperStyleHeader>
              <span style={{ display: 'inline-block', width: '390px' }}>
                <CustomCheckbox onChange={handleOnChangeCheckAll} checked={listChecked?.length === order?.orderItems?.length} />
                <span> Tất cả ({order?.orderItems?.length} sản phẩm)</span>
              </span>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Đơn giá</span>
                <span>Số lượng</span>
                <span>Thành tiền</span>
                <DeleteOutlined style={{ cursor: 'pointer' }} onClick={() => handleRemoveAllProduct()} />
              </div>
            </WrapperStyleHeader>
            <WrapperListOrder>
              {order?.orderItems?.map((order) => {
                return (
                  <WrapperItemOrder key={order?.product}>
                    <div style={{ width: '390px', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <CustomCheckbox onChange={onChange} value={order?.product} checked={listChecked.includes(order?.product)} />
                      <img src={order?.image} style={{ width: '77px', height: '79px', objectFit: 'cover' }} />
                      <div style={{
                        width: 260,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>{order?.name}</div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>
                        <span style={{ fontSize: '13px', color: '#242424' }}>{convertPrice(order?.price)}</span>
                      </span>
                      <WrapperCountOrder>
                        <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleOnChangeCount('decrease', order?.product)}>
                          <MinusOutlined style={{ color: '#000', fontSize: '10px' }} />
                        </button>
                        <WrapperInputNumber defaultValue={order?.amount} value={order?.amount} size="small" min={1} max={order?.countInstock} />
                        <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} >
                          <PlusOutlined style={{ color: '#000', fontSize: '10px' }} onClick={() => handleOnChangeCount('increase', order?.product)} />
                        </button>
                      </WrapperCountOrder>
                      <span style={{ color: 'rgb(255, 66, 78)', fontSize: '13px', fontWeight: 500 }}>{convertPrice(order?.price * order?.amount)}</span>
                      <DeleteOutlined style={{ cursor: 'pointer' }} onClick={() => handleDeleteOrder(order?.product)} />
                    </div>
                  </WrapperItemOrder>
                )
              })}
            </WrapperListOrder>
          </WrapperLeft>
          <WrapperRight>
            <div style={{ width: '100%' }}>
              <WrapperInfo>
                <div>
                  <span>Địa chỉ: </span>
                  <span style={{ fontWeight: 'bold' }}> </span>
                  <span style={{ color: '#9255FD', cursor: 'pointer' }}>Thay đổi</span>
                </div>
              </WrapperInfo>
              <WrapperInfo>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Tạm tính</span>
                  <span style={{ color: '#000', fontSize: '14px', fontWeight: 'bold' }}>{convertPrice(priceMemo)}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Giảm giá</span>
                  <span style={{ color: '#000', fontSize: '14px', fontWeight: 'bold' }}>{`${priceDiscountMemo} %`}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Phí giao hàng</span>
                  <span style={{ color: '#000', fontSize: '14px', fontWeight: 'bold' }}>{convertPrice(deliveryPriceMemo)}</span>
                </div>
              </WrapperInfo>
              <WrapperTotal>
                <span>Tổng tiền</span>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: 'rgb(254, 56, 52)', fontSize: '24px', fontWeight: 'bold' }}>{convertPrice(totalPriceMeno)}</span>
                  <span style={{ color: '#000', fontSize: '11px' }}>(Đã bao gồm VAT nếu có)</span>
                </span>
              </WrapperTotal>
            </div>
            <ButtonComponent
              onClick={() => handleAddCart()}
              size={40}
              styleButton={{
                background: 'rgb(255, 57, 69)',
                height: '48px',
                width: '320px',
                border: 'none',
                borderRadius: '4px'
              }}
              textButton={'Mua hàng'}
              styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
            ></ButtonComponent>
          </WrapperRight>
        </div>
      </div>
      <ModalComponent title="Cập nhật thông tin giao hàng" open={isOpenModalUpdateInfo} onCancel={handleCancelUpdate} onOk={handleUpdateInfoUser}>
        <Loading isLoading={isLoading}>
          <Form
            name="basic"
            labelCol={{ span: 4, }}
            wrapperCol={{ span: 20, }}
            //onFinish={onUpdateUser}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your Name!',
                },
              ]}
            >
              <InputComponent value={stateUserDetail.name} onChange={handleOnChangeDetail} name="name" />
            </Form.Item>

            <Form.Item
              label="City"
              name="city"
              rules={[
                {
                  required: true,
                  message: 'Please input your of City!',
                },
              ]}
            >
              <InputComponent value={stateUserDetail.city} onChange={handleOnChangeDetail} name="city" />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Please input your Phone!',
                },
              ]}
            >
              <InputComponent value={stateUserDetail.phone} onChange={handleOnChangeDetail} name="phone" />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: 'Please input your Address!',
                },
              ]}
            >
              <InputComponent value={stateUserDetail.phone} onChange={handleOnChangeDetail} name="address" />
            </Form.Item>
          </Form>
        </Loading>
      </ModalComponent>
    </div>
  )
}

export default OrderPage