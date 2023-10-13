import React, { useState } from "react"
import { Badge, Button, Col, Popover } from 'antd';
import { WrapperAccountHeader, WrapperContentPopup, WrapperHeader, WrapperTextHeader, WrapperTextHeaderLogo } from "./style";
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { resetUser } from "../../redux/slices/userSlide";
import Loading from "../LoadingComponent/LoadingComponent";
const HeaderComponent = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    };
    const handleLogOut = async () => {
        setLoading(true);
        await UserService.LogoutUser()
        dispatch(resetUser())
        setLoading(false);
    }
    const content = (
        <div>
            <WrapperContentPopup onClick={() => navigate('/profile-user')}>Thông tin người dùng</WrapperContentPopup>
            <WrapperContentPopup onClick={handleLogOut}>Đăng xuất</WrapperContentPopup>
        </div>
    );
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
                    <Loading isLoading={loading}>
                        <WrapperAccountHeader>
                            <UserOutlined style={{ fontSize: '30px' }} />
                            {user?.name ? (
                                <>
                                    <Popover content={content} trigger="click">
                                        <div style={{ cursor: 'pointer' }}>{user.name}</div>
                                    </Popover>
                                </>
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
                    </Loading>
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