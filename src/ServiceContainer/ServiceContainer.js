import './ServiceContainer.css';
import Slider from 'react-slick';
import {DEVICES, SERVICE_DATA, slidesToShow} from '../constants';
import {useMedia} from '../hooks/useMedia';
import arrow from '../images/arrow.svg'

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

export const ServiceContainer=({windowWidth})=>{
    const device=useMedia()

    const amountOfSlidesToShow=device===DEVICES.tablet || device===DEVICES.phone ? 1 : slidesToShow;

    return (
        <div className='service_container'>
            <h2 className={'service_title'}>УСЛУГИ</h2>
            <Slider {...{...settings,slidesToShow:amountOfSlidesToShow}} style={{width:`${windowWidth - 100}px`}}>
                {SERVICE_DATA.map((data, index) => (
                    <div key={data.title}  className={'service_item'} >
                    <img src={data.image} height={500} alt={''}/>
                        <div className={'text_wrapper'}><h4
                        key={index}
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
