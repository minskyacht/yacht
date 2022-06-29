import './DescriptionContainer.css';
import description_image from '../images/description_image.jpeg'

export const DescriptionContainer=()=>{
    return (
        <div className="description_container">
            <img alt={''} width={700} height={680} src={description_image}/>
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
