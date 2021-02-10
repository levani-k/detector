import React from 'react'
import Clarifai from 'clarifai'
import FoodImageLinkForm from '../FoodDetectorComponents/FoodImageLinkForm/FoodImageLinkForm'
import FoodImage from '../FoodDetectorComponents/FoodImage/FoodImage'
import './FoodDetector.css'

const app = new Clarifai.App({
  apiKey: '36d255679f1643da8600593cd996bf34'
})

class FoodDetector extends React.Component {
  constructor () {
    super()
    this.state = {
      arrayOfDifferentFood: [],
      imgLink: ''
    }
  }

  DifferentFood = (data) => {
      const len = data.outputs[0].data.concepts.length
      let array = []
      for (let i = 0; i < len; i++) {
        array.push({
          name: data.outputs[0].data.concepts[i].name,
          persentage: Math.floor(data.outputs[0].data.concepts[i].value * 100)
        })
      }
      return array
    }

    displayFood = (arrayOfDifferentFood) => {
      this.setState({arrayOfDifferentFood: arrayOfDifferentFood})
    } 

  onInputChange = (event) => {
      this.setState({imgLink: event.target.value})
    }

  FoodRecognition = () => {
    app.models.predict(Clarifai.FOOD_MODEL, this.state.imgLink)
    .then(response => this.displayFood(this.DifferentFood(response)))
    .catch(err => console.log("not working"))
  }

  render() {
    return(
      <div id='FoodDetectorBody'>
        <FoodImageLinkForm onInputChange={this.onInputChange} FoodRecognition={this.FoodRecognition} />
        <FoodImage imgLink={this.state.imgLink} arrayOfDifferentFood={this.state.arrayOfDifferentFood} />
      </div>  
    )
  }
}


export default FoodDetector