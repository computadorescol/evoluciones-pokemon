
import {Button} from "./components/Button"
import './sass/App.scss';
import { TiArrowLeftOutline} from "react-icons/ti";
import { TiArrowRightOutline} from "react-icons/ti";




function App() {

  return (
    <> 
    {/*las tarjetas van aqui*/}
    <div className= "buttons-container">
      
    <Button 
     icon ={< TiArrowLeftOutline/>} handleClick={()=>{console.log('anterior')}} />
    
    
     <Button icon ={< TiArrowRightOutline/>} handleClick={()=>{console.log('siguiente')}} />
     
    </div>
    </>
  )
}
export  {App}