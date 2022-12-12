import React from 'react'
import aboutImg from '../components/about-persons.png'
import checkImg from '../components/Checklist-Circle.png'

const About = () => {
      return (
    <div className='about w-100 min-h-screen flex justify-center items-center relative'>
        <img src={aboutImg} className="about-left " width="800px" height='800px'/>
        <div className="w-100 flex-column">
            <h2 className='text-5xl text-[#282C4B] font-bold'>Как пройдет <br /> наш новый марафон?</h2>
            <ul className='py-10'>
                <li>
                    <img src={checkImg} alt="check icon" className='w-7 h-7 mr-3 mt-1'/>
                    Уроки будут проходить на удобной платформе, гдe каждый день будут открываться новые уроки с Шайзат и другими экспертами
                </li>
                <li>
                    <img src={checkImg} alt="check icon" className='w-7 h-7 mr-3 mt-1' />
                    Тебя добавят в чат с другими ученицами и кураторами, где тебя будут контролировать и мотивировать в течение всего марафона
                </li>
                <li>
                    <img src={checkImg} alt="check icon" className='w-7 h-7 mr-3 mt-1' />
                    Также, тебя будут ждать видеоуроки от наших спикеров с полезными темами по психологии и планированию, а также специально для мамочек – лайфхаки по эффективности.
                </li>
            </ul>
            <a href='#' className='btn-red'>ПОПАСТЬ НА МАРАФОН</a>
        </div>
    </div>
    

  )
  
}


export default About