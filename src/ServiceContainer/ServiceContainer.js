import './ServiceContainer.css';
import Slider from 'react-slick';
import {SERVICE_DATA, slidesToShow} from '../constants';
import arrow from '../images/arrow.svg'
import {useSliderSizes} from "../hooks/useSliderSizes";
import {useWindowSize} from "../hooks/useWindowSize";

const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <img src={arrow} alt='next'/>,
    prevArrow: <img src={arrow} alt='prev'/>
};

const SERVICE_IMAGES_SIZES={
    mobile: {width:300,height:400},
    desktop : {width:400,height:480}
}

export const ServiceContainer=()=>{
    const { width: windowWidth } = useWindowSize()

    const {
        amountOfSlidesToShow,
        newImagesSize: serviceImageSize
    } = useSliderSizes(SERVICE_IMAGES_SIZES)

    return (
        <div className='service_container'>
            <h2 className={'service_title'}>УСЛУГИ</h2>
            <Slider {...{...settings,slidesToShow:amountOfSlidesToShow}} style={{width:`${windowWidth-100}px`}}>
                {SERVICE_DATA.map((data) => (
                    <div key={data.title}>
                    <div
                        style={{background:`url(${data.image})`,height:`${serviceImageSize.height}px`,width:`${serviceImageSize.width}px`}}
                        className={'service_item'} >
                        <h4
                        className='service_item_title'
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
