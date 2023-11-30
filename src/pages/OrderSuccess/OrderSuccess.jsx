import React from "react";
import {
  Lable,
  WrapperInfo,
  WrapperContainer,
  WrapperValue,
  WrapperCountOrder,
  WrapperItemOrder,
  WrapperItemOrderInfo,
} from "./style";
import Loading from "../../components/LoadingComponent/Loading";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { orderContant } from "../../contant";
import { convertPrice } from "../../utils";

const OrderSucess = () => {
  const location = useLocation();
  const { state } = location;
  console.log("🚀 ~ file: OrderSuccess.jsx:20 ~ OrderSucess ~ state:", state);
  return (
    <div style={{ background: "#f5f5fa", with: "100%", height: "100vh" }}>
      <Loading isLoading={false}>
        <div style={{ height: "100%", width: "1270px", margin: "0 auto" }}>
          <h3>Đơn hàng đặt thành công</h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <WrapperContainer>
              <WrapperInfo>
                <div>
                  <Lable>Phương thức giao hàng</Lable>
                  <WrapperValue>
                    <span style={{ color: "#ea8500", fontWeight: "bold" }}>
                      {orderContant.delivery[state?.delivery]}
                    </span>{" "}
                    Giao hàng tiết kiệm
                  </WrapperValue>
                </div>
              </WrapperInfo>
              <WrapperInfo>
                <div>
                  <Lable>Phương thức thanh toán</Lable>

                  <WrapperValue>
                    {orderContant.payment[state?.payment]}
                  </WrapperValue>
                </div>
              </WrapperInfo>
              <WrapperItemOrderInfo>
                {state.orders?.map((order) => {
                  return (
                    <WrapperItemOrder key={order?.name}>
                      <div>
                        <img
                          src={order.image}
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
                      </div>
                      <div
                        style={{
                          width: 260,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {order?.name}
                      </div>
                      <span style={{ fontSize: "13px", color: "#242424" }}>
                        Số lượng: {order?.amount}
                      </span>
                      <span style={{ fontSize: "13px", color: "#242424" }}>
                        Giá tiền: {convertPrice(order?.price)}
                      </span>
                    </WrapperItemOrder>
                  );
                })}
              </WrapperItemOrderInfo>
              <div>
                <div style={{ fontSize: "16px", color: "red" }}>
                  Phí vận chuyển:{" "}
                  {state?.shippingPrice === 0 ? (
                    convertPrice(state?.shippingPrice)
                  ) : (
                    <span> Miễn phí vận chuyển</span>
                  )}
                </div>
                <div style={{ fontSize: "16px", color: "red" }}>
                  Tổng tiền: {convertPrice(state?.totalPriceMemo)}
                </div>
              </div>
            </WrapperContainer>
          </div>
        </div>
      </Loading>
    </div>
  );
};

export default OrderSucess;
