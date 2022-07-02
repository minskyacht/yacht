import './ServiceContainer.css';
import Slider from "react-slick";
import {DEVICES, SERVICE_DATA, slidesToShow} from "../constants";
import {useMedia} from "../hooks/useMedia";

const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: 0
};

const SERVICE_IMAGES_SIZES={
    mobile: {width:300,height:400},
    desktop : {width:400,height:480}
}

export const ServiceContainer=({windowWidth})=>{
    const device=useMedia();

    const amountOfSlidesToShow=device===DEVICES.tablet || device===DEVICES.phone ? 1 : slidesToShow;
    const serviceImageSize=device===DEVICES.tablet || device===DEVICES.phone ?
            SERVICE_IMAGES_SIZES.mobile : SERVICE_IMAGES_SIZES.desktop;


        return (
        <div className="service_container">
            <h2 className={'service_title'}>УСЛУГИ</h2>
            <Slider {...{...settings,slidesToShow:amountOfSlidesToShow}} style={{width:`${windowWidth-100}px`}}>
                {SERVICE_DATA.map((data) => (
                    <div key={data.title}>
                    <div
                        style={{background:`url(${data.image})`,height:`${serviceImageSize.height}px`,width:`${serviceImageSize.width}px`}}
                        className={'service_item'} >
                        <h4
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
