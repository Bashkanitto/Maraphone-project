import React from 'react'
import wayChooseImg from './ways-choise-img.png'

const Ways = () => {
  return (
    <div className='w-100 h-screen'>
        <h2>У тебя есть 2 <span>пути</span></h2>
        <div className="waysRow flex justify-center">
            <div className="wayOne bg-white shadow-xl rounded-xl py-5 px-10 shadow-[#fc497368] mx-20">
                <h3>Откладывать все на потом</h3>
                <ul className='list-disc'>
                    <li className='list-disc'>Комплексы</li>
                    <li>Нехватка денег</li>
                    <li>Нехватка уверенности</li>
                    <li>Недовольство своей жизнью</li>
                </ul>
            </div>
            <img src={wayChooseImg} alt="direction icon" />
            <div className="wayTwo bg-white shadow-xl rounded-xl py-5 px-20 shadow-[#fc497368] mx-20">
                <h3>Здесть и Сейчас</h3>
                <ul>
                    <li>Независимость</li>
                    <li>Свобода и Счастье</li>
                    <li>Достаток детей и родных</li>
                    <li>Любимое дело</li>
                </ul>
            </div>
        </div>
        <a href="#" className='btn-red'>Выбераю второй путь</a>
    </div>
  )
}

export default Ways