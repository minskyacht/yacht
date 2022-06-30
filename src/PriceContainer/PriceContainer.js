import './PriceContainer.css';
import Slider from "react-slick";
import {PRICE_DATA, slidesToShow} from "../constants";

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

export const PriceContainer=({windowWidth})=>{
    return (
        <div className="price_container">
            <h2 className={'price_container_title'}>НАШИ ЦЕНЫ</h2>
            <Slider {...settings} style={{width:`${windowWidth - 100}px`}}>
                {PRICE_DATA.map((data, index) => (
                    <div key={data.title} className={'price_item'} >
                        <img src={data.image} className={'price_image'} height={330} width={330} alt={''}/>
                        <hr className={'price_line'}/>
                        <div className={'price_title_container'}>
                            <h6
                                key={index}
                                className="price_title"
                            >
                                {data.title}
                            </h6>
                            {data.isGiftCertificate?
                                <p className={'gift_certificate_title'}>Подарочный сертификат</p>
                                :null
                            }
                        </div>
                        <div className={'price_info_container'}>
                            <div className={'action_duration'}>{data.duration}</div>
                            <div className={'price'}>
                                <div className={'price_value'}>{data.price}</div>
                                <p className={'price_currency'}>бел.руб.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
