import './HeaderHat.css'
import {HEADER_TITLES} from "../constants";
import Slider from "react-slick";
import {useMedia} from "../hooks/useMedia";
import {useWindowSize} from "../hooks/useWindowSize";

export const HeaderHat=()=>{
    const {width: windowWidth, height: windowHeight} = useWindowSize();

    const device = useMedia();

    const settings = {
        infinite: true,
        autoplay: true,
        speed: device === 'phone' ? 1000 : 2000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable:true,
        arrows: false,
        pauseOnHover: false
    };

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
