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
import { useNavigate } from "react-router-dom";
const SignInPage = () => {
    const navigate = useNavigate()
    const handleNavigateSignUp = (e) => {
        navigate('/sign-up');
    }
    const handleOnchangeEmail = (value) => {
        setEmail(value);
    }
    const handleOnchangePassword = (value) => {
        setPassword(value);
    }
    const handleSignIn = () => {
        console.log('sign-in', email, password)
    }
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgb(0,0,0,0.53)', height: '100vh' }}>
            <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
                <WrapperContainerLeft>
                    <h1>Xin Chào,</h1>
                    <p>Đăng nhập và Tạo tài khoản</p>
                    <InputFrom style={{ marginBottom: '10px' }} placeholder="abc@gmail.com"
                        value={email} onChange={handleOnchangeEmail} />
                    <div style={{ position: 'relative' }}>
                        <span onClick={() => setIsShowPassword(!isShowPassword)} style={{
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
                        <InputFrom placeholder="password" type={isShowPassword ? "text" : "password"}
                            value={password} onChange={handleOnchangePassword} />
                    </div>
                    <ButtonComponent
                        disabled={!email.length || !password.length}
                        onClick={handleSignIn}
                        size={40}
                        styleButton={{
                            background: 'rgb(255,57,69)',
                            height: '48px',
                            width: '100%',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '16px 0 10px',
                        }}
                        textButton={'Đăng nhập'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                    ></ButtonComponent>
                    <p><WrapperTextLight>Quên mật khẩu</WrapperTextLight></p>
                    <p>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp}>Tạo tài khoản</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={ImageLogo} preview={false} alt="image-logo" height="auto" width="203px" />
                    <h4>Mua sắm tại </h4>
                </WrapperContainerRight>
            </div>
        </div>
    )
}
export default SignInPage