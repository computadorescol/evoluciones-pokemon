//import React from "react";
   import    "../sass/Button.scss";

const Button = (props) => {
  return (
    <div className='button__box'>

      <button className="btn">{props.text}</ button >

    </div>
     
  )
}

export  {Button}