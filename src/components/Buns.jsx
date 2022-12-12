import React from 'react'
import bunsImg from '../components/buns-person-img.png'
import stageImg from '../components/stage.png'
import motherImg from '../components/mother.png'
import moneyImg from '../components/money.png'

const Buns = () => {
  return (
	<div className='buns w-100 h-screen mt-40 relative'>
		<h2 className='font-bold text-4xl leading-[50px]'>Достингуть крутого результата тебе <br /> помогут <span> ШАЙЗАТ ДАЙР</span></h2>
		<img src={bunsImg} alt="buns person" className='float-right absolute top-0 right-5' />
		<p className='text-[#282c4bab] text-3xl py-5 pb-20 leading-[40px]'>Поделиться с вами своим опытом в видеоуроках <br /> и вдохновит тебя своим результатом:</p>

	<div className="bunsRow w-[70%]">
		<div className="bunsBox">
			<img className='p-3' src={motherImg} alt="mother icon" />
			<h3 className='p-3'>Предприниматель и <br />
			Мамочка в деркрете</h3>
		</div>
		<div className="bunsBox z-2">
			<img className='p-3' src={stageImg} alt="stage icon" />
			<h3 className='p-3'>Опыт 3 года+</h3>
		</div>
		<div className="bunsBox z-3">
			<img className='p-3' src={moneyImg} alt="money icon" />
			<h3 className='p-3'>Сумма выигранных тендеров от 50 млн тг</h3>	
		</div>
	</div>
	</div>
  )
}

export default Buns