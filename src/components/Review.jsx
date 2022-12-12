import React from 'react'
import Screen1 from './review-screen-img1.png'
import Screen2 from './review-screen-img2.png'
import Screen3 from './review-screen-img3.png'

const Review = () => {
  return (
    <div className='Review w-100 h-screen mt-20'>
    	<h2 className='font-bold'>Более 100 женщин прошли обучение и <br /> активные  достигли результатов. <br /> 
        	<span> программа марафона всего за 21 дней</span>
    	</h2>
      
      <div className="gallery flex justify-center mt-20 pb-20">
        <img src={Screen1} alt="card-gallery" width="500px" />
        <img src={Screen2} alt="card-gallery" className='' width="500px"/>
        <img src={Screen3} alt="card-gallery" width="500px"/>
      </div>
      <a href="#" className='btn-red'>Хочу такой же результат</a>
    </div>
  )
}

export default Review