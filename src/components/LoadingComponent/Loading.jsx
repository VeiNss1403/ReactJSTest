import { Spin } from "antd";
import React from "react";

const Loading = ({ children, isLoading, deday = 200, style }) => {
  return (
    <Spin spinning={isLoading} delay={deday} style={style}>
      {children}
    </Spin>
  );
};

export default Loading;
