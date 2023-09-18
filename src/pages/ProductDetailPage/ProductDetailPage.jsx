import React from "react";
import ProducDetailComponent from "../../components/ProductDetailComponent/ProductDetaiComponent";
const ProductDetailPage = () => {
    return (
        <div style={{padding:'0 120px', background:'#efefef', height:'1000px'}}>
            <h4>Trang Chủ</h4>
            <div style={{display:'flex', background:'#fff'}}>
                <ProducDetailComponent />
            </div>
        </div>
    )
}
export default ProductDetailPage