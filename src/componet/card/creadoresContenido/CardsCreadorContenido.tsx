import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CardsCreadorContenido = () => {
  return (
    <div className="bg-gray-600 shadow-md rounded-lg p-6 mb-6 h-40 flex flex-row gap-3.5">
        <div className='flex items-center justify-center flex-shrink-0'>
         <div className='w-20 h-20 aspect-square rounded-full bg-gray-400 flex items-center justify-center mb-2 flex-shrink-0'>
                   <FontAwesomeIcon icon={faCamera} className='text-white text-2xl' />
                 </div>

        </div>
        <div>
            <h2 className='font-bold text-3xl text-gray-300'>Nombre Usuario</h2>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>

        </div>
       
      
    </div>
  )
}

export default CardsCreadorContenido
