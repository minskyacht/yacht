import './HeaderHat.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {HEADER_TITLES} from "../constants";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true
};

export const HeaderHat=({windowHeight,windowWidth})=>{

    return (
        <div className="header_hat" style={{height:`${windowHeight}px`}}>
            <div className={'demo'}>
                <Slider {...settings} style={{height:`${(windowHeight/1.6)}px`}}>
                    {HEADER_TITLES.map((title, index) => (
                        <h3
                            key={index}
                            className="demo_item"
                        >
                            {title}
                        </h3>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
