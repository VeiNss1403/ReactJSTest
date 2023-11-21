import React, { useEffect, useState } from "react";
import Loading from "../../components/LoadingComponent/Loading";
import { useQuery } from "@tanstack/react-query";
import * as OrderService from "../../services/OrderService";
import { useSelector } from "react-redux";
import { convertPrice } from "../../utils";
import {
  WrapperItemOrder,
  WrapperListOrder,
  WrapperHeaderItem,
  WrapperFooterItem,
  WrapperContainer,
  WrapperStatus,
} from "./style";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as message from "../../components/Message/Message";
import moment from "moment/moment";

const MyOrderPage = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const fetchMyOrder = async () => {
    const res = await OrderService.getOrderByUserId(state?.id, state?.token);
    return res.data;
  };
  const user = useSelector((state) => state.user);

  const queryOrder = useQuery(
    { queryKey: ["orders"], queryFn: fetchMyOrder },
    {
      enabled: state?.id && state?.token,
    }
  );
  const { isLoading, data } = queryOrder;

  const handleDetailsOrder = (id) => {
    navigate(`/details-order/${id}`, {
      state: {
        token: state?.token,
      },
    });
  };

  const mutation = useMutationHooks((data) => {
    const { id, token, orderItems, userId } = data;
    const res = OrderService.cancelOrder(id, token, orderItems, userId);
    return res;
  });

  const handleCanceOrder = (order) => {
    mutation.mutate(
      {
        id: order._id,
        token: state?.token,
        orderItems: order?.orderItems,
        userId: user.id,
      },
      {
        onSuccess: () => {
          queryOrder.refetch();
        },
      }
    );
  };
  const {
    isLoading: isLoadingCancel,
    isSuccess: isSuccessCancel,
    isError: isErrorCancle,
    data: dataCancel,
  } = mutation;

  useEffect(() => {
    if (isSuccessCancel && dataCancel?.status === "OK") {
      message.success();
    } else if (isSuccessCancel && dataCancel?.status === "ERR") {
      message.error(dataCancel?.message);
    } else if (isErrorCancle) {
      message.error();
    }
  }, [isErrorCancle, isSuccessCancel]);

  const renderProduct = (data) => {
    return data?.map((order) => {
      return (
        <WrapperHeaderItem key={order?._id}>
          <img
            src={order?.image}
            alt="Hình ảnh đơn hàng"
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              border: "1px solid #eee", // Sử dụng một màu xám nhạt hơn cho đường viền
              padding: "2px",
              borderRadius: "4px", // Thêm border-radius để có hình dáng tròn
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", // Thêm một box shadow nhẹ
            }}
          />
          <div
            style={{
              width: 260,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              marginLeft: "10px",
            }}
          >
            {order?.name}
          </div>
          <span
            style={{ fontSize: "13px", color: "#242424", marginLeft: "auto" }}
          >
            {convertPrice(order?.price)}
            <span
              style={{ fontSize: "13px", color: "#ff424e", paddingLeft: "5px" }}
            >
              -{order?.discount}%
            </span>
          </span>
        </WrapperHeaderItem>
      );
    });
  };

  return (
    <Loading isLoading={isLoading || isLoadingCancel}>
      <WrapperContainer>
        <div style={{ height: "100%", width: "1270px", margin: "0 auto" }}>
          <h4>Đơn hàng của tôi</h4>
          <WrapperListOrder>
            {data?.map((order) => {
              return (
                <WrapperItemOrder key={order?._id}>
                  <WrapperStatus>
                    <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                      Trạng thái
                    </span>
                    <div>
                      <span style={{ color: "rgb(255, 66, 78)" }}>
                        Giao hàng:{" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(90, 32, 193)",
                          fontWeight: "bold",
                        }}
                      >{`${
                        order.isDelivered ? "Đã giao hàng" : "Chưa giao hàng"
                      }`}</span>
                    </div>
                    <div>
                      <span style={{ color: "rgb(255, 66, 78)" }}>
                        Thanh toán:{" "}
                      </span>
                      <span
                        style={{
                          color: "rgb(90, 32, 193)",
                          fontWeight: "bold",
                        }}
                      >{`${
                        order.isPaid ? "Đã thanh toán" : "Chưa thanh toán"
                      }`}</span>
                    </div>
                  </WrapperStatus>
                  {renderProduct(order?.orderItems)}

                  <WrapperFooterItem>
                    <div>
                      <span style={{ color: "rgb(255, 66, 78)" }}>
                        Ngày đặt hàng:
                      </span>
                      <span
                        style={{
                          fontSize: "13px",
                          color: "rgb(56, 56, 61)",
                          fontWeight: 700,
                          paddingLeft: 5,
                        }}
                      >
                        {moment(order?.createdAt).format("DD-MM-YYYY")}
                      </span>
                    </div>
                    <div>
                      <div>
                        <span style={{ color: "rgb(255, 66, 78)" }}>
                          Tổng tiền:
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            color: "rgb(56, 56, 61)",
                            fontWeight: 700,
                            paddingLeft: 5,
                          }}
                        >
                          {convertPrice(order?.totalPrice)}
                        </span>
                      </div>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <ButtonComponent
                          onClick={() => handleCanceOrder(order)}
                          size={40}
                          styleButton={{
                            height: "36px",
                            border: "1px solid #9255FD",
                            borderRadius: "4px",
                          }}
                          textbutton={"Hủy đơn hàng"}
                          styleTextButton={{
                            color: "#9255FD",
                            fontSize: "14px",
                          }}
                        ></ButtonComponent>
                        <ButtonComponent
                          onClick={() => handleDetailsOrder(order?._id)}
                          size={40}
                          styleButton={{
                            height: "36px",
                            border: "1px solid #9255FD",
                            borderRadius: "4px",
                          }}
                          textbutton={"Xem chi tiết"}
                          styleTextButton={{
                            color: "#9255FD",
                            fontSize: "14px",
                          }}
                        ></ButtonComponent>
                      </div>
                    </div>
                  </WrapperFooterItem>
                </WrapperItemOrder>
              );
            })}
          </WrapperListOrder>
        </div>
      </WrapperContainer>
    </Loading>
  );
};

export default MyOrderPage;
