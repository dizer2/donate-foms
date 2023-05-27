import React from 'react'
import ButtonMoney from './buttons/buttonMoney';
import ButtonPays from './buttons/buttonPays';

function DonateForms({arrayMoney, donateInfo, title}) {
	


  return (
	<div className="popup__donate-form">
			<p className='donate__titel'>{title}</p>

			<ButtonMoney numbers={arrayMoney}/>
			<ButtonPays donateInfo={donateInfo}/>

			<button className="support__button">
				<p>To support</p>
			</button>

	</div>
  )
}

export default DonateForms;