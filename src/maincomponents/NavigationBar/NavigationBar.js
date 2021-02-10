import React from 'react'
import './NavigationBar.css'

const NavigationBar = ({ changneDisplayToCelebrity, changneDisplayToEveryFace, changneDisplayToFoodDetector, changneDisplayToHome }) => {
	return (
		<nav>
		    <ul className="topnav">
			  <li><a onClick={changneDisplayToHome}>Home</a></li>
			  <li><a onClick={changneDisplayToCelebrity}>Celebrity Detector</a></li>
			  <li><a onClick={changneDisplayToEveryFace}>Face Detector</a></li>
			  <li><a onClick={changneDisplayToFoodDetector}>Food Detector</a></li>
			</ul>
		</nav>
	)
}


export default NavigationBar