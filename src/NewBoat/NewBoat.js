import newBoatMain from '../images/newBoat.png'
import newBoatNight from '../images/newBoatNight.png'
import outside from '../images/outside.png'
import dinner from '../images/dinner.png'
import './newBoat.css';
import Slider from "react-slick";
import arrow from "../images/arrow.svg";
import {useSliderSizes} from "../hooks/useSliderSizes";


const BOAT_IMAGES_SIZES={
    mobile: {width:480,height:520},
    desktop : {width:430,height:500}
}

const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <img src={arrow} alt='next'/>,
    prevArrow: <img src={arrow} alt='prev'/>
};

export const NewBoat = () => {
    const {
        amountOfSlidesToShow,
        containerSize,
        newImagesSize
    } = useSliderSizes(BOAT_IMAGES_SIZES, 2)

    return (
        <div className="newBoat_container">
            <h2 className={'newBoat_title'}>НАША НОВИНКА - ДОМ НА ВОДЕ</h2>
            <Slider {...{...settings, slidesToShow: amountOfSlidesToShow}} style={{width:`${containerSize}px`}}>
                {[outside, newBoatMain,dinner, newBoatNight].map((image, i) => (
                        <div className={'newBoat_item'} >
                            <img src={image} className={'newBoat_image'}
                                 height={newImagesSize.height} width={newImagesSize.width} alt={''}/>
                        </div>
                ))}
            </Slider>
            <div className={'newBoat_priceBlock'}>
            <h3 className={'newBoat_price'}>1 час - 220 руб</h3>
            <h3 className={'newBoat_price'}>1 ночь - 350 руб</h3>
            </div>
        </div>
    );
}