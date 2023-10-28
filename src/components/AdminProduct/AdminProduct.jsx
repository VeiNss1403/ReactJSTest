import { Button, Form, Space } from "antd";
import React, { useEffect, useRef, useState } from "react";
import TableComponent from "../TableComponent/TableComponent";
import { WrapperHeader, WrapperUploadFile } from "./style";
import {
    PlusOutlined,
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
} from '@ant-design/icons';
import InputComponent from "../InputComponent/InputComponent";
import { getBase64 } from "../../ultils";
import * as ProductService from "../../services/ProductService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../LoadingComponent/LoadingComponent";
import * as messages from "../Message/Message";
import { useQuery } from "@tanstack/react-query";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { useSelector } from "react-redux";
import ModalComponent from "../ModalComponent/ModalComponent";
const AdminProduct = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
    const [rowSelected, setRowSelected] = useState('')
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)
    const [isLoadingUpdate, setIsLoadingUpdate] = useState(false)
    const user = useSelector((state) => state?.user)
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [stateProduct, setStateProduct] = useState({
        name: '',
        price: '',
        description: '',
        rating: '',
        image: '',
        type: '',
        countInStock: '',
    })
    const [stateProductDetail, setStateProductDetail] = useState({
        name: '',
        price: '',
        description: '',
        rating: '',
        image: '',
        type: '',
        countInStock: '',
    })
    const [form] = Form.useForm()
    const mutation = useMutationHooks(
        (data) => {
            const {
                name,
                price,
                description,
                rating,
                image,
                type,
                countInStock } = data
            const res = ProductService.createProduct({
                name,
                price,
                description,
                rating,
                image,
                type,
                countInStock
            })
            return res
        }
    )
    const mutationUpdate = useMutationHooks(
        (data) => {
            const {
                id,
                token,
                ...rests } = data
            const res = ProductService.updateProduct(
                id,
                token,
                { ...rests }
            )
            return res
        }
    )
    const mutationDeleted = useMutationHooks(
        (data) => {
            const {
                id,
                token } = data
            const res = ProductService.deleteProduct(
                id,
                token,
            )
            return res
        }
    )
    const mutationDeletedMany = useMutationHooks(
        (data) => {
            const {
                token,
                ...ids
            } = data
            const res = ProductService.deleteManyProduct(
                ids,
                token,
            )
            return res
        }
    )
    const getAllProducts = async () => {
        const res = await ProductService.getAllProducts()
        return res
    }
    const { data, isLoading, isSuccess, isError } = mutation
    const { data: dataUpdated, isLoading: isLoadingUpdated, isSuccess: isSuccessUpdated, isError: isErrorUpdated } = mutationUpdate
    const { data: dataDeleted, isLoading: isLoadingDeleted, isSuccess: isSuccessDeleted, isError: isErrorDeleted } = mutationDeleted
    const { data: dataDeletedMany, isLoading: isLoadingDeletedMany, isSuccess: isSuccessDeletedMany, isError: isErrorDeletedMany } = mutationDeletedMany
    const queryProduct = useQuery({ queryKey: ['products'], queryFn: getAllProducts })
    const { isLoading: isLoadingProduct, data: products } = queryProduct
    const renderAction = () => {
        return (
            <div>
                <EditOutlined style={{ color: 'orange', fontSize: 30, cursor: 'pointer' }} onClick={handleDetailsProduct} />
                <DeleteOutlined style={{ color: 'red', fontSize: 30, cursor: 'pointer' }} onClick={() => setIsModalOpenDelete(true)} />
            </div>
        )
    }
    const fetchGetDetailsProduct = async (rowSelected) => {
        const res = await ProductService.getDetailProduct(rowSelected)
        if (res?.data) {
            setStateProductDetail({
                name: res?.data?.name,
                price: res?.data?.price,
                description: res?.data?.description,
                rating: res?.data?.rating,
                image: res?.data?.image,
                type: res?.data?.type,
                countInStock: res?.data?.countInStock,
            })
        }
        setIsLoadingUpdate(false)
    }

    useEffect(() => {
        form.setFieldsValue(stateProductDetail)
    }, [form, stateProductDetail])

    useEffect(() => {
        if (rowSelected && isOpenDrawer) {
            setIsLoadingUpdate(true)
            fetchGetDetailsProduct(rowSelected)
        }
    }, [rowSelected, isOpenDrawer])

    const handleDetailsProduct = () => {
        setIsOpenDrawer(true)
    }
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        // setSearchText(selectedKeys[0]);
        // setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        // setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <InputComponent
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
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
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        // render: (text) =>
        //     searchedColumn === dataIndex ? (
        //         <Highlighter
        //             highlightStyle={{
        //                 backgroundColor: '#ffc069',
        //                 padding: 0,
        //             }}
        //             searchWords={[searchText]}
        //             autoEscape
        //             textToHighlight={text ? text.toString() : ''}
        //         />
        //     ) : (
        //         text
        //     ),
    });
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price,
            filters: [
                {
                    text: '>= 50',
                    value: '>=',
                },
                {
                    text: '<= 50',
                    value: '<=',
                },
            ],
            onFilter: (value, record) => {
                if (value === '>=') {
                    return record.price >= 300
                }
                return record.price <= 300
            }
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            sorter: (a, b) => a.rating - b.rating,
            filters: [
                {
                    text: '>= 3',
                    value: '>=',
                },
                {
                    text: '<= 3',
                    value: '<=',
                },
            ],
            onFilter: (value, record) => {
                if (value === '>=') {
                    return record.rating >= 3
                }
                return record.rating <= 3
            }
        },
        {
            title: 'Type',
            dataIndex: 'type',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: renderAction,
        },
    ];
    const dataTable = products?.data?.length && products?.data?.map((product) => {
        return {
            ...product,
            key: product._id
        }
    })
    useEffect(() => {
        if (isSuccess && data?.status === 'OK') {
            messages.success()
            handleCancel()
        } else if (isError) {
            messages.error()
        }
    }, [isSuccess])

    useEffect(() => {
        if (isSuccessDeleted && dataDeleted?.status === 'OK') {
            messages.success()
            handleCancelDelete()
        } else if (isErrorDeleted) {
            messages.error()
        }
    }, [isSuccessDeleted])

    useEffect(() => {
        if (isSuccessUpdated && dataUpdated?.status === 'OK') {
            messages.success()
            handleCloseDrawer()
        } else if (isErrorUpdated) {
            messages.error()
        }
    }, [isSuccessUpdated])

    useEffect(() => {
        if (isSuccessDeletedMany && dataDeletedMany?.status === 'OK') {
            messages.success()
        } else if (isErrorDeletedMany) {
            messages.error()
        }
    }, [isSuccessDeletedMany])
    const handleCloseDrawer = () => {
        setIsOpenDrawer(false);
        setStateProductDetail({
            name: '',
            price: '',
            description: '',
            rating: '',
            image: '',
            type: '',
            countInStock: '',
        })
        form.resetFields()
    };
    const handleOnChange = (e) => {
        setStateProduct({
            ...stateProduct,
            [e.target.name]: e.target.value
        })
    };
    const handleOnChangeDetail = (e) => {
        setStateProductDetail({
            ...stateProductDetail,
            [e.target.name]: e.target.value
        })
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setStateProduct({
            name: '',
            price: '',
            description: '',
            rating: '',
            image: '',
            type: '',
            countInStock: '',
        })
        form.resetFields()
    };
    const handleCancelDelete = () => {
        setIsModalOpenDelete(false);
    };
    const onFinish = () => {
        mutation.mutate(stateProduct, {
            onSettled: () => {
                queryProduct.refetch()
            }
        })
    }
    const handleOnchangeAvatar = async ({ fileList }) => {
        const file = fileList[0]
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateProduct({
            ...stateProduct,
            image: file.preview
        })
    }
    const handleOnchangeAvatarDetail = async ({ fileList }) => {
        const file = fileList[0]
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateProductDetail({
            ...stateProductDetail,
            image: file.preview
        })
    }
    const onUpdateProduct = () => {
        mutationUpdate.mutate({ id: rowSelected, token: user?.access_token, ...stateProductDetail }, {
            onSettled: () => {
                queryProduct.refetch()
            }
        });
    }
    const handleDeleteProduct = () => {
        mutationDeleted.mutate({ id: rowSelected, token: user?.access_token }, {
            onSettled: () => {
                queryProduct.refetch()
            }
        })
    }
    const handleDeleteManyProducts = (ids) => {
        mutationDeletedMany.mutate({ ids: ids, token: user?.access_token }, {
            onSettled: () => {
                queryProduct.refetch()
            }
        })
    }
    return (
        <div>
            <WrapperHeader>Quản lý sản phẩm</WrapperHeader>
            <div>
                <Button style={{ height: 150, width: 150, borderRadius: 6, borderStyle: "dashed" }} onClick={() => setIsModalOpen(true)}><PlusOutlined style={{ fontSize: 60 }} /></Button>
            </div>
            <div style={{ margin: 20 }}>
                <TableComponent filename='Products' handleDeleteMany={handleDeleteManyProducts} columns={columns} isLoading={isLoadingProduct} data={dataTable} onRow={(record) => {
                    return {
                        onClick: event => {
                            setRowSelected(record._id);
                        },
                    };
                }}
                />
            </div>
            <ModalComponent forceRender title="Tạo sản phẩm" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Loading isLoading={isLoading}>
                    <Form
                        name="basic"
                        labelCol={{ span: 6, }}
                        wrapperCol={{ span: 18, }}
                        style={{ maxWidth: 600, }}
                        onFinish={onFinish}
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
                            <InputComponent value={stateProduct.name} onChange={handleOnChange} name="name" />
                        </Form.Item>

                        <Form.Item
                            label="Type"
                            name="type"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Type!',
                                },
                            ]}
                        >
                            <InputComponent value={stateProduct.type} onChange={handleOnChange} name="type" />
                        </Form.Item>
                        <Form.Item
                            label="Count in Stock"
                            name="countInStock"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your count in stock!',
                                },
                            ]}
                        >
                            <InputComponent value={stateProduct.countInStock} onChange={handleOnChange} name="countInStock" />
                        </Form.Item>
                        <Form.Item
                            label="Price"
                            name="price"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Price!',
                                },
                            ]}
                        >
                            <InputComponent value={stateProduct.price} onChange={handleOnChange} name="price" />
                        </Form.Item>
                        <Form.Item
                            label="Rating"
                            name="rating"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Rating!',
                                },
                            ]}
                        >
                            <InputComponent value={stateProduct.rating} onChange={handleOnChange} name="rating" />
                        </Form.Item>
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Description!',
                                },
                            ]}
                        >
                            <InputComponent value={stateProduct.description} onChange={handleOnChange} name="description" />
                        </Form.Item>
                        <Form.Item
                            label="Image"
                            name="image"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Image!',
                                },
                            ]}
                        >
                            <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                                <Button>Select File</Button>
                                {stateProduct?.image && (
                                    <img src={stateProduct?.image} style={{
                                        height: '60px',
                                        width: '60px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        marginLeft: '10px',
                                    }} alt="avatar" />
                                )}
                            </WrapperUploadFile>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 20, span: 16, }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Loading>
            </ModalComponent>

            <DrawerComponent title="Chi tiết sản phẩm" isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} width="90%">
                <Loading isLoading={isLoadingUpdate || isLoadingUpdated}>
                    <Form
                        name="basic"
                        labelCol={{ span: 2, }}
                        wrapperCol={{ span: 22, }}
                        onFinish={onUpdateProduct}
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
                            <InputComponent value={stateProductDetail.name} onChange={handleOnChangeDetail} name="name" />
                        </Form.Item>

                        <Form.Item
                            label="Type"
                            name="type"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Type!',
                                },
                            ]}
                        >
                            <InputComponent value={stateProductDetail.type} onChange={handleOnChangeDetail} name="type" />
                        </Form.Item>
                        <Form.Item
                            label="Count in Stock"
                            name="countInStock"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your count in stock!',
                                },
                            ]}
                        >
                            <InputComponent value={stateProductDetail.countInStock} onChange={handleOnChangeDetail} name="countInStock" />
                        </Form.Item>
                        <Form.Item
                            label="Price"
                            name="price"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Price!',
                                },
                            ]}
                        >
                            <InputComponent value={stateProductDetail.price} onChange={handleOnChangeDetail} name="price" />
                        </Form.Item>
                        <Form.Item
                            label="Rating"
                            name="rating"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Rating!',
                                },
                            ]}
                        >
                            <InputComponent value={stateProductDetail.rating} onChange={handleOnChangeDetail} name="rating" />
                        </Form.Item>
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Description!',
                                },
                            ]}
                        >
                            <InputComponent value={stateProductDetail.description} onChange={handleOnChangeDetail} name="description" />
                        </Form.Item>
                        <Form.Item
                            label="Image"
                            name="image"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Image!',
                                },
                            ]}
                        >
                            <WrapperUploadFile onChange={handleOnchangeAvatarDetail} maxCount={1}>
                                <Button>Select File</Button>
                                {stateProductDetail?.image && (
                                    <img src={stateProductDetail?.image} style={{
                                        height: '60px',
                                        width: '60px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        marginLeft: '10px',
                                    }} alt="avatar" />
                                )}
                            </WrapperUploadFile>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 20, span: 16, }}>
                            <Button type="primary" htmlType="submit">
                                Apply
                            </Button>
                        </Form.Item>
                    </Form>
                </Loading>
            </DrawerComponent>

            <ModalComponent title="Xóa sản phẩm" open={isModalOpenDelete} onCancel={handleCancelDelete} onOk={handleDeleteProduct} >
                <Loading isLoading={isLoadingDeleted}>
                    <div>Bạn có chắc chắn muốn xóa sản phẩm này không?</div>
                </Loading>
            </ModalComponent>
        </div>
    )
}
export default AdminProduct