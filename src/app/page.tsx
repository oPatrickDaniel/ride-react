import { useState } from 'react';
import CloseBtn from './../components/closeBtn';

export default function Home() {

  const [hidden, SetHidden] = useState('Hidden')

  return (
    <div className='container mx-auto p-3 flex flex-col justify-between h-screen'>
      <nav className='flex justify-end'>
        <CloseBtn />
      </nav>
      <div className='flex flex-col items-center  font-bold text-gray-600'>
        <span className='text-8xl'>0</span>
        <span className='text-4xl'>KM/H</span>
      </div>
      <button id='start' className='btn btn-green' onClick={ }>Iniciar</button>
      <button id='stop' className='hidden btn btn-red'>Finalizar</button>
    </div>
  )
}

