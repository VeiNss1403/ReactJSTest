import { Button, Form, Select, Space, Table } from "antd";
import React, { useMemo, useRef, useState } from "react";
import { WrapperHeader } from "./style";
import TableComponent from "../TableComponent/TableComponent";
import InputComponent from "../InputComponent/InputComponent";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import Loading from "../LoadingComponent/Loading";
import ModalComponent from "../ModalComponent/ModalComponent";
import { convertPrice, renderOptions } from "../../utils";
import { useEffect } from "react";
import * as message from "../Message/Message";
import {
  InfoCircleOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import * as OrderService from "../../services/OrderService";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { orderContant } from "../../contant";
import PieChartComponent from "./PieChart";
import { DownloadTableExcel } from "react-export-table-to-excel";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useMutationHooks } from "../../hooks/useMutationHook";
import {
  WrapperAllPrice,
  WrapperContentInfo,
  WrapperHeaderUser,
  WrapperInfoUser,
  WrapperItem,
  WrapperItemLabel,
  WrapperLabel,
  WrapperNameProduct,
  WrapperProduct,
  WrapperStyleContent,
} from "../../pages/DetailsOrderPage/style";
const OrderAdmin = () => {
  const user = useSelector((state) => state?.user);
  const inittial = () => ({
    isPaid: false,
    isDelivered: false,
  });
  const [stateOrder, setStateOrder] = useState(inittial());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState("");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const getAllOrder = async () => {
    const res = await OrderService.getAllOrder(user?.access_token);
    return res;
  };

  const queryOrder = useQuery({ queryKey: ["orders"], queryFn: getAllOrder });
  const { isLoading: isLoadingOrders, data: orders } = queryOrder;

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <InputComponent
          // ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          // onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            // onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            // onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        // setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    // render: (text) =>
    //   searchedColumn === dataIndex ? (
    //     // <Highlighter
    //     //   highlightStyle={{
    //     //     backgroundColor: '#ffc069',
    //     //     padding: 0,
    //     //   }}
    //     //   searchWords={[searchText]}
    //     //   autoEscape
    //     //   textToHighlight={text ? text.toString() : ''}
    //     // />
    //   ) : (
    //     text
    //   ),
  });

  const renderAction = () => {
    return (
      <div>
        <EditOutlined
          style={{ color: "orange", fontSize: "30px", cursor: "pointer" }}
          onClick={() => setIsOpenDrawer(true)}
        />
        <InfoCircleOutlined
          style={{
            color: "rgb(0, 136, 254)",
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={() => setIsModalOpen(true)}
        />
      </div>
    );
  };
  const columns = [
    {
      title: "Người đặt hàng",
      dataIndex: "userName",
      sorter: (a, b) => a.userName.length - b.userName.length,
      ...getColumnSearchProps("userName"),
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      sorter: (a, b) => a.phone.length - b.phone.length,
      ...getColumnSearchProps("phone"),
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      sorter: (a, b) => a.address.length - b.address.length,
      ...getColumnSearchProps("address"),
    },
    {
      title: "Thanh toán",
      dataIndex: "isPaid",
      sorter: (a, b) => a.isPaid.length - b.isPaid.length,
      ...getColumnSearchProps("isPaid"),
    },
    {
      title: "Giao hàng",
      dataIndex: "isDelivered",
      sorter: (a, b) => a.isDelivered.length - b.isDelivered.length,
      ...getColumnSearchProps("isDelivered"),
    },
    {
      title: "Phương thức thanh toán",
      dataIndex: "paymentMethod",
      sorter: (a, b) => a.paymentMethod.length - b.paymentMethod.length,
      ...getColumnSearchProps("paymentMethod"),
    },
    {
      title: "Giá trị đơn hàng",
      dataIndex: "totalPrice",
      sorter: (a, b) => a.totalPrice.length - b.totalPrice.length,
      ...getColumnSearchProps("totalPrice"),
    },
    {
      dataIndex: "action",
      align: "center",
      fixed: "right",
      width: 100,
      render: renderAction,
    },
  ];

  const dataTable =
    orders?.data?.length &&
    orders?.data?.map((order) => {
      return {
        ...order,
        key: order._id,
        userName: order?.shippingAddress?.fullName,
        phone: order?.shippingAddress?.phone,
        address: order?.shippingAddress?.address,
        paymentMethod: orderContant.payment[order?.paymentMethod],
        isPaid: order?.isPaid ? "Đã thanh toán" : "Chưa thanh toán",
        isDelivered: order?.isDelivered ? "Đã giao hàng" : "Chưa giao hàng",
        totalPrice: convertPrice(order?.totalPrice),
      };
    });
  const tableRef = useRef(null);
  const fetchGetDetailsProduct = async (rowSelected) => {
    const res = await OrderService.getDetailsOrderAdmin(rowSelected);
    if (res?.data) {
      setStateOrder({
        isPaid: res?.data?.isPaid,
        isDelivered: res?.data?.isDelivered,
      });
    }
  };

  useEffect(() => {
    if (rowSelected && isOpenDrawer) {
      setIsLoadingUpdate(true);
      fetchGetDetailsProduct(rowSelected);
      setIsLoadingUpdate(false);
    }
  }, [rowSelected, isOpenDrawer]);
  const mutationUpdate = useMutationHooks((data) => {
    const { id, token, ...rests } = data;
    const res = OrderService.updateOrder(id, token, { ...rests });
    return res;
  });
  const {
    data: dataUpdated,
    isLoading: isLoadingUpdated,
    isSuccess: isSuccessUpdated,
    isError: isErrorUpdated,
  } = mutationUpdate;
  useEffect(() => {
    if (isSuccessUpdated && dataUpdated?.status === "OK") {
      message.success();
      setIsOpenDrawer(false);
    } else if (isErrorUpdated) {
      message.error();
    }
  }, [isSuccessUpdated]);
  const onUpdateOrder = () => {
    mutationUpdate.mutate(
      { id: rowSelected, token: user?.access_token, ...stateOrder },
      {
        onSettled: () => {
          queryOrder.refetch();
        },
      }
    );
  };
  const [form] = Form.useForm();
  const handleChangeSelect = (value) => {
    console.log(
      "🚀 ~ file: OrderAmin.jsx:258 ~ handleChangeSelect ~ value:",
      value
    );
    setStateOrder({
      ...stateOrder,
      isPaid: value,
    });
  };
  const handleChangeSelectIsDelivered = (value) => {
    setStateOrder({
      ...stateOrder,
      isDelivered: value,
    });
  };

  const handlelabelIsDelivered = (value) => {
    if (value === true) {
      return "Đã giao hàng";
    } else if (value === false) {
      return "Chưa giao hàng";
    }
  };
  const handlelabel = (value) => {
    if (value === true) {
      return "Đã thanh toán";
    } else if (value === false) {
      return "Chưa thanh toán";
    }
  };
  const fetchDetailsOrder = async () => {
    const res = await OrderService.getDetailsOrderAdmin(rowSelected);
    return res.data;
  };
  const queryOrderDetail = useQuery({
    queryKey: ["orders-details", rowSelected],
    queryFn: fetchDetailsOrder,
  });
  const { isLoading, data } = queryOrderDetail;
  const priceMemo = useMemo(() => {
    const result = data?.orderItems?.reduce((total, cur) => {
      return total + cur.price * cur.amount;
    }, 0);
    return result;
  }, [data]);
  useEffect(() => {
    if (rowSelected) fetchDetailsOrder();
  }, [rowSelected]);
  return (
    <div>
      <WrapperHeader>Quản lý đơn hàng</WrapperHeader>
      <div style={{ height: 200, width: 200 }}>
        <PieChartComponent data={orders?.data} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Loading isLoading={isLoadingOrders}>
          <DownloadTableExcel
            filename="Order"
            // sheet="users"
            currentTableRef={tableRef.current}
          >
            <ButtonComponent
              size={40}
              styleButton={{
                background: "green",
                height: "36px",
                borderRadius: "4px",
              }}
              textbutton={"Xuất Excel"}
              styleTextButton={{ color: "#fff", fontSize: "14px" }}
            />
          </DownloadTableExcel>
          <Table
            ref={tableRef}
            columns={columns}
            dataSource={dataTable}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  setRowSelected(record._id);
                },
              };
            }}
          />
        </Loading>
      </div>
      <DrawerComponent
        title=""
        isOpen={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        width="90%"
      >
        <Loading isLoading={isLoadingUpdate || isLoadingUpdated}>
          <Form
            name="basic"
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 21 }}
            onFinish={onUpdateOrder}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="Thanh Toán"
              name="isPaid"
              rules={[{ required: true, message: "Please input your isPaid!" }]}
            >
              <Select
                name="isPaid"
                defaultValue={handlelabel(stateOrder?.isPaid)}
                onChange={handleChangeSelect}
                options={[
                  { value: true, label: "Đã thanh toán" },
                  { value: false, label: "Chưa thanh toán" },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Giao hàng"
              name="isDelivered"
              rules={[
                { required: true, message: "Please input your isDelivered!" },
              ]}
            >
              <Select
                name="isDelivered"
                labelInValue
                defaultValue={{
                  value: stateOrder?.isDelivered,
                  label: stateOrder?.isDelivered
                    ? "Đã giao hàng"
                    : "Chưa giao hàng",
                }}
                onChange={handleChangeSelectIsDelivered}
                options={[
                  { value: true, label: "Đã giao hàng" },
                  { value: false, label: "Chưa giao hàng" },
                ]}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Apply
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </DrawerComponent>
      <ModalComponent
        title="Chi tiết đơn hàng"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width="1270px"
      >
        <Loading isLoading={isLoading}>
          <div
            style={{
              width: "100%",
              height: "auto",
              padding: 10,
              background: "#f5f5fa",
            }}
          >
            <div className="container">
              <WrapperHeaderUser>
                <WrapperInfoUser>
                  <WrapperLabel>Địa chỉ người nhận</WrapperLabel>
                  <WrapperContentInfo>
                    <div className="name-info">
                      {data?.shippingAddress?.fullName}
                    </div>
                    <div className="address-info">
                      <span>Địa chỉ: </span>{" "}
                      {`${data?.shippingAddress?.address} ${data?.shippingAddress?.city}`}
                    </div>
                    <div className="phone-info">
                      <span>Điện thoại: </span> 0{data?.shippingAddress?.phone}
                    </div>
                  </WrapperContentInfo>
                </WrapperInfoUser>
                <WrapperInfoUser>
                  <WrapperLabel>Hình thức giao hàng</WrapperLabel>
                  <WrapperContentInfo>
                    <div className="delivery-info">
                      <span className="name-delivery">FAST </span>Giao hàng tiết
                      kiệm
                    </div>
                    {data?.shippingPrice === 0 ? (
                      <span> Miễn phí vận chuyển </span>
                    ) : (
                      <div className="delivery-fee">
                        <span>Phí giao hàng: </span>
                        {convertPrice(data?.shippingPrice)}
                      </div>
                    )}
                  </WrapperContentInfo>
                </WrapperInfoUser>
                <WrapperInfoUser>
                  <WrapperLabel>Hình thức thanh toán</WrapperLabel>
                  <WrapperContentInfo>
                    <div className="payment-info">
                      {orderContant.payment[data?.paymentMethod]}
                    </div>
                    <div className="status-payment">
                      {data?.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}
                    </div>
                  </WrapperContentInfo>
                </WrapperInfoUser>
              </WrapperHeaderUser>
              <WrapperStyleContent>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ width: "670px" }}>Sản phẩm</div>
                  <WrapperItemLabel>Giá</WrapperItemLabel>
                  <WrapperItemLabel>Số lượng</WrapperItemLabel>
                  <WrapperItemLabel>Giảm giá</WrapperItemLabel>
                  <WrapperItemLabel>Tiền giảm giá</WrapperItemLabel>
                  <WrapperItemLabel>Thành tiền</WrapperItemLabel>
                </div>
                {data?.orderItems?.map((order) => {
                  return (
                    <WrapperProduct>
                      <WrapperNameProduct>
                        <img
                          src={order?.image}
                          alt="Hình ảnh đơn hàng"
                          style={{
                            width: "70px",
                            height: "70px",
                            objectFit: "cover",
                            border: "1px solid #eee",
                            padding: "2px",
                            borderRadius: "4px",
                            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                        <div
                          style={{
                            width: 260,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            marginLeft: "10px",
                          }}
                        >
                          {order?.name}
                        </div>
                      </WrapperNameProduct>
                      <WrapperItem>{convertPrice(order?.price)}</WrapperItem>
                      <WrapperItem>{order?.amount}</WrapperItem>
                      <WrapperItem>{order?.discount}%</WrapperItem>
                      <WrapperItem>
                        -
                        {convertPrice(
                          (order?.price * order?.amount * order?.discount) / 100
                        )}
                      </WrapperItem>
                      <WrapperItem>
                        {convertPrice(order?.price * order?.amount)}
                      </WrapperItem>
                    </WrapperProduct>
                  );
                })}

                <WrapperAllPrice>
                  <WrapperItemLabel>Tạm tính</WrapperItemLabel>
                  <WrapperItem>{convertPrice(priceMemo)}</WrapperItem>
                </WrapperAllPrice>
                {data?.shippingPrice !== 0 ? (
                  <WrapperAllPrice>
                    <WrapperItemLabel>Phí vận chuyển</WrapperItemLabel>
                    <WrapperItem>
                      {convertPrice(data?.shippingPrice)}
                    </WrapperItem>
                  </WrapperAllPrice>
                ) : (
                  ""
                )}
                <WrapperAllPrice>
                  <WrapperItemLabel>Tổng cộng</WrapperItemLabel>
                  <WrapperItem>
                    <WrapperItem>{convertPrice(data?.totalPrice)}</WrapperItem>
                  </WrapperItem>
                </WrapperAllPrice>
              </WrapperStyleContent>
            </div>
          </div>
        </Loading>
      </ModalComponent>
    </div>
  );
};

export default OrderAdmin;
