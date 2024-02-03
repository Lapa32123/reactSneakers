import bannerimg from "../../../public/baner/banner.jpg"
import Button from "../Button/Button"
import './Banner.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import "./Banner.css"
export default function Banner(){
    return(
        <>
        <Swiper modules={[Navigation]} className="mySwiper">
                <SwiperSlide><div className="banner">
                    <img src={bannerimg} alt="" />
                    <div className="banner-text">
                        <h1><span>Stan Smith</span>, <br />  Forever!</h1>
                        <Button href="/main" padding="30px" bradius="118px">CATALOG</Button>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="banner">
                    <img src={bannerimg} alt="" />
                    <div className="banner-text">
                        <h1><span>Stan Smith</span>, <br />  Forever!</h1>
                        <Button href="/main" padding="30px" bradius="118px">CATALOG</Button>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="banner">
                    <img src={bannerimg} alt="" />
                    <div className="banner-text">
                        <h1><span>Stan Smith</span>, <br />  Forever!</h1>
                        <Button href="/main" padding="30px" bradius="118px">CATALOG</Button>
                    </div>
                    </div>
                </SwiperSlide>
        
      </Swiper>
        
        </>
    )
}