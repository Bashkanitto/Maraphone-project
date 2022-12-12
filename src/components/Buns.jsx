import React from 'react'
import buns from '../components/buns-person-img.png'
import stage from '../components/stage.png'
import mother from '../components/mother.png'
import money from '../components/money.png'

const Buns = () => {
  return (
	<div className='buns w-100 h-screen mt-20 relative'>
		<h2 className='font-bold text-4xl leading-[50px]'>Достингуть крутого результата тебе <br /> помогут <span className='text-[#FC4772]'> ШАЙЗАТ ДАЙР</span></h2>
		<img src={buns} alt="buns person" className='float-right absolute top-0 right-5' />
		<p className='text-[#282c4bab] text-3xl py-5 pb-20 leading-[40px]'>Поделиться с вами своим опытом в видеоуроках <br /> и вдохновит тебя своим результатом:</p>

	<div className="bunsRow w-[70%]">
		<div className="bunsBox">
			<img className='p-3' src={mother} alt="mother icon" />
			<h2 className='p-3'>Предприниматель и <br />
			Мамочка в деркрете</h2>
		</div>
		<div className="bunsBox z-2">
			<img className='p-3' src={stage} alt="stage icon" />
			<h2 className='p-3'>Опыт 3 года+</h2>
		</div>
		<div className="bunsBox z-3">
			<img className='p-3' src={money} alt="money icon" />
			<h2 className='p-3'>Сумма выигранных тендеров от 50 млн тг</h2>	
		</div>
	</div>
	</div>
  )
}

export default Buns