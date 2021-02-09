import React from 'react'
import Clarifai from 'clarifai'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceBoundingBox from './components/Detectors/FaceBoundingBox/FaceBoundingBox'
import CelebrityBoundingBox from './components/Detectors/CelebrityBoundingBox/CelebrityBoundingBox'
import './App.css'

const app = new Clarifai.App({
  apiKey: '36d255679f1643da8600593cd996bf34'
})

class FaceDetector extends React.Component {
  constructor () {
    super()
    this.state = {
      arrayOfFaceCordinats: [],
      arrayOfCelebritiesCordinats: [],
      imgLink: ''
    }
  }

  calculateFaceLocation = (data) => {
      const len = data.outputs[0].data.regions.length
      const array = []
      const image = document.getElementById('inputimage')
      const width = Number(image.width)
      const height = Number(image.height)

      for (let i = 0; i < len; i++) {
        array.push({
          leftCol: data.outputs[0].data.regions[i].region_info.bounding_box.left_col * width,
          topRow: data.outputs[0].data.regions[i].region_info.bounding_box.top_row * height,
          rightCol: width - (data.outputs[0].data.regions[i].region_info.bounding_box.right_col * width),
          bottomRow: height - (data.outputs[0].data.regions[i].region_info.bounding_box.bottom_row * height)
        })
      }
      return array

    }

    displayFaceBox = (arrayOfFaceCordinats) => {
      this.setState({arrayOfFaceCordinats: arrayOfFaceCordinats})
    } 


  onInputChange = (event) => {
      this.setState({imgLink: event.target.value})
    }

  FaceRecognition = () => {
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.imgLink)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log("not working"))
  }

  calculateCelebrityLocation = (data) => {
      const len = data.outputs[0].data.regions.length
      const array = []
      const image = document.getElementById('inputimage')
      const width = Number(image.width)
      const height = Number(image.height)

      for (let i = 0; i < len; i++) {
        array.push({
          leftCol: data.outputs[0].data.regions[i].region_info.bounding_box.left_col * width,
          topRow: data.outputs[0].data.regions[i].region_info.bounding_box.top_row * height,
          rightCol: width - (data.outputs[0].data.regions[i].region_info.bounding_box.right_col * width),
          bottomRow: height - (data.outputs[0].data.regions[i].region_info.bounding_box.bottom_row * height),
          celebrity: data.outputs[0].data.regions[i].data.concepts[0].name,
          persentage: Math.floor(data.outputs[0].data.regions[i].data.concepts[0].value * 100)
        })
      }
      return array

    }

    displayCelebrityBox = (arrayOfCelebritiesCordinats) => {
      this.setState({arrayOfCelebritiesCordinats: arrayOfCelebritiesCordinats})
    } 


  CelebrityRecognition = () => {
    app.models.predict(Clarifai.CELEBRITY_MODEL, this.state.imgLink)
    .then(response => this.displayCelebrityBox(this.calculateCelebrityLocation(response)))
    .catch(err => console.log("not working"))
  }


  render() {
    return(
      <div className='FaceDetectorBody'>
        <ImageLinkForm onInputChange={this.onInputChange} FaceRecognition={this.FaceRecognition} CelebrityRecognition={this.CelebrityRecognition}/>
        <FaceBoundingBox arrayOfFaceCordinats={this.state.arrayOfFaceCordinats} imgLink={this.state.imgLink}/>
        <CelebrityBoundingBox arrayOfCelebritiesCordinats={this.state.arrayOfCelebritiesCordinats} imgLink={this.state.imgLink}/>
      </div>  
    )
  }
}


export default FaceDetector