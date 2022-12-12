import React from 'react'
import headerImg from '../components/headerImg.png'
import verifyImg from '../components/verifyImg.png'





const Main = () => {

  return (
    <main className='relative w-100 min-h-screen'>
      	<h6 className=' mt-20 text-[#F17216] pb-[30px] tracking-[2px] inline-flex items-center text-xl  animation-left'> 
        	<img src={verifyImg} className="pr-2" alt="verify-icon" /> 
			Авторская программа  от <b>@dair_shaizat_info</b>
      	</h6>

      	<h1 className='text-[70px] leading-[80px] font-bold text-[#282C4B] pb-[40px] tracking-[1px] w-[700px] animation-left'>
			Найди себя и дело <br /> своей мечты
		</h1>

      	<img src={headerImg} alt="header-img" className='absolute right-1 top-20 animation-right' width="758px" />

      	<p className='text-[35px] text-[#282c4bab] w-[700px] leading-[50px] tracking-[1px] pb-3 animation-left'>Ты перестанешь в себе сомневаться, подружишься   
          с собой и окружающем миром и начнешь зарабатывать 
          на любимом деле 
      	</p>

      	<h3 className='text-[#FC4772] font-bold text-[40px] pb-[100px] animation-left'>ВСЕГО ЗА 20 ДЕНЬ</h3>
    	<h3 className='text-[40px] pb-7 text-[#282c4bab] animation-left'>Cтарт:<b> 30 июля</b></h3>

      	<div className="flex gap-12">
        	<a href='#' className="btn-red  animation-left">
				ПОПАСТЬ НА МАРАФОН
			</a>
        	<a href='#' className="btn-white  animation-right">
				Связатся с менеджером
			</a>
		</div>

    </main>
  )
  
}


export default Main