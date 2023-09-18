import { Input } from "antd";
import React from "react";

const InputComponent = ({ size, bordered, placeholder, style, ...rests }) => {
    return (
        <Input
            size={size}
            placeholder={placeholder}
            bordered={bordered}
            style={style}
            {...rests}
        />
    );
};

export default InputComponent;
