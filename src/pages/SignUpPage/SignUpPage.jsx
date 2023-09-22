import React, { useState } from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputFrom from "../../components/InputFrom/InputFrom";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import ImageLogo from "../../Assets/Images/BaoKhuyen2.jpg"
import {
    EyeFilled,
    EyeInvisibleFilled,
} from '@ant-design/icons';
const SignUpPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgb(0,0,0,0.53)', height: '100vh' }}>
            <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
                <WrapperContainerLeft>
                    <h1>Xin Chào,</h1>
                    <p>Đăng nhập và Tạo tài khoản</p>
                    <InputFrom style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" />
                    <div style={{ position: 'relative' }}>
                        <span style={{
                            zIndex: 10,
                            position: 'absolute',
                            top: '4px',
                            right: '8px',
                        }}>{
                                isShowPassword ? (
                                    <EyeFilled />
                                ) : (
                                    <EyeInvisibleFilled />
                                )
                            }
                        </span>
                        <InputFrom placeholder="password" style={{ marginBottom: '10px' }} type={isShowPassword ? "text" : "password"} />
                    </div><div style={{ position: 'relative' }}>
                        <span style={{
                            zIndex: 10,
                            position: 'absolute',
                            top: '4px',
                            right: '8px',
                        }}>{
                                isShowPassword ? (
                                    <EyeFilled />
                                ) : (
                                    <EyeInvisibleFilled />
                                )
                            }
                        </span>
                        <InputFrom placeholder="comfirm password" type={isShowPassword ? "text" : "password"} />
                    </div>
                    <ButtonComponent
                        size={40}
                        styleButton={{
                            background: 'rgb(255,57,69',
                            height: '48px',
                            width: '100%',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '16px 0 10px',
                        }}
                        textButton={'Đăng ký'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                    ></ButtonComponent>
                    <p>Bạn đã có tài khoản? <WrapperTextLight>Đăng Nhập</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={ImageLogo} preview={false} alt="image-logo" height="auto" width="203px" />
                    <h4>Mua sắm tại </h4>
                </WrapperContainerRight>
            </div>
        </div>
    )
}
export default SignUpPage