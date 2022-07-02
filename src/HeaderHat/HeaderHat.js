import './HeaderHat.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {HEADER_TITLES} from "../constants";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false
};

export const HeaderHat=({windowHeight,windowWidth})=>{

    return (
        <div className="header_hat" style={{height:`${windowHeight}px`}}>
          <div className="container">
              <Slider {...settings} style={{minHeight:`90%`,maxHeight:`${windowHeight}px`,width:`${windowWidth}px`}}>
                  {HEADER_TITLES.map((title, index) => (
                      <div key={title} className="demo">
                          <h3
                              key={index}
                              className="demo_item"
                              style={{width:`${windowWidth}px`}}
                          >
                              {title}
                          </h3>
                      </div>
                  ))}
              </Slider>
          </div>
 </div>
    );
}
