import { Col } from "antd";
import styled from "styled-components";

export const WrapperProducts = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const WrapperNavbar = styled(Col)`
  background: #fff;
  margin-right: 10px;
  padding: 10px;
  border-radius: 4px;
  height: fit-content;
  width: 200px;
`;
export const WrapperNavigate = styled.span`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #aaa;
  }
`;
