import React from 'react'
import CardGrup from '../../componet/card/CardGrup'
import CardMes from '../../componet/card/CardMes'
import CardEvento from '../../componet/card/CardEvento'

const Calendar = () => {
  return (
     <div className=' w-full p-4 flex flex-col gap-4'  >
      <div className='grid grid-cols-[45px_1fr] gap-2.5  flex-row w-full  items-center justify-center'>
        <div className='bg-blue-200 h-full flex items-center justify-center rounded-lg shadow-md'>
          <CardMes mes="JUNIO" />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  '>
          <CardGrup>
            <CardEvento federacion="ONBH" sede="Tela" />
            <CardEvento federacion="FederacionB" sede="Puerto cortes" />
            <CardEvento federacion="FederacionC" sede="Puerto cortes" />
          </CardGrup>
          <CardGrup>
            <CardEvento federacion="FECCAH" sede="La Paz" />
          </CardGrup>
          <CardGrup>
            <CardEvento federacion="FECCAH" sede="La lima" />
          </CardGrup>
          <CardGrup>
            <CardEvento federacion="FECCAH" sede="Puerto Cortes" />
          </CardGrup>



        </div>
      </div>

      <div className='grid grid-cols-[45px_1fr] gap-2.5  flex-row w-full  items-center justify-center'>
        <div className='bg-blue-200 h-full flex items-center justify-center rounded-lg shadow-md'>
          <CardMes mes="JULIO" />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  '>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />

          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
        </div>
      </div>
      <div className='grid grid-cols-[45px_1fr] gap-2.5  flex-row w-full  items-center justify-center'>
        <div className='bg-blue-200 h-full flex items-center justify-center rounded-lg shadow-md'>
          <CardMes mes="AGOSTO" />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  '>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />

          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
        </div>
      </div>
      <div className='grid grid-cols-[45px_1fr] gap-2.5  flex-row w-full  items-center justify-center'>
        <div className='bg-blue-200 h-full flex items-center justify-center rounded-lg shadow-md'>
          <CardMes mes="SEPTIEMBRE" />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  '>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />

          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
        </div>
      </div>
      <div className='grid grid-cols-[45px_1fr] gap-2.5  flex-row w-full  items-center justify-center'>
        <div className='bg-blue-200 h-full flex items-center justify-center rounded-lg shadow-md'>
          <CardMes mes="OCTUBRE" />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  '>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />

          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
        </div>
      </div>
      <div className='grid grid-cols-[45px_1fr] gap-2.5  flex-row w-full  items-center justify-center'>
        <div className='bg-blue-200 h-full flex items-center justify-center rounded-lg shadow-md'>
          <CardMes mes="NOVIEMBRE" />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  '>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />

          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
        </div>
      </div>
      <div className='grid grid-cols-[45px_1fr] gap-2.5  flex-row w-full  items-center justify-center'>
        <div className='bg-blue-200 h-full flex items-center justify-center rounded-lg shadow-md'>
          <CardMes mes="DICIEMBRE" />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  '>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />

          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
          <CardGrup>
            <CardEvento federacion="AAAA" sede="BBBB" />
          </CardGrup>
        </div>
      </div>


    </div>
  )
}

export default Calendar
