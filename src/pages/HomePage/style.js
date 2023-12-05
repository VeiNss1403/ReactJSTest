import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
export const WrapperTypeProductContent = styled.div`
  background-color: #00adb5;
`;
export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1270px;
  margin: 0 auto;
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background: #00adb5;
    span {
      color: #fff;
    }
  }
  width: 100%;
  color: #00adb5;
  text-align: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointers")};
`;

export const WrapperProducts = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;
export const WrapperMiniType = styled.div`
  color: #00adb5;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  font-family: Inter, sans-serif;
  &:hover {
    color: #6c757d;
  }
`;
