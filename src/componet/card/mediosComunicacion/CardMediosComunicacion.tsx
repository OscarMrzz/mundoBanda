import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

const CardMediosComunicacion = () => {
  return (
    <div className='h-60 flex flex-col items-center border-2 border-gray-500 p-3.5'>
        <div className='w-20 h-20 aspect-square rounded-full bg-gray-600 flex items-center justify-center mb-2 flex-shrink-0'>
          <FontAwesomeIcon icon={faCamera} className='text-white text-2xl' />
        </div>
        <h2 className='text-white font-bold text-2xl'>Nombre medio</h2>
        <p className='text-white items-center justify-center text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default CardMediosComunicacion
