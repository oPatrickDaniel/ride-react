'use client'
import { useState } from "react"
import CloseBtn from "../components/closeBtn"

export default function SpeedometerPage() {

  const [hidden, setHidden] = useState('btn-green')
  const [textBtn, setTextBtn] = useState('Iniciar')

  function toggleButton() {
    if (hidden === 'btn-green') {
      setHidden('btn-red')
      setTextBtn('Finalizar')
    } else {
      setHidden('btn-green')
      setTextBtn('Iniciar')
    }
  }

  return (
    <div className='container mx-auto px-3 py-5 flex flex-col justify-between h-screen'>
      <nav className='flex justify-end'>
        <a href="/"> <CloseBtn /></a>
      </nav>
      <div className='flex flex-col items-center gap-3 font-bold text-gray-600'>
        <span className='text-8xl'>0</span>
        <span className='text-4xl'>KM/H</span>
      </div>
      <button id="speedometerBtn" onClick={toggleButton} className={hidden}>{textBtn}</button>
    </div>
  )
}
