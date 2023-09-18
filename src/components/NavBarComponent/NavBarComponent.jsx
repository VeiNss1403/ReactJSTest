import React from "react";
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from "./style";
import { Checkbox, Rate } from "antd";

const NavBarComponent = () => {
    const onChange = () => {
        console.log();
    };
    const renderContent = (type, option) => {
        switch (type) {
            case 'text':
                return option.map((option) => {
                    return <WrapperTextValue>{option}</WrapperTextValue>
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: "flex", flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {option.map((option) => {
                            return (
                                <Checkbox style={{ marginLeft: 0 }} value={option.value}>{option.lable}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return (
                    option.map((option) => {
                        return (
                            <div style={{ display: 'flex', gap: '4px' }}>
                                <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                                <span> {`từ ${option} sao`}</span>
                            </div >
                        )
                    })
                )
            case 'price':
                return (
                    option.map((option) => {
                        return (
                            <WrapperTextPrice>{option}</WrapperTextPrice>
                        )
                    })
                )
            default:
                return {

                }
        }
    }
    return (
        <div>
            <WrapperLableText>laybel</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['Tu Lanh', 'TV', 'May Giat'])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('checkbox', [
                    { value: 'a', lable: 'A' },
                    { value: 'b', lable: 'B' }
                ])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('star', [3, 4, 5])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('price', ['duoi 40.000', 'tren 40.000'])}
            </WrapperContent>
        </div>
    );
};

export default NavBarComponent;
