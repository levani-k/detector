import React from 'react'



const FoodImage = ({ imgLink, arrayOfDifferentFood }) => {
	return (
		<div className='center ma'>
			<div className='mt2'>
				<img alt='' src={imgLink} width='500px' heigh='auto' />
			</div>
			<div>
				{
					arrayOfDifferentFood.map((item, index) => <p key={index}>{item.name}: {item.persentage}</p>)
				}
			</div>
		</div>
	)
}



export default FoodImage