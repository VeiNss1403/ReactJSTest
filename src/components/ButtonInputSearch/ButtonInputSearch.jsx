import React from "react";
import {
    SearchOutlined,
} from '@ant-design/icons';
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const ButtonInputSearch = (props) => {
    const {
        size,
        placeholder,
        bordered,
        textButton,
        backgroundColorInput,
        backgroundColorButton,
        colorButton = '#fff'
    } = props
    return (
        <div style={{ display: 'flex' }}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                bordered={bordered}
                style={{ display: 'flex', backgroundColor: backgroundColorInput }}
            />

            <ButtonComponent
                size={size}
                styleButton={{ display: 'flex', border: 'none', color: '#fff', backgroundColor: backgroundColorButton }}
                icon={<SearchOutlined color={colorButton} style={{ fontSize: '30px', color: '#fff' }} />}
                textButton={textButton}
                styleTextButton={{ color: colorButton }}
            />
        </div>
    );
};

export default ButtonInputSearch;
