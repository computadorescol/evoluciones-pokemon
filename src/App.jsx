
import {Button} from "./components/Button"
import './sass/App.scss';
import { TiArrowLeftOutline } from "react-icons/ti";



function App() {

  return (
    <> 
    {/*las tarjetas van aqui*/}
    <div className= "buttons-container">
      
    <Button text ='anterior' />
    
    
     <Button text ='siguiente' />
     
    </div>
    </>
  )
}
export  {App}