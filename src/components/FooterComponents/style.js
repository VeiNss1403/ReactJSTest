import { Row } from "antd";
import styled from "styled-components";

export const WrapperFooter = styled(Row)`
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
  width: 1270px;
  padding: 10px 0;
`;
export const WrapperText = styled.div`
  color: #56493d;
  font-style: normal;
  font-size: 20px;
  line-height: 50px;
  font-family: Inter, sans-serif;
  cursor: pointer;
  &:hover {
    color: #00adb5;
  }
`;
export const WrapperText1 = styled.div`
  color: #333333;
  font-style: normal;
  font-size: 24px;
  line-height: 50px;
  font-family: Inter, sans-serif;
`;

export const WrapperTextFooter = styled.div`
  color: #333333;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 50px;
  font-family: Inter, sans-serif;
`;
export const WrapperTextFooterSmall = styled.span`
  font-size: 30px;
  color: #333333;
  font-style: normal;
  line-height: 40px;
  white-space: nowrap;
  font-family: Inter, sans-serif;
  text-decoration: none;
`;
