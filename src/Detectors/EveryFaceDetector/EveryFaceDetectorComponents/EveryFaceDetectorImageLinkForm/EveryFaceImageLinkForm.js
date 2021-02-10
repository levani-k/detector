import React from 'react'
import './EveryFaceImageLinkForm.css'

const EveryFaceImageLinkForm = ({ onInputChange, FaceRecognition }) => {
	return (
		<div>
			<p className='tc f3 ma0'>
				this magic brain will detect every face in your pictures. give it a try
			</p>
			<div className='ma4 center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70' type="text" placeholder='Img link' onChange={onInputChange} />
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple summoningButton' onClick={FaceRecognition}>FACE RECOGNITION</button>
				</div>
			</div>
		</div>
	)
}

export default EveryFaceImageLinkForm