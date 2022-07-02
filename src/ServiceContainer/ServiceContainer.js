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

export const ServiceContainer=({windowWidth})=>{
    const device=useMedia()

    const amountOfSlidesToShow=device===DEVICES.tablet || device===DEVICES.phone ? 1 : slidesToShow;

    return (
        <div className="service_container">
            <h2 className={'service_title'}>УСЛУГИ</h2>
            <Slider {...{...settings,slidesToShow:amountOfSlidesToShow}} style={{width:`${windowWidth - 100}px`}}>
                {SERVICE_DATA.map((data) => (
                    <div key={data.title}  className={'service_item'} >
                    <img src={data.image} height={500} alt={''}/>
                        <h4
                        className="service_item_title"
                        >
                        {data.title}
                        </h4>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
