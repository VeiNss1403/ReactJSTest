import { Col, Menu, Row } from "antd";
import React, { useEffect, useState } from "react";
import { getItem } from "../../utils";
import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  RollbackOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import HeaderComponent from "../../components/HeaderCompoent/HeaderComponent";
import AdminUser from "../../components/AdminUser/AdminUser";
import AdminProduct from "../../components/AdminProduct/AdminProduct";
import OrderAdmin from "../../components/OrderAdmin/OrderAmin";
import * as OrderService from "../../services/OrderService";
import * as ProductService from "../../services/ProductService";
import * as UserService from "../../services/UserService";

import CustomizedContent from "./components/CustomizedContent";
import { useSelector } from "react-redux";
import { useQueries } from "@tanstack/react-query";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const user = useSelector((state) => state.user);
  const [keySelected, setKeySelected] = useState("trangchu");
  const navigate = useNavigate();

  const items = [
    getItem("Quay lại trang bán hàng", "/", <RollbackOutlined />),
    getItem("Trang chủ", "trangchu", <HomeOutlined />),
    getItem("Người dùng", "users", <UserOutlined />),
    getItem("Sản phẩm", "products", <AppstoreOutlined />),
    getItem("Đơn hàng", "orders", <ShoppingCartOutlined />),
    getItem("Doanh thu", "revenue", <DollarOutlined />),
  ];

  const getAllOrder = async () => {
    const res = await OrderService.getAllOrder(user?.access_token);
    return { data: res?.data, key: "orders" };
  };

  const getAllProducts = async () => {
    const res = await ProductService.getAllProduct();
    return { data: res?.data, key: "products" };
  };

  const getAllUsers = async () => {
    const res = await UserService.getAllUser(user?.access_token);
    return { data: res?.data, key: "users" };
  };

  const queries = useQueries({
    queries: [
      { queryKey: ["productsAdmin"], queryFn: getAllProducts, staleTime: 1000 * 60 },
      { queryKey: ["usersAdmin"], queryFn: getAllUsers, staleTime: 1000 * 60 },
      { queryKey: ["ordersAdmin"], queryFn: getAllOrder, staleTime: 1000 * 60 },
    ],
  });
  const memoCount = useMemo(() => {
    const result = {
      products: null,
      users: null,
      orders: null,
    };
    try {
      if (queries) {
        queries.forEach((query) => {
          if (query?.data?.key)
            result[query?.data?.key] = query?.data?.data?.length;
        });
      }
      return result;
    } catch (error) {
      return result;
    }
  }, [queries]);
  const COLORS = {
    users: ["#e66465", "#9198e5"],
    products: ["#a8c0ff", "#3f2b96"],
    orders: ["#11998e", "#38ef7d"],
  };

  const renderPage = (key) => {
    switch (key) {
      case "users":
        return <AdminUser />;
      case "products":
        return <AdminProduct />;
      case "orders":
        return <OrderAdmin />;
      case "trangchu":
        return (
          <CustomizedContent
            data={memoCount}
            colors={COLORS}
            setKeySelected={setKeySelected}
          />
        );
      case "/":
        return navigate("/");
      case "revenue":
        return;
      default:
        return;
    }
  };

  const handleOnCLick = ({ key }) => {
    setKeySelected(key);
  };
  return (
    <>
      <HeaderComponent isHiddenSearch isHiddenCart isHiddenElement />
      <Row>
        <Col span={4}>
          <Menu
            mode="inline"
            style={{
              boxShadow: "1px 1px 2px #ccc",
              height: "90vh",
            }}
            items={items}
            onClick={handleOnCLick}
          />
        </Col>
        <Col span={20}>{renderPage(keySelected)}</Col>
      </Row>
    </>
  );
};

export default AdminPage;
