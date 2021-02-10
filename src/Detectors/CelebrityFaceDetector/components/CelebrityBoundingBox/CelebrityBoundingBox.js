import React from 'react'
import './CelebrityBoundingBox.css'



const CelebrityBoundingBox = ({ imgLink, arrayOfCelebritiesCordinats }) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputimage' alt='' src={imgLink} width='500px' heigh='auto' />
				{
						<div>
							{
								arrayOfCelebritiesCordinats.map((user, i) => {
									return (
										<div 
										key={i} 
										id='celelbrities-bounding-box' 
										style={{top: arrayOfCelebritiesCordinats[i].topRow, right: arrayOfCelebritiesCordinats[i].rightCol, bottom: arrayOfCelebritiesCordinats[i].bottomRow, left: arrayOfCelebritiesCordinats[i].leftCol}}>
											<span style={{color: 'white'}}>{arrayOfCelebritiesCordinats[i].celebrity}: {arrayOfCelebritiesCordinats[i].persentage}%</span>
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



export default CelebrityBoundingBox