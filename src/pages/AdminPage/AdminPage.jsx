import { Col, Menu, Row } from "antd";
import "chartjs-plugin-datalabels";
import React, { useState } from "react";
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
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import moment from "moment";
import { BarChart, ChartContainer, ChartWrapper } from "./style";
import AdminRevenue from "../../components/AdminRevenue/AdminRevenue";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
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
      {
        queryKey: ["productsAdmin"],
        queryFn: getAllProducts,
        staleTime: 1000 * 60,
      },
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
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const yesterdayAfter = new Date();
  yesterdayAfter.setDate(yesterday.getDate() - 1);
  const lastMonth = new Date();
  lastMonth.setMonth(today.getMonth() - 1);
  const twoMonthsAgo = new Date();
  twoMonthsAgo.setMonth(lastMonth.getMonth() - 1);
  const lastYear = new Date();
  lastYear.setFullYear(today.getFullYear() - 1);
  const twoYearsAgo = new Date();
  twoYearsAgo.setFullYear(lastYear.getFullYear() - 1);
  //Theo Ngày
  const filteredData = queries[2]?.data?.data?.filter((order) => {
    const isPaid = order.isPaid === true;

    const isDelivered = order.isDelivered === true;

    const isCompleted = order.isCompleted === true;
    const time =
      moment(order?.updatedAt).format("DD-MM-YYYY") ===
      moment(today).format("DD-MM-YYYY");
    return isPaid && isDelivered && isCompleted && time;
  });
  const filteredDataYesterday = queries[2]?.data?.data?.filter((order) => {
    const isPaid = order.isPaid === true;

    const isDelivered = order.isDelivered === true;

    const isCompleted = order.isCompleted === true;
    const time =
      moment(order?.updatedAt).format("DD-MM-YYYY") ===
      moment(yesterday).format("DD-MM-YYYY");
    return isPaid && isDelivered && isCompleted && time;
  });
  const filteredDataYesterdayAfter = queries[2]?.data?.data?.filter((order) => {
    const isPaid = order.isPaid === true;

    const isDelivered = order.isDelivered === true;

    const isCompleted = order.isCompleted === true;
    const time =
      moment(order?.updatedAt).format("DD-MM-YYYY") ===
      moment(yesterdayAfter).format("DD-MM-YYYY");
    return isPaid && isDelivered && isCompleted && time;
  });
  //Theo Tháng
  const filteredDataMonth = queries[2]?.data?.data?.filter((order) => {
    const isPaid = order.isPaid === true;
    const isDelivered = order.isDelivered === true;
    const isCompleted = order.isCompleted === true;
    const timeMonths =
      moment(order?.updatedAt).format("MM-YYYY") ===
      moment(today).format("MM-YYYY");
    return isPaid && isDelivered && isCompleted && timeMonths;
  });
  const filteredDataLastMonth = queries[2]?.data?.data?.filter((order) => {
    const isPaid = order.isPaid === true;
    const isDelivered = order.isDelivered === true;
    const isCompleted = order.isCompleted === true;
    const timeLastMonth =
      moment(order?.updatedAt).format("MM-YYYY") ===
      moment(lastMonth).format("MM-YYYY");
    return isPaid && isDelivered && isCompleted && timeLastMonth;
  });

  const filteredDataTwoMonthsAgo = queries[2]?.data?.data?.filter((order) => {
    const isPaid = order.isPaid === true;
    const isDelivered = order.isDelivered === true;
    const isCompleted = order.isCompleted === true;
    const timeTwoMonthsAgo =
      moment(order?.updatedAt).format("MM-YYYY") ===
      moment(twoMonthsAgo).format("MM-YYYY");
    return isPaid && isDelivered && isCompleted && timeTwoMonthsAgo;
  });
  //Theo Năm
  const filteredDataYear = queries[2]?.data?.data?.filter((order) => {
    const isPaid = order.isPaid === true;
    const isDelivered = order.isDelivered === true;
    const isCompleted = order.isCompleted === true;
    const timeMonths =
      moment(order?.updatedAt).format("YYYY") === moment(today).format("YYYY");
    return isPaid && isDelivered && isCompleted && timeMonths;
  });
  const filteredDataLastYear = queries[2]?.data?.data?.filter((order) => {
    const isPaid = order.isPaid === true;
    const isDelivered = order.isDelivered === true;
    const isCompleted = order.isCompleted === true;
    const timeLastYear =
      moment(order?.updatedAt).format("YYYY") ===
      moment(lastYear).format("YYYY");
    return isPaid && isDelivered && isCompleted && timeLastYear;
  });

  const filteredDataTwoYearAgo = queries[2]?.data?.data?.filter((order) => {
    const isPaid = order.isPaid === true;
    const isDelivered = order.isDelivered === true;
    const isCompleted = order.isCompleted === true;
    const timeTwoYearsAgo =
      moment(order?.updatedAt).format("YYYY") ===
      moment(twoYearsAgo).format("YYYY");
    return isPaid && isDelivered && isCompleted && timeTwoYearsAgo;
  });
  const sumDT = (data) => {
    const result = data?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.totalPrice;
    }, 0);
    return result;
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Doanh thu ngày",
        color: "#333",
        padding: 10,
        lineHeight: 1.5,
        font: {
          size: 24,
          weight: "bold",
          family: "Arial, sans-serif",
        },
      },
    },
  };

  const labels = [
    `${moment(yesterdayAfter).format("DD-MM-YYYY")}`,
    `${moment(yesterday).format("DD-MM-YYYY")}`,
    `${moment(today).format("DD-MM-YYYY")}`,
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Doanh Thu",
        data: [
          sumDT(filteredDataYesterdayAfter),
          sumDT(filteredDataYesterday),
          sumDT(filteredData),
        ],
        backgroundColor: "rgba(255, 99, 132, 0.3)",
        borderColor: "rgba(255, 99, 132, 1)", // Màu đường viền
        borderWidth: 1,
      },
    ],
  };
  const optionsMonth = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Doanh thu tháng",
        color: "#333",
        padding: 10,
        lineHeight: 1.5,
        font: {
          size: 24,
          weight: "bold",
          family: "Arial, sans-serif",
        },
      },
    },
  };

  const labelsMonth = [
    `${moment(twoMonthsAgo).format("MM-YYYY")}`,
    `${moment(lastMonth).format("MM-YYYY")}`,
    `${moment(today).format("MM-YYYY")}`,
  ];

  const dataMonth = {
    labels: labelsMonth,
    datasets: [
      {
        label: "Doanh Thu",
        data: [
          sumDT(filteredDataTwoMonthsAgo),
          sumDT(filteredDataLastMonth),
          sumDT(filteredDataMonth),
        ],
        backgroundColor: "rgba(75, 192, 192, 0.3)", // Màu nền mới
        borderColor: "rgba(75, 192, 192, 1)", // Màu đường viền
        borderWidth: 1,
      },
    ],
  };
  const optionsYear = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Doanh thu năm",
        color: "#333",
        padding: 10,
        lineHeight: 1.5,
        font: {
          size: 24,
          weight: "bold",
          family: "Arial, sans-serif",
        },
      },
    },
  };

  const labelsYear = [
    `${moment(twoYearsAgo).format("YYYY")}`,
    `${moment(lastYear).format("YYYY")}`,
    `${moment(today).format("YYYY")}`,
  ];

  const dataYear = {
    labels: labelsYear,
    datasets: [
      {
        label: "Doanh Thu",
        data: [
          sumDT(filteredDataTwoYearAgo),
          sumDT(filteredDataLastYear),
          sumDT(filteredDataYear),
        ],
        backgroundColor: "rgba(255, 205, 86, 0.3)", // Màu nền mới
        borderColor: "rgba(255, 205, 86, 1)", // Màu đường viền
        borderWidth: 1,
      },
    ],
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
          <div>
            <CustomizedContent
              data={memoCount}
              colors={COLORS}
              setKeySelected={setKeySelected}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0px",
              }}
            >
              <ChartContainer>
                <ChartWrapper>
                  <BarChart data={data} options={options} />
                </ChartWrapper>
              </ChartContainer>
              <ChartContainer>
                <ChartWrapper>
                  <BarChart data={dataMonth} options={optionsMonth} />
                </ChartWrapper>
              </ChartContainer>
            </div>
            <ChartContainer>
              <ChartWrapper>
                <BarChart data={dataYear} options={optionsYear} />
              </ChartWrapper>
            </ChartContainer>
          </div>
        );
      case "revenue":
        return <AdminRevenue />;
      case "/":
        return navigate("/");
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
