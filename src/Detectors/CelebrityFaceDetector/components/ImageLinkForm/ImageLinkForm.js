import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, CelebrityRecognition }) => {
	return (
		<div>
			<p className='tc f3 ma0'>
				this magic brain will detect every celebrity face in your pictures. give it a try
			</p>
			<div className='ma4 center'>
				<div id='form' className='center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70' type="text" placeholder='Img link' onChange={onInputChange} />
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={CelebrityRecognition}>CELEBRITY RECOGNITION</button>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm