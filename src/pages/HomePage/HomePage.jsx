import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../Assets/Images/slider1.jpg";
import slider2 from "../../Assets/Images/slider2.jpg";
import slider3 from "../../Assets/Images/slider3.jpg";
import CardComponent from "../../components/CardComponent/CardComponent";
//import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
const HomePage = () => {
    const arr = ['TV', 'Tu Lanh', 'Lap Top']
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
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
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