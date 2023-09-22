import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color:#ea5a39;
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
    color:#fff;
    gap:10px;
`
export const WrapperTextHeader = styled.span`
    font-size:12px;
    color: #fff;
    white-space: nowrap;
`