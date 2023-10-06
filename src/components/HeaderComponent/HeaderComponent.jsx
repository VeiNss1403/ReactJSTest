import React from "react"
import { Badge, Col } from 'antd';
import { WrapperAccountHeader, WrapperHeader, WrapperTextHeader, WrapperTextHeaderLogo } from "./style";
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const HeaderComponent = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    };
    console.log("🚀 ~ file: HeaderComponent.jsx:19 ~ HeaderComponent ~ user:",user)
    return (
        <div style={{ width: '100%', background: 'rbg(26, 148, 255)', display: 'flex', justifyContent: 'center' }}>
            <WrapperHeader>
                <Col span={5}>
                    <WrapperTextHeaderLogo>IT</WrapperTextHeaderLogo>
                </Col>
                <Col span={13}>
                    <ButtonInputSearch
                        size="large"
                        textButton="Tìm kiếm"
                        placeholder="Tìm kiếm"
                        bordered="false"
                        backgroundColorInput="#fff"
                        backgroundColorButton="#f97d61"
                    //onSearch={onSearch}
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
                    <WrapperAccountHeader>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        {user?.name ? (
                            <div>{user.name}</div>
                        ) : (
                            <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                                <WrapperTextHeader>
                                    Đăng nhập/Đăng ký
                                </WrapperTextHeader>
                                <div>
                                    <WrapperTextHeader>
                                        Tài Khoản
                                    </WrapperTextHeader>
                                    <CaretDownOutlined />
                                </div>
                            </div>
                        )}
                    </WrapperAccountHeader>
                    <div>
                        <Badge count={4} size="small">
                            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                        </Badge>
                        <WrapperTextHeader>
                            Giỏ hàng
                        </WrapperTextHeader>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}
export default HeaderComponent