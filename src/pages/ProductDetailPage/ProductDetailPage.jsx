import React from "react";
import { useNavigate, useParams } from 'react-router-dom'
import ProductDetailComponent from "../../components/ProductDetailComponent/ProductDetailComponent";
const ProductDetailPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    return (
        <div style={{ padding: '0 120px', background: '#efefef', height: '1000px' }}>
            <span style={{fontSize:'20px'}}><span style={{cursor:'pointer', fontWeight:'bold'}} onClick={() => {navigate('/')}}>Trang chủ</span> - Chi tiết sản phẩm</span>
            <ProductDetailComponent idProduct={id} />
        </div>
    )
}
export default ProductDetailPage
