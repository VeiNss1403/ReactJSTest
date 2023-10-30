import React from "react";
import { useNavigate, useParams } from 'react-router-dom'
import ProductDetailComponent from "../../components/ProductDetailComponent/ProductDetailComponent";
const ProductDetailPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    return (
        <div style={{ width: '100%', background: '#efefef', height: '100%' }}>
            <div style={{ width: '100%', height: '100%', margin: '0px 120px' }} >
                <span style={{ fontSize: '20px' }}><span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => { navigate('/') }}>Trang chủ</span> - Chi tiết sản phẩm</span>
                <ProductDetailComponent idProduct={id} />
            </div>
        </div>
    )
}
export default ProductDetailPage
