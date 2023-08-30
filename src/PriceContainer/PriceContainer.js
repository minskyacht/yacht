import './PriceContainer.css';
import Slider from "react-slick";
import {PRICE_DATA, slidesToShow} from "../constants";
import arrow from "../images/arrow.svg";
import {useSliderSizes} from "../hooks/useSliderSizes";
import {Discount} from "../Discount/Discount";
import {SlickButtonFix} from "../SliderFix/SliderFix";

const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <SlickButtonFix><img src={arrow} alt='next'/></SlickButtonFix>,
    prevArrow: <SlickButtonFix><img src={arrow} alt='prev'/></SlickButtonFix>
};

const PRICE_IMAGES_SIZES={
    mobile: {width:260,height:260},
    desktop : {width:330,height:330}
}

export const PriceContainer=()=>{
    const {
        amountOfSlidesToShow,
        containerSize,
        newImagesSize: priceImagesSize
    } = useSliderSizes(PRICE_IMAGES_SIZES)

    return (
        <div className="price_container">
            <h2 className={'price_container_title'}>НАШИ ЦЕНЫ</h2>
            <Discount />
            <Slider {...{...settings,slidesToShow:amountOfSlidesToShow}} style={{width:`${containerSize}px`}}>
                {PRICE_DATA.map((data, index) => (
                    <div key={data.title}>
                    <div className={'price_item'} >
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
                    </div>
                ))}
            </Slider>
        </div>
    );
}
