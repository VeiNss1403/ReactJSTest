import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color:#fff;
    align-items: center;
    gap: 16px;
    flex-Wrap:nowrap;
    width: 100%;
`
export const WrapperTextHeaderLogo = styled.span`
    font-size:18px;
    color: #fff;
    font-weight:bold;
    text-align:left;
`
export const WrapperAccountHeader = styled.div`
    display: flex;
    align-items: center;
    color:#333333;
    gap:10px;
    font-weight:bold
`
export const WrapperTextHeader = styled.span`
    font-size:12px;
    color: #333333;
    white-space: nowrap;
`

export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover{
        color: #ea5a39; 
    }
`