import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1270px;
    padding: 10px 0;
`

export const WrapperHeaderAccout = styled.div`
    display: flex;
    align-items: center;
    color: #000;
    gap: 10px;
    max-width: 200px;
`
export const WrapperHearderMenu = styled.div`
    transition: all 0.3s ease;
    padding: 15px;
    display: inline-block;
    color: #333333;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    font-family: Inter,sans-serif;
    cursor: pointer;
    &:hover {
        color: #df171f;
      }
`
export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #000;
    white-space: nowrap;
`

export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: rgb(26, 148, 255);
    }
`