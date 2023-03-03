import React from "react";
   import    "../sass/Button.scss";

const Button = ({icon}) => {
  return (
    <div className='button__box'>
      <>
      <button className="button">{icon}</button >
      <div className="button__shadow"></ div>
      </>
    </div>
     
  )
}

export  {Button}