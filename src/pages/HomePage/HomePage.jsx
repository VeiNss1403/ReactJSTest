import React, { useState } from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../Assets/Images/slider1.jpg";
import slider2 from "../../Assets/Images/slider2.jpg";
import slider3 from "../../Assets/Images/slider3.jpg";
import CardComponent from "../../components/CardComponent/CardComponent";
import { useQuery } from "@tanstack/react-query";
import * as ProductService from "../../services/ProductService";
import { useSelector } from "react-redux";
import Loading from "../../components/LoadingComponent/LoadingComponent";
import { useDebounce } from "../../hooks/useDebounce";
const HomePage = () => {
    const searchProduct = useSelector((state) => state?.product?.search)
    const [loading, setLoading] = useState(false)
    const [limit, setLimit] = useState(6)
    const searchDebounce = useDebounce(searchProduct, 1000)
    const arr = ['TV', 'Tu Lanh', 'Lap Top']
    const fetchProductAll = async (context) => {
        const limit = context?.queryKey && context?.queryKey[1]
        const search = context?.queryKey && context?.queryKey[2]
        const res = await ProductService.getAllProducts(search, limit)
        return res
    }

    const { isLoading, data: products, isPreviousData } = useQuery(['products', limit, searchDebounce], fetchProductAll, { retry: 3, retryDelay: 1000, keepPreviousData: true })
    return (
        <Loading isLoading={isLoading || loading}>
            < div style={{ width: 'auto', margin: '0 120px' }}>
                <WrapperTypeProduct>
                    {
                        arr.map((item) => {
                            return (
                                <TypeProduct name={item} key={item} />
                            )
                        })
                    }
                </WrapperTypeProduct>
            </div>
            <div className="body" style={{ width: '100%', background: '#efefef' }}>
                <div id="container" style={{ backgroundColor: "#efefef", padding: "0 120px", height: '1000px', width: 'auto', margin: '0 auto' }}>   <SliderComponent arrImages={[slider1, slider2, slider3]} />
                    <WrapperProducts>
                        {products?.data?.map((products) => {
                            return (
                                <CardComponent
                                    key={products._id}
                                    countInStock={products.countInStock}
                                    description={products.description}
                                    image={products.image}
                                    name={products.name}
                                    price={products.price}
                                    rating={products.rating}
                                    type={products.type}
                                    selled={products.selled}
                                    discount={products.discount}
                                    id={products._id}
                                />
                            )
                        })}
                    </WrapperProducts>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <WrapperButtonMore
                            textButton={isPreviousData ? 'Load more' : 'Xem Thêm'}
                            type="outline"
                            styleButton={{
                                border: '1px solid rgp(11,116,229)',
                                color: `${products?.total === products?.data?.length ? '#ccc' : 'rpg(11,116,229)'}`,
                                width: '240px', height: '38px', borderRadius: '4px'
                            }}
                            disabled={products?.total === products?.data?.length || products?.totalPages === 1}
                            styleTextButton={{ fontWeight: 500, color: products?.total === products?.data?.length && '#fff' }}
                            onClick={() => setLimit((prev) => prev + 6)}
                        />
                    </div>
                </div>
            </div>
        </Loading>
    )
}
export default HomePage