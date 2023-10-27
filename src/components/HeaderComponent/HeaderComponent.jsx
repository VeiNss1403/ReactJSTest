import React, { useEffect, useState } from "react"
import { Badge, Col, Popover } from 'antd';
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
const HeaderComponent = (isHiddenSearch = false, isHiddenCart = false) => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [userName, setUserName] = useState()
    const [userAvatar, setUserAvatar] = useState()
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
    useEffect(() => {
        setLoading(true);
        setUserName(user?.name)
        setUserAvatar(user?.avatar)
        setLoading(false);
    }, [user?.name, user?.avatar]);
    const content = (
        <div>
            <WrapperContentPopup onClick={() => navigate('/profile-user')}>Thông tin người dùng</WrapperContentPopup>
            {user?.isAdmin && (
                <WrapperContentPopup onClick={() => navigate('/system/admin')}>Quản lý hệ thống</WrapperContentPopup>
            )}
            <WrapperContentPopup onClick={handleLogOut}>Đăng xuất</WrapperContentPopup>
        </div>
    );
    return (
        <div style={{ width: '100%', background: 'rbg(26, 148, 255)', display: 'flex', justifyContent: 'center' }}>
            <WrapperHeader style={{ justifyContent: isHiddenCart && isHiddenSearch ? 'space-between' : 'unset' }}>
                <Col span={5}>
                    <WrapperTextHeaderLogo>IT</WrapperTextHeaderLogo>
                </Col>
                {!isHiddenSearch && (
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
                )}
                <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
                    <Loading isLoading={loading}>
                        <WrapperAccountHeader>
                            {userAvatar ? (
                                <img src={userAvatar} style={{
                                    height: '35px',
                                    width: '35px',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                }} alt="avatar" />
                            ) : (
                                <UserOutlined style={{ fontSize: '30px' }} />
                            )}
                            {user?.access_token ? (
                                <>
                                    <Popover content={content} trigger="click">
                                        <div style={{ cursor: 'pointer' }}>{userName?.length ? userName : user?.email}</div>
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
                    {!isHiddenCart && (
                        <div>
                            <Badge count={4} size="small">
                                <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                            </Badge>
                            <WrapperTextHeader>
                                Giỏ hàng
                            </WrapperTextHeader>
                        </div>
                    )}

                </Col>
            </WrapperHeader>
        </div>
    )
}
export default HeaderComponent