import React from 'react'

type Props = {
    federacion?: string;
    sede?: string;
}

const CardEvento = ({federacion,sede}:Props) => {
  return (
    <div className='flex bg-red-200 p-1.5 gap-1.5 shadow'>
        <h3 className='text-gray-700'>{federacion}</h3>
  
        <p className='text-gray-500'>{sede}</p>
   
      
    </div>
  )
}

export default CardEvento
