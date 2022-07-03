import './ReservationWindow.css';
import colorInstagram from '../images/color_instagram.png'
import React from 'react'

export const ReservationWindow=React.forwardRef(({closeModal},ref)=>{
    return (
        <div className={'reservation_window'} ref={ref}>
            <div className={'close_icon'} onClick={closeModal}>&#x2715;</div>
            <h6
                className="modal_reservation_title"
            >
                Наберите нам и мы ответим на все ваши вопросы !
            </h6>
            <div className={'modal_phone_container'}>
                <a href={'tel:+375291773367'} className={'contact_phone'}>+375 29 177 33 67</a>
            </div>
            <p className={'instagram_text'}>или напишите нам в социальных сетях</p>
            <a href={'https://www.instagram.com/yacht_minsk/'} className={'instagram_anchor'}>
                <button className='instagram_button'>
                    <div>ПОДПИСАТЬСЯ</div>
                    <img src={colorInstagram} alt={''} width={32} height={32}/>
                </button>
            </a>
        </div>
    );
})
