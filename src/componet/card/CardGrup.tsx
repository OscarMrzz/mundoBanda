import React from 'react'

type Props = {
    children?: React.ReactNode;
    }
const CardGrup = ({children}:Props) => {
  return (
    <div className='bg-white shadow-sm  h-64 p-2 flex flex-col gap-2'>
        {children}
      
    </div>
  )
}

export default CardGrup
