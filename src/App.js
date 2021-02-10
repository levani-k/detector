import React from 'react'
import CelebrityFaceDetector from './Detectors/CelebrityFaceDetector/containers/CelebrityFaceDetector'
import EveryFaceDetector from './Detectors/EveryFaceDetector/EveryFaceDetectorContainers/EveryFaceDetector'
import FoodDetector from './Detectors/FoodDetector/FoodDetectorContainers/FoodDetector'
import NavigationBar from './maincomponents/NavigationBar/NavigationBar'
import FooterContent from './maincomponents/FooterContent/FooterContent'
import MainContent from './maincomponents/MainContent/MainContent'
import './App.css'


class App extends React.Component {
  constructor () {
    super()
    this.state = {
      display: "home"
    }
  }

  changneDisplayToCelebrity = () => {
    this.setState({display: 'CelebrityFaceDetector'})
  }

  changneDisplayToEveryFace = () => {
    this.setState({display: 'EveryFaceDetector'})
  }

  changneDisplayToFoodDetector = () => {
    this.setState({display: 'FoodDetector'})
  }

  changneDisplayToHome = () => {
    this.setState({display: 'home'})
  }

  display = () => {
      if (this.state.display == 'home') {
        return (
          <div>
            <MainContent />
            <FooterContent />
          </div>
        )
      }else if(this.state.display == 'CelebrityFaceDetector') {
        return (
          <CelebrityFaceDetector />
        )
      } else if(this.state.display == 'EveryFaceDetector') {
        return(
          <EveryFaceDetector />
        )
      } else if(this.state.display == 'FoodDetector') {
        return (
          <FoodDetector />
        )
      }
  }


  render() {
    return(
      <div className='AppBody'>
        <NavigationBar 
          changneDisplayToCelebrity={this.changneDisplayToCelebrity} 
          changneDisplayToEveryFace={this.changneDisplayToEveryFace} 
          changneDisplayToFoodDetector={this.changneDisplayToFoodDetector}
          changneDisplayToHome={this.changneDisplayToHome}
        />
        {this.display()}
      </div> 
    )
  }
}


export default App