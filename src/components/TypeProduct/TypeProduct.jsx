import React from "react";
import { useNavigate } from "react-router-dom";
import { WrapperType } from "./styled";
import { Popover } from "antd";
import { CaretDownFilled } from "@ant-design/icons";

const TypeProduct = ({ name, content, onOpenChange }) => {
  const navigate = useNavigate();
  const handleNavigatetype = (type) => {
    navigate(
      `/product/${type
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        ?.replace(/ /g, "_")}`,
      { state: type }
    );
  };
  return (
    <Popover
      placement="bottom"
      content={content}
      onOpenChange={onOpenChange}
      trigger="hover"
    >
      <WrapperType onClick={() => handleNavigatetype(name)}>
        {name}
        <CaretDownFilled style={{ padding: 3 }} />
      </WrapperType>
    </Popover>
  );
};

export default TypeProduct;
