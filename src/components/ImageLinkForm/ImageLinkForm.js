import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, FaceRecognition, CelebrityRecognition }) => {
	return (
		<div className=''>
			<p className='tc f3 ma0'>
				this magic brain will detect everything in your pictures. give it a try
			</p>
			<div className='ma4 center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70' type="text" placeholder='Img link' onChange={onInputChange} />
				</div>
			</div>
			<div className='center'>
				{/*<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={FaceRecognition}>FACE RECOGNITION</button>*/}
				<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple summoningButton' onClick={CelebrityRecognition}>CELEBRITY RECOGNITION</button>
			</div>
		</div>
	)
}

export default ImageLinkForm