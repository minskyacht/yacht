import './Header.css';
import logo from '../images/logo.png'
import instagram from '../images/instagram.png'
import telegram from '../images/telegram.png'
import viber from '../images/viber.png'

export const Header=()=>{
    return (
        <div className="header">
            <img src={logo} width={270} height={40} className={'logo'} alt={''}/>
            <div className={'contacts_container'}>
                <div className={'phone_container'}>
                    <a href={'tel:+375291773367'} className={'phone'}>+375 29 177 33 67</a>
                    <a href={'tel:+375333170843'} className={'phone'}>+375 33 317 08 43</a>
                </div>
                <img src={telegram} width={55} height={55} className={'contact'} alt={''}/>
                <img src={viber} width={55} height={55} className={'contact'} alt={''}/>
                <img src={instagram} width={55} height={55} className={'contact'} alt={''}/>
            </div>
        </div>
    );
}
