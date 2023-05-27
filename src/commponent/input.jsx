import React from 'react'

function Input({src, placeholder}) {
	
  return (
	<div className="donate__form-button">
		<img src={src} alt="donate-form" />
		<input type="number" placeholder={placeholder} />
	</div>
  )
}

export default Input;