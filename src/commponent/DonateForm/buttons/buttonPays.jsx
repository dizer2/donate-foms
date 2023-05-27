import React from 'react'
import Input from '../inputs/input';
import GooglePay from '../../googlePay/googlePay';



function ButtonPays({donateInfo, handleInputChange, inputValue}) {
  return (
    <div className="donate__form">

      <Input
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        src="https://static.thenounproject.com/png/1060421-200.png"
        placeholder="Enter the amount"
      />

      <GooglePay inputValue={inputValue}/>
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