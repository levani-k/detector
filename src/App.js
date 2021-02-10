import React from 'react'
import CelebrityFaceDetector from './Detectors/CelebrityFaceDetector/containers/CelebrityFaceDetector'
import EveryFaceDetector from './Detectors/EveryFaceDetector/EveryFaceDetectorContainers/EveryFaceDetector'
import FoodDetector from './Detectors/FoodDetector/FoodDetectorContainers/FoodDetector'
import NavigationBar from './maincomponents/NavigationBar/NavigationBar'
import FooterContent from './maincomponents/FooterContent/FooterContent'
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


  display = () => {
      if (this.state.display == 'home') {
        return (
          <NavigationBar 
            changneDisplayToCelebrity={this.changneDisplayToCelebrity} 
            changneDisplayToEveryFace={this.changneDisplayToEveryFace} 
            changneDisplayToFoodDetector={this.changneDisplayToFoodDetector}
          />
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
        {this.display()}
        <main className='tc'>
          <h1>this app is using clarifai's API and makes it work</h1>
          <p>The purpose of this creation was to train its creator</p>
        </main>
        <FooterContent />
      </div>  
    )
  }
}


export default App