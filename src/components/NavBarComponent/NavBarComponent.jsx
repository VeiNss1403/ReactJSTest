import { Checkbox, Col, InputNumber, Rate, Row } from "antd";
import React, { useState } from "react";
import {
  WrapperContent,
  WrapperLableText,
  WrapperTextPrice,
  WrapperTextRate,
  WrapperTextValue,
} from "./style";
import { useDispatch } from "react-redux";
import {
  brandProduct,
  pricemaxProduct,
  priceminProduct,
  ratingProduct,
} from "../../redux/slides/productSlide";
import { useQuery } from "@tanstack/react-query";
import * as ProductService from "../../services/ProductService";
import { WrapperButtonMore } from "../../pages/HomePage/style";
import { ArrowRightOutlined } from "@ant-design/icons";
import { render } from "@testing-library/react";

const NavBarComponent = () => {
  const dispatch = useDispatch();
  const [limit, setlimit] = useState(6);
  const onChange = (data) => {
    dispatch(brandProduct(data));
  };
  const onChangeMinPrice = (data) => {
    dispatch(priceminProduct(data));
  };
  const onChangeMaxPrice = (data) => {
    dispatch(pricemaxProduct(data));
  };
  const handleRating = (data) => {
    dispatch(ratingProduct(data));
  };
  const fetchAllBrandProduct = async () => {
    const res = await ProductService.getAllBrandProduct();
    return res;
  };
  const queryBrand = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllBrandProduct,
  });
  const brandFirst = queryBrand?.data?.data?.slice(0, limit);

  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            options={options}
            onChange={onChange}
          />
        );
      case "star":
        return options.map((option) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => handleRating(option)}
            >
              <Rate
                style={{ fontSize: "16px", cursor: "pointer" }}
                disabled
                defaultValue={option}
              />
              <span
                style={{ fontSize: "16px", paddingLeft: "5px" }}
              >{`từ ${option} sao`}</span>
            </div>
          );
        });
      case "starcheckbox":
        return options.map((option) => {
          return (
            <Checkbox.Group
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
              options={options}
              onChange={onChange}
            />
          );
        });
      case "price":
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InputNumber
              size="large"
              min={0}
              max={10000000}
              defaultValue={0}
              onChange={onChangeMinPrice}
            />
            <ArrowRightOutlined style={{ paddingLeft: 5, paddingRight: 5 }} />
            <InputNumber
              size="large"
              min={0}
              max={10000000}
              defaultValue={0}
              onChange={onChangeMaxPrice}
            />
          </div>
        );
      default:
        return {};
    }
  };

  return (
    <div>
      <WrapperLableText>Giá sản phẩm</WrapperLableText>
      <span>Chọn khoảng giá</span>
      <WrapperContent>{renderContent("price")}</WrapperContent>
      <WrapperLableText>Thương hiệu</WrapperLableText>
      <WrapperContent>
        {renderContent("checkbox", brandFirst)}
        {limit !== queryBrand.length ? (
          <WrapperButtonMore
            textbutton={"Xem thêm"}
            type="outline"
            styleButton={{
              border: `1px solid ${"#00adb5"}`,
              color: `${"#00adb5"}`,
              width: "auto",
              height: "38px",
              borderRadius: "4px",
            }}
            styleTextButton={{
              fontWeight: 500,
              color: "#000",
            }}
            onClick={() => setlimit(queryBrand.length)}
          />
        ) : (
          <WrapperButtonMore
            textbutton={"Rút gọn"}
            type="outline"
            styleButton={{
              border: `1px solid ${"#00adb5"}`,
              color: `${"#00adb5"}`,
              width: "auto",
              height: "38px",
              borderRadius: "4px",
            }}
            styleTextButton={{
              fontWeight: 500,
              color: "#000",
            }}
            onClick={() => setlimit(6)}
          />
        )}
      </WrapperContent>
      <WrapperLableText>Sản phẩm theo số sao đánh giá</WrapperLableText>
      <WrapperContent>{renderContent("star", [5, 4, 3, 2, 1])}</WrapperContent>
    </div>
  );
};

export default NavBarComponent;
