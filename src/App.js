import './App.css';
import {Header} from "./Header/Header";
import {HeaderHat} from './HeaderHat/HeaderHat'
import {ReservationContainer} from "./ReservationContainer/ReservationContainer";
import {useWindowSize} from "./hooks/useWindowSize";

function App() {
 const {width,height}=useWindowSize()

  return (
    <div style={{backgroundColor:'white'}}>
        <Header />
        <HeaderHat windowHeight={height}/>
        <ReservationContainer />
    </div>
  );
}

export default App;
