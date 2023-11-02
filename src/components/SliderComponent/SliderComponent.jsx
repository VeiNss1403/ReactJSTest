import React from 'react'
import { WrapperImageRight, WrapperImageSlider, WrapperSliderStyle } from './style';
import { useNavigate } from 'react-router-dom';

const SliderComponent = ({ arrImages, arrImageRight }) => {
    const [image1, image2, image3]=arrImageRight
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const navigate = useNavigate()
    return (
        <div className='container' style={{ width: 1270,display:'flex', gap: 10, paddingTop:10, margin:'0 auto'}}>
            <WrapperSliderStyle className='col-md-9' {...settings}>
                {arrImages.map((image) => {
                    return (
                        <WrapperImageSlider key={image} src={image} alt="slider" preview={false} />
                    )
                })}
            </WrapperSliderStyle>
            <div className='col-xl-3'style={{flex:'0 1 auto'}}>
                <WrapperImageRight src={image1} alt="slider" preview={false} onClick={() => navigate('/product-details/65440b08eeef210a2bcb1931')}/>
                <WrapperImageRight src={image2} alt="slider" preview={false} onClick={() => navigate('/product-details/65440e14eeef210a2bcb1974')}/>
                <WrapperImageRight style={{margin:0}} src={image3} alt="slider" preview={false} onClick={() => navigate('/')}/>
            </div>
        </div>
    )
}

export default SliderComponent