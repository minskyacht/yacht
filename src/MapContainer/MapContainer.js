import './MapContainer.css';

export const MapContainer=()=>{
    return (
        <div className="map_container">
            <h2 className={'map_title'}>КАК НАС НАЙТИ</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.7191329066416!2d27.3941098584077!3d53.9641574443765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc346a511aab7%3A0xb1172100b90c84f!2sYakht%20Klub!5e0!3m2!1sen!2sby!4v1656513009234!5m2!1sen!2sby"
                width="100%" height="550" style={{border:0}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
        </div>
    );
}
