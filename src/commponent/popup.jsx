import React from 'react'
import DonateForms from './DonateForm/donateForms';
import Wallpaper from './DonateForm/WallpaperSection/wallpaper';


const Popup = ({title}) => {
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
		<DonateForms 
			arrayMoney={arrayMoney}
			donateInfo={donateInfo}
			title={title}
		/>
		
		<Wallpaper 
			backgroundImage="https://static.vecteezy.com/system/resources/previews/000/208/936/original/night-camping-vector.jpg"
		/>
	</div>
  )
}

export default Popup;