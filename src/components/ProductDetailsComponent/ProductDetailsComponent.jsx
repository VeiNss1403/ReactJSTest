import { Col, Image, Rate, Row } from "antd";
import React from "react";
import {
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperAddressProduct,
  WrapperQualityProduct,
  WrapperInputNumber,
  WrapperDescriptionTitle,
  WrapperDescriptionContent,
  WrapperCommit,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
} from "./style";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import * as ProductService from "../../services/ProductService";
import { useQuery } from "@tanstack/react-query";
import Loading from "../LoadingComponent/Loading";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addOrderProduct, resetOrder } from "../../redux/slides/orderSlide";
import { convertPrice, initFacebookSDK } from "../../utils";
import { useEffect } from "react";
import * as message from "../Message/Message";
import LikeButtonComponent from "../LikeButtonComponent/LikeButtonComponent";
import CommentComponent from "../CommentComponent/CommentComponent";

const ProductDetailsComponent = ({ idProduct }) => {
  const [numProduct, setNumProduct] = useState(1);
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);
  const [errorLimitOrder, setErrorLimitOrder] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const onChange = (value) => {
    setNumProduct(Number(value));
  };

  const fetchGetDetailsProduct = async (context) => {
    const id = context?.queryKey && context?.queryKey[1];
    if (id) {
      const res = await ProductService.getDetailsProduct(id);
      return res.data;
    }
  };

  useEffect(() => {
    initFacebookSDK();
  }, []);

  useEffect(() => {
    const orderRedux = order?.orderItems?.find(
      (item) => item.product === productDetails?._id
    );
    if (
      orderRedux?.amount + numProduct <= orderRedux?.countInstock ||
      (!orderRedux && productDetails?.countInStock > 0)
    ) {
      setErrorLimitOrder(false);
    } else if (productDetails?.countInStock === 0) {
      setErrorLimitOrder(true);
    }
  }, [numProduct]);

  useEffect(() => {
    if (order.isSucessOrder) {
      message.success("Đã thêm vào giỏ hàng");
    }
    return () => {
      dispatch(resetOrder());
    };
  }, [order.isSucessOrder]);

  const handleChangeCount = (type, limited) => {
    if (type === "increase") {
      if (!limited) {
        setNumProduct(numProduct + 1);
      }
    } else {
      if (!limited) {
        setNumProduct(numProduct - 1);
      }
    }
  };

  const { isLoading, data: productDetails } = useQuery(
    ["product-details", idProduct],
    fetchGetDetailsProduct,
    { enabled: !!idProduct }
  );
  console.log(
    "🚀 ~ file: ProductDetailsComponent.jsx:93 ~ ProductDetailsComponent ~ productDetails:",
    productDetails
  );

  const handleAddOrderProduct = () => {
    if (!user?.id) {
      navigate("/sign-in", { state: location?.pathname });
    } else {
      // {
      //     name: { type: String, required: true },
      //     amount: { type: Number, required: true },
      //     image: { type: String, required: true },
      //     price: { type: Number, required: true },
      //     product: {
      //         type: mongoose.Schema.Types.ObjectId,
      //         ref: 'Product',
      //         required: true,
      //     },
      // },
      const orderRedux = order?.orderItems?.find(
        (item) => item.product === productDetails?._id
      );
      if (
        orderRedux?.amount + numProduct <= orderRedux?.countInstock ||
        (!orderRedux && productDetails?.countInStock > 0)
      ) {
        dispatch(
          addOrderProduct({
            orderItem: {
              name: productDetails?.name,
              amount: numProduct,
              image: productDetails?.image,
              price: productDetails?.price,
              product: productDetails?._id,
              discount: productDetails?.discount,
              countInstock: productDetails?.countInStock,
            },
          })
        );
      } else {
        setErrorLimitOrder(true);
      }
    }
  };

  return (
    <Loading isLoading={isLoading}>
      <Row
        style={{
          padding: "16px",
          background: "#fff",
          borderRadius: "4px",
          height: "100%",
        }}
      >
        <Col
          span={10}
          style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
        >
          <Image
            src={productDetails?.image}
            alt="image prodcut"
            preview={false}
          />
          <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
            {productDetails?.miniImages?.map((image) => (
              <WrapperStyleColImage span={4}>
                <WrapperStyleImageSmall
                  src={image}
                  alt="image small"
                  preview={false}
                />
              </WrapperStyleColImage>
            ))}
          </Row>
        </Col>
        <Col span={14} style={{ paddingLeft: "10px" }}>
          <WrapperStyleNameProduct>
            {productDetails?.name}
          </WrapperStyleNameProduct>
          <div>
            <Rate
              allowHalf
              defaultValue={productDetails?.rating}
              value={productDetails?.rating}
            />
            <WrapperStyleTextSell> | Đã bán 0+</WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>
              {convertPrice(productDetails?.price)}
            </WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
            <span>Giao đến </span>
            <span className="address">{user?.address}</span> -
            <span className="change-address">Đổi địa chỉ</span>
          </WrapperAddressProduct>
          <LikeButtonComponent
            dataHref={
              process.env.REACT_APP_IS_LOCAL
                ? "https://developers.facebook.com/docs/plugins/"
                : window.location.href
            }
          />
          <div
            style={{
              margin: "10px 0 20px",
              padding: "10px 0",
              borderTop: "1px solid #e5e5e5",
              borderBottom: "1px solid #e5e5e5",
            }}
          >
            <div style={{ marginBottom: "10px" }}>Số lượng</div>
            <WrapperQualityProduct>
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
                onClick={() => handleChangeCount("decrease", numProduct === 1)}
              >
                <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
              </button>
              <WrapperInputNumber
                onChange={onChange}
                defaultValue={1}
                max={productDetails?.countInStock}
                min={1}
                value={numProduct}
                size="small"
              />
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
                onClick={() =>
                  handleChangeCount(
                    "increase",
                    numProduct === productDetails?.countInStock
                  )
                }
              >
                <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
              </button>
            </WrapperQualityProduct>
          </div>
          <div style={{ display: "flex", aliggItems: "center", gap: "12px" }}>
            <div>
              <ButtonComponent
                size={40}
                styleButton={{
                  background: "rgb(255, 57, 69)",
                  height: "48px",
                  width: "220px",
                  border: "none",
                  borderRadius: "4px",
                }}
                onClick={handleAddOrderProduct}
                textbutton={"Chọn mua"}
                styleTextButton={{
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              ></ButtonComponent>
              {errorLimitOrder && (
                <div style={{ color: "red" }}>San pham het hang</div>
              )}
            </div>
          </div>
        </Col>
        <CommentComponent
          dataHref={
            process.env.REACT_APP_IS_LOCAL
              ? "https://developers.facebook.com/docs/plugins/comments#configurator"
              : window.location.href
          }
          width="1270"
        />
      </Row>
      <Row
        style={{
          padding: "16px",
          background: "#fff",
          borderRadius: "4px",
          height: "100%",
        }}
      >
        <Col span={16} style={{ paddingRight: "8px" }}>
          <div>
            <h3
              style={{
                color: "#df171f",
                marginBottom: "24px",
                fontWeight: "bolder",
              }}
            >
              THÔNG TIN SẢN PHẨM
            </h3>
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid #ccc",
                  alignItems: "center",
                }}
              >
                <WrapperDescriptionTitle>Tên sản phẩm</WrapperDescriptionTitle>
                <WrapperDescriptionContent>
                  {productDetails?.name}
                </WrapperDescriptionContent>
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid #ccc",
                  alignItems: "center",
                }}
              >
                <WrapperDescriptionTitle>Thành phần</WrapperDescriptionTitle>
                <WrapperDescriptionContent>
                  {productDetails?.ingredient}
                </WrapperDescriptionContent>
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid #ccc",
                  alignItems: "center",
                }}
              >
                <WrapperDescriptionTitle>
                  Quốc giá sản xuất
                </WrapperDescriptionTitle>
                <WrapperDescriptionContent>
                  {productDetails?.country}
                </WrapperDescriptionContent>
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid #ccc",
                  alignItems: "center",
                }}
              >
                <WrapperDescriptionTitle>Thương hiệu</WrapperDescriptionTitle>
                <WrapperDescriptionContent>
                  {productDetails?.brand}
                </WrapperDescriptionContent>
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid #ccc",
                  alignItems: "center",
                }}
              >
                <WrapperDescriptionTitle>
                  Mô tả sản phẩm
                </WrapperDescriptionTitle>
                <WrapperDescriptionContent>
                  {productDetails?.description}
                </WrapperDescriptionContent>
              </div>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div>
            <h4
              style={{
                backgroundColor: "#df171f",
                color: "#fff",
                marginBottom: "24px",
                padding: "10px",
                fontWeight: "bolder",
              }}
            >
              3 Cam kết của Vivita
            </h4>
            <div
              style={{
                marginBottom: "30px",
                backgroundColor: "#FAFAFA",
              }}
            >
              <ul
                style={{
                  marginBottom: "0 !important",
                  padding: "0 !important",
                }}
              >
                <li style={{ display: "flex" }}>
                  <WrapperCommit>1</WrapperCommit>
                  <p style={{ fontSize: "18px" }}>
                    <strong
                      style={{
                        color: "#df171f",
                        paddingLeft: "5px",
                      }}
                    >
                      Cam kết bán hàng mới
                    </strong>
                    - Vivita chỉ bán các sản phẩm còn mới, hạn sử dụng còn xa,
                    đảm bảo chất lượng. Nói không với hàng hết date, cận date.
                  </p>
                </li>
                <li style={{ display: "flex" }}>
                  <WrapperCommit>2</WrapperCommit>
                  <p style={{ fontSize: "18px" }}>
                    <strong
                      style={{
                        color: "#df171f",
                        paddingLeft: "5px",
                      }}
                    >
                      Cam kết tư vấn đúng
                    </strong>
                    - Chuyên nghiệp và chân thành tư vấn từ tâm, tư vấn đúng vấn
                    đề, đúng hàng, đúng cách dùng.
                  </p>
                </li>
                <li style={{ display: "flex" }}>
                  <WrapperCommit>3</WrapperCommit>
                  <p style={{ fontSize: "18px" }}>
                    <strong
                      style={{
                        color: "#df171f",
                        paddingLeft: "5px",
                      }}
                    >
                      Cam kết chính hãng
                    </strong>
                    - Hoàn tiền 200% nếu phát hiện hàng không chính hãng.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Loading>
  );
};

export default ProductDetailsComponent;
