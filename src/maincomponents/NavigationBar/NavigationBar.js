import React from 'react'
import './NavigationBar.css'

const NavigationBar = ({ changneDisplayToCelebrity, changneDisplayToEveryFace, changneDisplayToFoodDetector }) => {
	return (
		<nav>
		    <ul className="topnav">
			  <li><a className="active" href="#home">Home</a></li>
			  <li><a onClick={changneDisplayToCelebrity}>Celebrity Detector</a></li>
			  <li><a onClick={changneDisplayToEveryFace}>Face Detector</a></li>
			  <li><a onClick={changneDisplayToFoodDetector}>Food Detector</a></li>
			  <li className="right"><a href="#about">About</a></li>
			</ul>
		</nav>
	)
}


export default NavigationBar