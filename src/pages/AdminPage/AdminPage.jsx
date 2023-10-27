import { Menu } from "antd";
import React, { useState } from "react";
import { getItem } from "../../ultils";
import {
    UserOutlined,
    AppstoreOutlined,
} from '@ant-design/icons';
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import AdminProduct from "../../components/AdminProduct/AdminProduct";
import AdminUser from "../../components/AdminUser/AdminUser";
const AdminPage = () => {
    const items = [
        getItem('Người dùng', 'user', <UserOutlined />),
        getItem('Sản phẩm', 'product', <AppstoreOutlined />),
    ];
    const [keySelected, setKeySelected] = useState('');
    const renderPage = (key) => {
        switch (key) {
            case 'user':
                return (
                    <AdminUser />
                )
            case 'product':
                return (
                    <AdminProduct />
                )
            default:
                return <></>
        }

    }
    const handleOnclick = ({ key }) => {
        setKeySelected(key)
    }
    return (
        <>
            <HeaderComponent isHiddenSearch isHiddenCart />
            <div style={{ display: 'flex', }}>
                <Menu
                    mode="inline"
                    style={{
                        width: '256px',
                        boxShadow: '1px 1px 2px #ccc',
                        height: '100vh',
                    }}
                    items={items}
                    onClick={handleOnclick}
                />
                <div style={{ flex: 1 , padding: 15}}>
                    {renderPage(keySelected)}
                </div>
            </div>
        </>
    )
}
export default AdminPage