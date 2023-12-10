import { Checkbox, Col, Rate, Row } from "antd";
import React from "react";
import {
  WrapperContent,
  WrapperLableText,
  WrapperTextPrice,
  WrapperTextRate,
  WrapperTextValue,
} from "./style";
import { useDispatch } from "react-redux";
import { brandProduct } from "../../redux/slides/productSlide";

const NavBarComponent = () => {
  const dispatch = useDispatch();
  const onChange = (data) => {
    console.log(data);
    dispatch(brandProduct(data));
  };
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
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {}}
            >
              <Rate
                style={{ fontSize: "12px", cursor: "pointer" }}
                disabled
                defaultValue={option}
              />
              <span style={{ paddingLeft: "5px" }}>{`từ ${option} sao`}</span>
            </div>
          );
        });
      case "price":
        return options.map((option) => {
          return <WrapperTextPrice>{option}</WrapperTextPrice>;
        });
      default:
        return {};
    }
  };

  return (
    <div>
      <WrapperLableText>Giá sản Phẩm</WrapperLableText>
      <WrapperContent>
        {renderContent("checkbox", ["Tu lanh", "TV", "MAYGIAT"])}
      </WrapperContent>
      <WrapperLableText>Thương hiệu</WrapperLableText>
      <WrapperContent>
        {renderContent("price", [10000, "TV", "MAYGIAT"])}
      </WrapperContent>
      <WrapperLableText>Sản phẩm theo số sao đánh giá</WrapperLableText>
      <WrapperContent>
        {renderContent("star", [5, 4, 3, 2, 1, 0])}
      </WrapperContent>
    </div>
  );
};

export default NavBarComponent;
