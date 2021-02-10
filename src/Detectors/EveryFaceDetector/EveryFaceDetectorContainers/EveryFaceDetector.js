import React from 'react'
import Clarifai from 'clarifai'
import EveryFaceImageLinkForm from '../EveryFaceDetectorComponents/EveryFaceDetectorImageLinkForm/EveryFaceImageLinkForm'
import EveryFaceBoundingBox from '../EveryFaceDetectorComponents/EveryFaceDetectorBoundingBox/EveryFaceBoundingBox'
import './EveryFaceDetector.css'

const app = new Clarifai.App({
  apiKey: '36d255679f1643da8600593cd996bf34'
})

class EveryFaceDetector extends React.Component {
  constructor () {
    super()
    this.state = {
      arrayOfFaceCordinats: [],
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

  render() {
    return(
      <div id='EveryFaceDetectorBody'>
        <EveryFaceImageLinkForm onInputChange={this.onInputChange} FaceRecognition={this.FaceRecognition} />
        <EveryFaceBoundingBox arrayOfFaceCordinats={this.state.arrayOfFaceCordinats} imgLink={this.state.imgLink}/>
      </div>  
    )
  }
}


export default EveryFaceDetector