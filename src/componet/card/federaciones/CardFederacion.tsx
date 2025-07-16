import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CardFederacion = () => {
  return (
    <div className=  "animation-fade-in-simple-inverso bg-gray-700 shadow-md rounded-lg p-6 mb-6 h-80">
        <div className='bg-gray-200 rounded overflow-hidden h-40 items-center justify-center flex'>
            <FontAwesomeIcon icon={faCamera} className='text-gray-500 text-5xl' />
        </div>
        <h3 className='text-xl font-bold text-gray-200 mb-2'>Nombre federacion</h3>
        <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit provident, sint odio eveniet officiis, </p>
      
    </div>
  )
}

export default CardFederacion
