import { Checkbox, Col, Rate, Row } from "antd";
import React from "react";
import {
  WrapperContent,
  WrapperLableText,
  WrapperTextPrice,
  WrapperTextRate,
  WrapperTextValue,
} from "./style";

const NavBarComponent = () => {
  const onChange = () => {};
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
            onChange={onChange}
          >
            {options.map((option) => {
              return (
                <Checkbox style={{ marginLeft: 0 }} value={option.value}>
                  {option}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
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
              onClick={() => {
              }}
            >
              <Rate
                style={{ fontSize: "12px", cursor: "pointer" }}
                disabled
                defaultValue={option}
              />
              <span style={{ marginLeft: "5px" }}>{`từ ${option} sao`}</span>
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
      <WrapperLableText>Lable</WrapperLableText>
      <WrapperContent>
        {renderContent("text", ["Tu lanh", "TV", "MAYGIAT"])}
      </WrapperContent>
      <WrapperContent>
        {renderContent("checkbox", ["Tu lanh", "TV", "MAYGIAT"])}
      </WrapperContent>
      <WrapperContent>
        {renderContent("price", [10000, "TV", "MAYGIAT"])}
      </WrapperContent>
      <WrapperContent>
        {renderContent("star", [5, 4, 3, 2, 1, 0])}
      </WrapperContent>
    </div>
  );
};

export default NavBarComponent;
