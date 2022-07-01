import call from '../images/call.svg'
import './CallUsWidget.css'
import {useMedia} from "../hooks/useMedia";
import {useState} from "react";

export const CallUsWidget = ({openModalWindow}) => {
    const [isVisible, setVisibility] = useState(true);
    const deviceType = useMedia();
    const isSmallScreen =
        deviceType === 'mobile' ||
        deviceType === 'table;';

    const handleWidgetClick = () => {
        openModalWindow();
        setVisibility(false)
    }
    return (
        <div className={isVisible ? 'pulsating-circle' : 'hidden'}>
            <div className={'image_container'}>
                {isSmallScreen ?
                    <a href={'tel:+375291773367'} className={'phone'}>
                        <img src={call} className={'icon-call'} alt={call}/>
                    </a>
                    : <button onClick={handleWidgetClick} className={'phone-btn'}>
                        <img src={call} className={'icon-call'} alt={call}/>
                    </button>
                }
            </div>
        </div>
    )
}
