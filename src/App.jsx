//components
import {Button} from "./components/Button"
import  {Card}  from "./components/Card"
//styles
import './sass/App.scss';
import { TiArrowLeftOutline} from "react-icons/ti";
import { TiArrowRightOutline} from "react-icons/ti";
//hooks
import { useState , useEffect } from "react";



const App =()=> {
  const  [pokemonId, setPokemonId] = useState(10);
  const [pokemonName, setPokemonName ] = useState (' ') ;
     useEffect( () => {
        getEvolutions(pokemonId);
           }
         )  
     async function getEvolutions(id) {
        const response =  await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
        const data = await response.json()
        setPokemonName(data.chain.species.name)          
     }
     

  function prevClick () {
    (pokemonId == 1 ) ?  
                  setPokemonId(1) :
     setPokemonId(pokemonId-1 )
      }
 function nextClick () { 
     setPokemonId(pokemonId+1 )
      }
  return (
    <> 
    {/*las tarjetas van aqui*/}
      <div className="card-container">
    <Card />
      </div>
    <div className= "buttons-container">
      
    <Button 
     icon ={< TiArrowLeftOutline/>} 
     handleClick={prevClick } />
    
    
    {pokemonName}
    
     <Button icon ={< TiArrowRightOutline/>}
      handleClick={nextClick } />
     
    </div>
    </>
  )
}
export  {App}