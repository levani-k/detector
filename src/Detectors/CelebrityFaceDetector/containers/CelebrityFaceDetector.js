import React from 'react'
import Clarifai from 'clarifai'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import CelebrityBoundingBox from '../components/CelebrityBoundingBox/CelebrityBoundingBox'
import './CelebrityFaceDetector.css'

const app = new Clarifai.App({
  apiKey: '36d255679f1643da8600593cd996bf34'
})

class CelebrityFaceDetector extends React.Component {
  constructor () {
    super()
    this.state = {
      arrayOfCelebritiesCordinats: [],
      imgLink: ''
    }
  }

  onInputChange = (event) => {
      this.setState({imgLink: event.target.value})
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
      <div id='CelebrityFaceDetectorBody'>
        <ImageLinkForm onInputChange={this.onInputChange} CelebrityRecognition={this.CelebrityRecognition}/>
        <CelebrityBoundingBox arrayOfCelebritiesCordinats={this.state.arrayOfCelebritiesCordinats} imgLink={this.state.imgLink}/>
      </div>  
    )
  }
}


export default CelebrityFaceDetector