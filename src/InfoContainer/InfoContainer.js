import './InfoContainer.css';
import {INFO_DATA} from "../constants";

export const InfoContainer=()=>{
    return (
        <div className="info_container">
            {INFO_DATA.map((info)=>{
                return (
                    <div key={info.title} className={'info_element'}>
                        <img alt={''} src={info.image} width={250} height={250}/>
                        <p className={'info_title'}>{info.title}</p>
                    </div>
                )
            })}
        </div>
    );
}
