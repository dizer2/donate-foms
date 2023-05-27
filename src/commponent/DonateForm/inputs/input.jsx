import React from 'react'

function Input({src, placeholder, inputValue, handleInputChange}) {

  return (
	
	<div className="donate__form-button">
		<img src={src} alt="donate-form" />
		<input 
			type="number" 
			placeholder={placeholder} 
			value={inputValue}
			onChange={handleInputChange}
		/>
	</div>
  )
}

export default Input;