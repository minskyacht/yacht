import './Header.css';
import logo from '../images/newlogo.png'
import instagram from '../images/inst.svg'
import telegram from '../images/tg.svg'
import viber from '../images/viber.svg'

export const Header=()=>{
    return (
        <div className="header">
            <div className={'logo'}>
            <img src={logo} width={270} height={40} className={'svg'} alt={''}/>
            <span className={'logoSpan'}>minsk yacht</span>
            </div>
            <div className={'contacts_container'}>
                <div className={'phone_container'}>
                    <a href={'tel:+375291773367'} className={'phone'}>+375 29 177 33 67</a>
                </div>
                <div className={'media_container'}>
                <a href={'https://t.me/roma_yacht'}><img src={telegram}  className={'contact'} alt={''} style={{paddingTop: '8px'}}/></a>
                <a href={'viber://chat?number=%2B375291773367'}><img src={viber}  className={'contact'} alt={''}/></a>
                <a href={'https://www.instagram.com/yacht_minsk/'}><img src={instagram} className={'contact'} alt={''}/></a>
                </div>
            </div>
        </div>
    );
}
