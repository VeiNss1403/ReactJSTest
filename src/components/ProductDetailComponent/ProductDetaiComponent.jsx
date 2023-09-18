import React from "react";
import { Col, Row, Image } from 'antd';
import ImageProduct from "../../Assets/Images/BaoKhuyen.jpg"
import ImageProductSmall from "../../Assets/Images/BaoKhuyen2.jpg"
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQuantityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from "./style";
import {
    StarFilled,
    PlusOutlined,
    MinusOutlined
} from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
const ProducDetailComponent =()=>{
    return(
        <Row style={{padding:'16px', background:'#fff', borderRadius:'4px'}}>
            <Col span={10} style={{borderRight:'1px solid #e5e5e5', paddingRight:'8px'}}>
                <Image src={ImageProduct} alt="Image product" preview={false} />
                <Row style={{paddingTop:'10px', justifyContent:'space-between'}}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={ImageProductSmall} alt="Image small" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={ImageProductSmall} alt="Image small" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={ImageProductSmall} alt="Image small" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={ImageProductSmall} alt="Image small" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={ImageProductSmall} alt="Image small" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={ImageProductSmall} alt="Image small" preview={false} />
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{paddingLeft:'10px'}}>
                <WrapperStyleNameProduct>Sống xanh không phải điều gì phức tạp hay khó khăn. Chỉ cần một hành động nhỏ mỗi ngày, bạn đã có thể sống lành mạnh, khỏe mạnh, năng động, thân thiện hơn với môi trường.</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }}/>
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }}/>
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }}/>
                    <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>200.000đ</WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao đến </span>
                    <span className='address'>trái tim tui</span>-
                    <span className='change-address'>Đổi địa chỉ</span>
                </WrapperAddressProduct>
                <div style={{margin:'10px 0 20px', padding:'10px 0', borderTop:'1px solid #e5e5e5', borderBottom:'1px solid #e5e5e5'}}>
                    <div style={{marginBottom:'10px'}}>Số lượng</div>
                    <WrapperQuantityProduct>
                        <button style={{border:"none", background:'transparent'}}>
                        <MinusOutlined style={{color:'#000', fontSize:'20px'}}/>
                        </button>
                        <WrapperInputNumber size="small" defaultValue={0} />
                        <button style={{border:"none", background:'transparent'}}>
                        <PlusOutlined style={{color:'#000', fontSize:'20px'}}/>
                        </button>
                    </WrapperQuantityProduct>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                    <ButtonComponent
                        size={40}
                        styleButton={{
                            background:'rgb(255,57,69',
                            height: '48px',
                            width: '220px',
                            border:'none',
                            borderRadius: '4px',
                        }}
                        textButton={'Chọn mua'}
                        styleTextButton={{color:'#fff', fontSize:'15px', fontweight:'700'}}
                    ></ButtonComponent>
                </div>
            </Col>
        </Row>
    )
}
export default ProducDetailComponent