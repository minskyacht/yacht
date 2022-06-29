import './App.css';
import {Header} from "./Header/Header";
import {HeaderHat} from './HeaderHat/HeaderHat'
import {ReservationContainer} from "./ReservationContainer/ReservationContainer";
import {useWindowSize} from "./hooks/useWindowSize";
import {InfoContainer} from "./InfoContainer/InfoContainer";
import {ServiceContainer} from "./ServiceContainer/ServiceContainer";
import {DescriptionContainer} from "./DescriptionContainer/DescriptionContainer";
import {Footer} from "./Footer/Footer";
import {MapContainer} from "./MapContainer/MapContainer";

function App() {
 const {width,height}=useWindowSize()

  return (
    <div style={{backgroundColor:'white'}}>
        <Header />
        <HeaderHat windowHeight={height} windowWidth={width}/>
        <ReservationContainer />
        <InfoContainer/>
        <ServiceContainer windowHeight={height} windowWidth={width}/>
        <DescriptionContainer />
        <MapContainer />
        <Footer/>
    </div>
  );
}

export default App;
