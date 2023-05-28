import React from 'react'
import "./wallpapers.css"

function Wallpaper({backgroundImage, setIsVisible}) {
	const closePopup = () => {
		setIsVisible(false);
	}

  return (
	<div style={{backgroundImage: `url(${backgroundImage}`}} className="popup__wallpaper">
		<div className="popup__wallpaper-logo"></div>
		<div onClick={closePopup} className="popup__wallpaper-close"></div>
	</div>
  )
}

export default Wallpaper;