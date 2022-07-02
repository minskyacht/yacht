import './PriceContainer.css';
import Slider from "react-slick";
import {DEVICES, PRICE_DATA, slidesToShow} from "../constants";
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

const PRICE_IMAGES_SIZES={
    mobile: {width:280,height:280},
    desktop : {width:330,height:330}
}

export const PriceContainer=({windowWidth})=>{
    const device=useMedia();

    const amountOfSlidesToShow=device===DEVICES.tablet || device===DEVICES.phone ? 1 : slidesToShow;
    const priceImagesSize=DEVICES.tablet || device===DEVICES.phone ?
        PRICE_IMAGES_SIZES.mobile : PRICE_IMAGES_SIZES.desktop;

    return (
        <div className="price_container">
            <h2 className={'price_container_title'}>НАШИ ЦЕНЫ</h2>
            <Slider {...{...settings,slidesToShow:amountOfSlidesToShow}} style={{width:`${windowWidth - 100}px`}}>
                {PRICE_DATA.map((data, index) => (
                    <div key={data.title} className={'price_item'} >
                        <img src={data.image} className={'price_image'}
                             height={priceImagesSize.height} width={priceImagesSize.width} alt={''}/>
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
