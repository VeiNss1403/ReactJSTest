import React, { useState, useEffect } from "react";
import { WrapperHeader } from "./style";
import Loading from "../LoadingComponent/Loading";
import ModalComponent from "../ModalComponent/ModalComponent";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { DatePicker, Space } from "antd";
import moment from "moment";
import * as OrderService from "../../services/OrderService";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
const { RangePicker } = DatePicker;

const AdminRevenue = () => {
  const user = useSelector((state) => state?.user);
  const [lableDate, setLabelDate] = useState([]);
  const [dataDate, setDataDate] = useState([]);
  const getAllOrder = async () => {
    const res = await OrderService.getAllOrder(user?.access_token);
    return res;
  };
  const queryOrder = useQuery({
    queryKey: ["ordersRevenue"],
    queryFn: getAllOrder,
  });

  useEffect(() => {
    if (queryOrder.data) handleRevenue();
  }, [queryOrder.data]);

  const handleRevenue = (time) => {
    const startDate = time
      ? moment(time[0].$d, "DD-MM-YYYY")
      : moment("01-01-1970", "DD-MM-YYYY");
    const endDate = time ? moment(time[1].$d, "DD-MM-YYYY") : moment();

    const filteredData = queryOrder?.data?.data?.filter((order) => {
      const isPaid = order.isPaid === true;
      const isDelivered = order.isDelivered === true;
      const isCompleted = order.isCompleted === true;
      const orderDate = moment(order?.updatedAt);
      const isWithinDateRange = orderDate.isBetween(
        startDate,
        endDate,
        null,
        "[]"
      );
      return isPaid && isDelivered && isCompleted && isWithinDateRange;
    });

    const groupedOrders = {};
    filteredData.forEach((order) => {
      const orderDateKey = moment(order.updatedAt).format("DD-MM-YYYY");
      if (!groupedOrders[orderDateKey]) {
        groupedOrders[orderDateKey] = {
          orders: [],
          totalRevenue: 0,
        };
      }

      groupedOrders[orderDateKey].orders.push(order);
      groupedOrders[orderDateKey].totalRevenue += order.totalPrice || 0;
    });
    const sortedLabels = Object.keys(groupedOrders).sort(
      (a, b) => moment(a, "DD-MM-YYYY").unix() - moment(b, "DD-MM-YYYY").unix()
    );
    setLabelDate(sortedLabels);
    const revenueData = sortedLabels.map(
      (date) => groupedOrders[date].totalRevenue
    );
    setDataDate(revenueData);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels: lableDate,
    datasets: [
      {
        fill: true,
        label: "Doanh thu",
        data: dataDate,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div style={{ width: "auto", paddingLeft: "10px" }}>
      <WrapperHeader>Thống kê doanh thu</WrapperHeader>
      <div style={{ padding: "20px" }}>
        <WrapperHeader>Thống kê doanh thu theo ngày</WrapperHeader>
        <Space direction="vertical" size={12}>
          <RangePicker
            size="large"
            bordered={false}
            format={"DD-MM-YYYY"}
            onChange={handleRevenue}
          />
        </Space>
        <Line options={options} data={data} />;
      </div>
      <ModalComponent title="Xóa người dùng" open={""} onCancel={""} onOk={""}>
        <Loading isLoading={""}>
          <div>Bạn có chắc xóa tài khoản này không?</div>
        </Loading>
      </ModalComponent>
    </div>
  );
};

export default AdminRevenue;
