import './DescriptionContainer.css';
import description_image from '../images/description_image.jpeg'
import {useMedia} from "../hooks/useMedia";
import {DEVICES} from "../constants";

const DESCRIPTION_IMAGE_SIZES={
    mobile: {width:390,height:370},
    desktop : {width:700,height:680}
}

export const DescriptionContainer=()=>{
    const device=useMedia();

    const descriptionImageSize=device===DEVICES.tablet || device===DEVICES.phone ?
        DESCRIPTION_IMAGE_SIZES.mobile : DESCRIPTION_IMAGE_SIZES.desktop;

    return (
        <div className="description_container">
            <img alt={''} width={descriptionImageSize.width} height={descriptionImageSize.height} src={description_image}/>
            <div>
            <p className={'description_text'}>
                От того, каким временем Вы располагаете, зависит маршрут и виды развлечений. А комфорт и роскошь яхт - понятие независимое. На белоснежных речных ласточках - яхтах всегда эксклюзивно и приятно.
            </p>
            <p className={'description_text'}>
                Мы предлагаем вам забронировать прогулку на любой яхте в Минской области и городе Минске.
            </p>
            </div>
        </div>
    );
}
