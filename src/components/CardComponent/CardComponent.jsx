import React from "react";
import { StyleNameProduct, WrapperCardStyle, WrapperPriceDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from "./style";
import {
    StarFilled
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const CardComponent = (props) => {
    const navigate = useNavigate()
    const { countInStock, description, image, name, price, rating, type, selled, discount, id } = props
    const handleDetailProduct = (id) => {
        navigate(`/product-detail/${id}`)
    }
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src={image} />}
            onClick={() => handleDetailProduct(id)}
        >
            <StyleNameProduct>{name}</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span>{rating}</span> <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                </span>
                <WrapperStyleTextSell> | Đã bán {selled}+</WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
                <span style={{ marginRight: '8px' }}>
                    {price.toLocaleString()} đ
                </span>
                <WrapperPriceDiscountText>
                    - {discount || 5}%
                </WrapperPriceDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    );
};

export default CardComponent;
