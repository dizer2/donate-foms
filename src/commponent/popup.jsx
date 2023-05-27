import React from 'react'
import ButtonMoney from './buttonMoney';
import DonateForm from './donateForm';

const Popup = () => {
	const arrayMoney = [
		100, 
		500, 
		1000, 
		5000,
	];

	const donateInfo = [
		{
			id: "googlePay",
			img: "https://phandroid.com/wp-content/uploads/2015/09/new-google-wallet-icon.png",
			text: "Google pay"
		},
		{
			id: "paypal",
			img: "https://cdn-icons-png.flaticon.com/512/174/174861.png",
			text: "Paypal"
		},
		{
			id: "paypal",
			img: "https://pixlok.com/wp-content/uploads/2021/07/QR-Code-Scaner-Icon-us3f.png",
			text: "Qr code"
		}
		
	]

	

  return (
	<div className="popup">
		<div className="popup__donate-form">
			<p className='donate__titel'>Support Armed Forces of span Ukraine</p>
			<ButtonMoney numbers={arrayMoney}/>
			<DonateForm donateInfo={donateInfo}/>
			<button className="support__button">
				<p>To support</p>
			</button>
			

		</div>
		
		<div style={{backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/000/208/936/original/night-camping-vector.jpg`}} className="popup__wallpaper">
			<div className="popup__wallpaper-logo"></div>
			<div className="popup__wallpaper-close"></div>
		</div>
	</div>
  )
}

export default Popup;