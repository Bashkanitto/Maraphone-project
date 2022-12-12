import React from 'react'
import headerImg from '../components/headerImg.png'
import verifyImg from '../components/verifyImg.png'





const Main = () => {

  return (
    <main className='relative w-100 mt-20'>

      	<p className='author text-[#F17216] pb-[2%] tracking-[1px] inline-flex items-center text-xl  animation-left'> 
        	<img src={verifyImg} className="pr-2" alt="verify-icon" /> 
			Авторская программа  от <b>@dair_shaizat_info</b>
      	</p>

      	<h1 className='leading-[115%] pb-[3%] tracking-[1px] animation-left'>
			Найди себя и дело <br /> своей мечты
		</h1>

      	<img src={headerImg} className='main-img staticanimation-right' alt="header-img" />

      	<p className='w-[50%] leading-[150%] tracking-[0.5px] pb-[2%] animation-left'>
			Ты перестанешь в себе сомневаться, подружишься  
        	с собой и окружающем миром и начнешь зарабатывать 
			на любимом деле 
      	</p>

      	<h2 className='text-[#FC4772] pb-[5%] animation-left'>ВСЕГО ЗА 20 ДЕНЬ</h2>
    	<h2 className='text-[#282c4bab] pb-[2%] animation-left'>Cтарт:<b> 30 июля</b></h2>

      	<div className="flex gap-12">
        	<a href='#' className="btn btn-red  animation-left">ПОПАСТЬ НА МАРАФОН</a>
        	<a href='#' className="btn btn-white  animation-right">Связатся с менеджером</a>
		</div>

    </main>
  )
  
}


export default Main