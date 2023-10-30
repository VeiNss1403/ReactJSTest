import React, { useEffect, useState } from "react";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";
import { useLocation } from "react-router-dom";
import * as ProductService from "../../services/ProductService";
import Loading from "../../components/LoadingComponent/LoadingComponent";
import { useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
const TypeProductPage = () => {
    const searchProduct = useSelector((state) => state?.product?.search)
    const searchDebounce = useDebounce(searchProduct, 500)

    const { state } = useLocation()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [panigate, setPanigate] = useState({
        page: 0,
        limit: 10,
        total: 1,
    })
    const fetchProductType = async (type, page, limit) => {
        setLoading(true)
        const res = await ProductService.getProductType(type, page, limit)
        if (res?.status === 'OK') {
            setProducts(res?.data)
            setPanigate({ ...panigate, total: res?.totalPage })
            setLoading(false)
        } else {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (state) {
            fetchProductType(state, panigate.page, panigate.limit)
        }

    }, [state, panigate.page, panigate.limit])
    const onChange = (current, pageSize) => {
        setPanigate({ ...panigate, page: current - 1, limit: pageSize })
    }
    return (
        <Loading isLoading={loading}>
            <div style={{ width: '100%', background: '#efefef', }}>
                <div style={{ width: "auto", margin: '0 120px' }}>
                    <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
                        <WrapperNavbar span={4}>
                            <NavBarComponent />
                        </WrapperNavbar>
                        <Col span={20}>
                            <WrapperProducts >
                                {products?.filter((pro) => {
                                    if (searchDebounce === '') {
                                        return pro;
                                    } else if (pro?.name?.toLowerCase()?.includes(searchDebounce?.toLowerCase())) {
                                        return pro;
                                    }
                                }).map((product) => {
                                    return (
                                        <CardComponent
                                            key={product._id}
                                            countInStock={product.countInStock}
                                            description={product.description}
                                            image={product.image}
                                            name={product.name}
                                            price={product.price}
                                            rating={product.rating}
                                            type={product.type}
                                            selled={product.selled}
                                            discount={product.discount}
                                            id={product._id}
                                        />
                                    )
                                })}
                            </WrapperProducts>
                            <Pagination onChange={onChange} defaultCurrent={panigate.page + 1} total={panigate?.total} style={{ textAlign: 'center', marginTop: '10px' }} />
                        </Col>
                    </Row>
                </div>
            </div>
        </Loading>
    )
}
export default TypeProductPage 