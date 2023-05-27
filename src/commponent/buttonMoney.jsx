import React from 'react'

const ButtonMoney = ({ numbers }) => {
	return (
		<div className="donate__box">
		{numbers.map((number, index) => (
			<button key={index} className="donate__box-button"><p>{number}$</p></button>
		))}
		
		</div>
	);
  };
  

export default ButtonMoney;