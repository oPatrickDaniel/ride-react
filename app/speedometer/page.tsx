'use client'
import { useState } from "react"
import CloseBtn from "../components/closeBtn"

export default function SpeedometerPage() {

  const [training, setTraining] = useState(false)

  function startNewTraining(): void {
    training ? setTraining(false) : setTraining(true)
  }

  return (
    <div className='container mx-auto px-3 py-5 flex flex-col justify-between h-screen border-x border-gray-400'>
      <nav className='flex justify-end'>
        <a href="/"> <CloseBtn /></a>
      </nav>
      <div className='flex flex-col items-center gap-3 font-bold text-gray-600'>
        <span className='text-8xl'>0</span>
        <span className='text-4xl'>KM/H</span>
      </div>
      {!training ? <button onClick={startNewTraining} className='text-3xl font-bold py-2 px-4 rounded bg-green-600 text-white'>Iniciar</button>
        : <button onClick={startNewTraining} className='text-3xl font-bold py-2 px-4 rounded bg-red-500 text-white'>Finalizar</button>}
    </div>
  )
}
