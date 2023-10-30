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
        textbutton,
        bordered,
        backgroundColorInput = '#fff',
        backgroundColorButton = '#df171f',
        colorButton = '#fff'
    } = props

    return (
        <div style={{ display: 'flex', borderRadius:'5px'}}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                bordered={bordered}
                style={{
                    backgroundColor: backgroundColorInput,
                    border: '1px solid #df171f',
                    borderRadius: '10px 0px 0px 10px',
                }}
                {...props}
            />
            <ButtonComponent
                size={size}
                styleButton={{
                    background: backgroundColorButton,
                    border: !bordered && 'none',
                    borderRadius: '0px 10px 10px 0px'
                }}
                icon={<SearchOutlined color={colorButton} style={{ color: '#fff'  }} />}
                textButton={textbutton}
                styleTextButton={{ color: colorButton }}
            />
        </div>
    )
};

export default ButtonInputSearch;
