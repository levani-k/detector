import React from 'react'
import './EveryFaceBoundingBox.css'



const EveryFaceBoundingBox = ({ imgLink, arrayOfFaceCordinats }) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputimage' alt='' src={imgLink} width='500px' heigh='auto' />
				{
						<div>
							{
								arrayOfFaceCordinats.map((user, i) => {
									return (
										<div 
										key={i} 
										id='EveryFace-bounding-box' 
										style={{top: arrayOfFaceCordinats[i].topRow, right: arrayOfFaceCordinats[i].rightCol, bottom: arrayOfFaceCordinats[i].bottomRow, left: arrayOfFaceCordinats[i].leftCol}}>
										</div>
									)
								})
							}
						</div>
				}
			</div>
		</div>
	)
}



export default EveryFaceBoundingBox