import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../Assets/Images/slider1.jpg";
import slider2 from "../../Assets/Images/slider2.jpg";
import slider3 from "../../Assets/Images/slider3.jpg";
import CardComponent from "../../components/CardComponent/CardComponent";
import { useQuery } from "@tanstack/react-query";
import * as ProductService from "../../services/ProductService";
const HomePage = () => {
    const arr = ['TV', 'Tu Lanh', 'Lap Top']
    const fetchProductAll = async () => {
        const res = await ProductService.getAllProducts()
        return res
    }
    const { isLoading, data: products } = useQuery(['product'], fetchProductAll, { retry: 3, retryDelay: 1000 })
    console.log("🚀 ~ file: HomePage.jsx:18 ~ HomePage ~ products:", products)

    return (
        <>
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
                                />
                            )
                        })}
                    </WrapperProducts>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <WrapperButtonMore textButton="Xem Thêm" Type="outline" styleButton={{
                            border: '1px solid rpg(11,116,229)',
                            color: 'rpg(11,116,229)',
                            width: '240px', height: '38px', borderRadius: '4px'
                        }} styleTextButton={{ fontWeight: 500 }} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage