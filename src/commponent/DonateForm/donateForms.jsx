import React, { useState } from 'react'
import ButtonMoney from './buttons/buttonMoney';
import ButtonPays from './buttons/buttonPays';

function DonateForms({arrayMoney, donateInfo, title}) {

	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event) => {
	  const value = event.target.value;
	  setInputValue(value);
	};

	


  return (
	<div className="popup__donate-form">
			<p className='donate__titel'>{title}</p>

			<ButtonMoney 
				numbers={arrayMoney}
				setInputValue={setInputValue}
				inputValue={inputValue}
			/>
			<ButtonPays 
				donateInfo={donateInfo}
				inputValue={inputValue}
				handleInputChange={handleInputChange}
			/>

			<button className="support__button">
				<p>To support</p>
			</button>

	</div>
  )
}

export default DonateForms;