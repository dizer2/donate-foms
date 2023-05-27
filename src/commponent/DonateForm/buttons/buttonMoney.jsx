import React from 'react'
import "./donate.css"

const ButtonMoney = ({ numbers, setInputValue, inputValue }) => {
	
	const addMoney = (number) => {
		setInputValue(inputValue != "" ? parseInt(inputValue) + number : inputValue + number);
	};

	return (
		<div className="donate__box">
		{numbers.map((number, index) => (
			<button onClick={() => addMoney(number)} key={index} className="donate__box-button">
				<p>{number}$</p>
			</button>
		))}
		</div>
	);
  };
  

export default ButtonMoney;