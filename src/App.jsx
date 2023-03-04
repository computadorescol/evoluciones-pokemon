
import {Button} from "./components/Button"
import './sass/App.scss';
import { TiArrowLeftOutline} from "react-icons/ti";
import { TiArrowRightOutline} from "react-icons/ti";
import { useState } from "react";



const App =()=> {
  const  [pokemonId, setPokemonId] = useState(1);
  return (
    <> 
    {/*las tarjetas van aqui*/}
    <div className= "buttons-container">
      
    <Button 
     icon ={< TiArrowLeftOutline/>} 
     handleClick={()=>{setPokemonId(pokemonId -1 )}} />
    {pokemonId}
    
     <Button icon ={< TiArrowRightOutline/>}
      handleClick={()=>{setPokemonId(pokemonId + 1 )}} />
     
    </div>
    </>
  )
}
export  {App}