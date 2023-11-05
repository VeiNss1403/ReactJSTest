import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
export const WrapperTypeProductContent = styled.div`
    background-image: url('https://vivita.cdn.vccloud.vn/wp-content/themes/stsk2020/assets/images/bg_red.png'); 
`
export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1270px;
    margin: 0 auto;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: #9255FD;
        span {
            color: #fff;
        }
    }
    width: 100%;
    color: #9255FD;
    text-align: center;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'}
`

export const WrapperProducts = styled.div`
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
`