import './HeaderHat.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {HEADER_TITLES} from "../constants";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true
};

export const HeaderHat=({windowHeight,windowWidth})=>{

    return (
        <div className="header_hat" style={{height:`${windowHeight}px`,width:`${windowWidth}px`}}>
            {/*<Carousel autoPlay={true} style={{marginTop:'80px'}}>*/}
            {/*    {HEADER_TITLES.map((title, index) => (*/}
            {/*        <h3*/}
            {/*            key={index}*/}
            {/*            className="demo_item"*/}
            {/*        >*/}
            {/*            {title.title}*/}
            {/*        </h3>*/}
            {/*    ))}*/}
            {/*</Carousel>*/}
            <Slider {...settings} style={{minHeight:`${windowHeight}px`,width:`${windowWidth}px`}}>
                    {HEADER_TITLES.map((title, index) => (
                        <div className="demo">
                        <h3
                            key={index}
                            className="demo_item"
                            style={{minHeight:`${windowHeight}px`,width:`${windowWidth}px`}}
                        >
                            {title}
                        </h3>
                        </div>
                    ))}
            </Slider>
            {/*<Swiper*/}
            {/*    speed={500}*/}
            {/*    modules={[Navigation, Pagination, Scrollbar, A11y]}*/}
            {/*    navigation*/}
            {/*    pagination={{ clickable: true }}*/}
            {/*    spaceBetween={50}*/}
            {/*    slidesPerView={1}*/}
            {/*    onSlideChange={() => console.log('slide change')}*/}
            {/*    onSwiper={(swiper) => console.log(swiper)}*/}
            {/*>*/}
            {/*    {HEADER_TITLES.map((title, index) => (*/}
            {/*               <SwiperSlide ><h3*/}
            {/*                    key={index}*/}
            {/*                    className="demo_item"*/}
            {/*                    style={{height:`${windowHeight}px`,width:`${windowWidth}px`}}*/}
            {/*                >*/}
            {/*                    {title.title}*/}
            {/*               </h3></SwiperSlide>*/}
            {/*            ))}*/}
            {/*</Swiper>*/}
        </div>
    );
}
