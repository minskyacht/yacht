import './PriceContainer.css';
import Slider from "react-slick";
import {SERVICE_DATA} from "../constants";

const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
};

export const PriceContainer=({windowWidth})=>{
    return (
        <div className="price_container">
            <h2 className={'price_title'}>НАШИ ЦЕНЫ</h2>
            <Slider {...settings} style={{width:`${windowWidth-100}px`}}>
                {SERVICE_DATA.map((data, index) => (
                    <div key={data.title} className={'price_item'}>
                        <img src={data.image} width={520} height={590} alt={''}/>
                        <h4
                            key={index}
                            className="price_item_title"
                        >
                            {data.title}
                        </h4>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
