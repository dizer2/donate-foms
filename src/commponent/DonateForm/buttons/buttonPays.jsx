import React from 'react'
import Input from '../inputs/input';

function ButtonPays({donateInfo}) {
  return (
    <div className="donate__form">

      <Input 
        src="https://static.thenounproject.com/png/1060421-200.png"
        placeholder="Enter the amount"
      />

      {donateInfo.map((obj, index) => (
        <button key={index} className="donate__form-button">
          <img src={obj.img} alt="donate-form" />
          <p>{obj.text}</p>
        </button>

		  ))}
		
    
  </div>
  )
}

export default ButtonPays;