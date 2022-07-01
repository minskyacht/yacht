import './ReservationContainer.css';
import {CallUsWidget} from "../CallUsWidget/CallUsWidget";
import {useScroll} from "../hooks/useScroll";

export const ReservationContainer=({openModalWindow})=>{
    const showWidget = useScroll(800)
    return (
        <div className="reservation_container">
            <p className={'reservation_text'}>
                Арендовать парусную яхту для романтического ужина, прогулки, фотосессии
                на Минском море. Девичники и дни рождения на Минском море. Побалуйте себя и своих близких
                приятным подарком при приобретении подарочного сертификата. Что может быть лучше, чем прогулка
                на парусной яхте? Прогулка по Минскому морю на яхте это не только
                захватывающие приключения, но и повод провести время с любимой половинкой.
            </p>
            <button className='reservation_button' onClick={openModalWindow}>ЗАБРОНИРОВАТЬ</button>
            {showWidget && <CallUsWidget openModalWindow={openModalWindow}/>}
        </div>
    );
}
