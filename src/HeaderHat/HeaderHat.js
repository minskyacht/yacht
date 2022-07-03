import './HeaderHat.css'
import {HEADER_TITLES} from "../constants";
import Slider from "react-slick";
import arrow from "../images/arrow.svg";

const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable:true,
    arrows: true,
    pauseOnHover: false,
    nextArrow: <img src={arrow} alt='next'/>,
    prevArrow: <img src={arrow} alt='prev'/>
};

export const HeaderHat=({windowHeight,windowWidth})=>{

    return (
        <div className="header_hat" style={{height:`${windowHeight+80}px`}}>
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
