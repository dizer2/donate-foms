import React from 'react'
import "./wallpapers.css"

function Wallpaper({backgroundImage}) {
  return (
	<div style={{backgroundImage: `url(${backgroundImage}`}} className="popup__wallpaper">
		<div className="popup__wallpaper-logo"></div>
		<div className="popup__wallpaper-close"></div>
	</div>
  )
}

export default Wallpaper;