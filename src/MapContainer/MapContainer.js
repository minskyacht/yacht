import './MapContainer.css';

export const MapContainer=()=>{
    return (
        <div className="map_container">
            <h2 className={'map_title'}>КАК НАС НАЙТИ</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348.90760487979446!2d27.39447758318833!3d53.96440449355141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc3ba3bee26b9%3A0x5cf1c15a10ebb4ae!2z0JDRgNC10L3QtNCwINGP0YXRgiBZYWNodE1pbnNr!5e0!3m2!1sru!2sby!4v1712861024451!5m2!1sru!2sby"
                width="100%" height="550" style={{border:0}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
        </div>
    );
}
