import { Image } from "antd";
import Slider from "react-slick";
import styled from "styled-components";

export const WrapperSliderStyle = styled(Slider)`
    & .slick-arrow.slick-prev {
        left: 12px;
        top: 50%;
        z-index: 10;
        &::before {
            font-size: 40px;
            color: #fff;
        }
    }
    & .slick-arrow.slick-next {
        right: 28px;
        top: 50%;
        z-index: 10;
        &::before {
            font-size: 40px;
            color: #fff;
        }
    }
    & .slick-dots {
        z-index: 10;
        bottom: 40px !important;
        li {
            button {
                &::before {
                    font-size: 20px;
                    color: #fff;
                }
            }
        }
        li.active {
            button {
                &::before {
                    color: #fff;
                }
            }
        }
    }
`
export const WrapperImageSlider = styled(Image)`
    background-size: cover;
`
export const WrapperImageRight = styled(Image)`
    background-size: cover;
    margin-bottom: 8px !important;
    cursor: pointer;
` 