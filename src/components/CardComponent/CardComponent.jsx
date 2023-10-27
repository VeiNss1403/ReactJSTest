import React from "react";
import { StyleNameProduct, WrapperCardStyle, WrapperPriceDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from "./style";
import {
    StarFilled
} from '@ant-design/icons';
const CardComponent = (props) => {
    const { countInStock, description, image, name, price, rating, type, selled, discount } = props
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
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
                    {price}
                </span>
                <WrapperPriceDiscountText>
                    {discount || 5}%
                </WrapperPriceDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    );
};

export default CardComponent;
