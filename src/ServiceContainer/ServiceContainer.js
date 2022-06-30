import './ServiceContainer.css';
import Slider from "react-slick";
import {SERVICE_DATA, slidesToShow} from "../constants";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
   /* autoplay: true,*/
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: 0
};

export const ServiceContainer=({windowWidth})=>{
    return (
        <div className="service_container">
            <h2 className={'service_title'}>УСЛУГИ</h2>
            <Slider {...settings} style={{width:`${windowWidth - 100}px`}}>
                {SERVICE_DATA.map((data, index) => (
                    <div key={data.title}  className={'service_item'} >
                    <img src={data.image} height={500} alt={''}/>
                        <div className={'text_wrapper'}><h4
                        key={index}
                        className="service_item_title"
                        >
                        {data.title}
                        </h4>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
