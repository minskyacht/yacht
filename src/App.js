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
import {PriceContainer} from "./PriceContainer/PriceContainer";
import {ModalWindow} from "./ModalWindow/ModalWindow";
import {ReservationWindow} from "./ReservationWindow/ReservationWindow";
import {createRef, useState} from "react";
import {useCloseModalWindow} from "./hooks/useCloseModalWindow";

function App() {
 const {width,height}=useWindowSize()

    const [isModalVisible,setIsModalVisible] = useState(false)

    const modalContentRef = createRef();

    const toggleModalVisibility = () => {
        setIsModalVisible(!isModalVisible)
    };

    const closeReservationModal = useCloseModalWindow({ modalRef: modalContentRef, isVisible:isModalVisible, closeHandler:toggleModalVisibility });

    return (
    <div style={{backgroundColor:'white'}}>
        <Header />
        <HeaderHat windowHeight={height} windowWidth={width}/>
        <ReservationContainer  openModalWindow={toggleModalVisibility}/>
        <InfoContainer/>
        <ServiceContainer windowWidth={width}/>
        <DescriptionContainer />
        <PriceContainer  windowWidth={width}/>
        <MapContainer />
        <Footer/>
        {isModalVisible &&
        <ModalWindow>
            <ReservationWindow closeModal={closeReservationModal} ref={modalContentRef}/>
        </ModalWindow>}
    </div>
  );
}

export default App;
