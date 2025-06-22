import React from 'react'
type Props={
    mes: string

}
const CardMes = ({mes}:Props) => {
  return (
    <div>
        <h2 className='flex flex-col items-center leading-none'>
            {mes.split("").map((lentra,index)=>(
                <span key={index} className="text-2xl font-bold text-blue-500">
                    {lentra}
                </span>
            ))}
        </h2>
      
    </div>
  )
}

export default CardMes
