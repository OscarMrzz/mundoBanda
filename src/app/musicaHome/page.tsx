import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import CardCancion from '@/componet/card/cardCanciones/CardCancion'



const cancionesHome = async () => {
    const supabase = createServerComponentClient({cookies})
  const { data: canciones } = await supabase.from('canciones').select()
  return (
    <div className='py-24 px-12'>
        <h1 className='text-3xl font-bold text-gray-100'>Repertorio de musica</h1>
       
       <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-8 '>
            {canciones?.map((cancion, index) => (
            
            <CardCancion 
                key={index}
                nombreCancion={cancion.nombreCancion || cancion.nombreCancion || ''} 
                artistas={cancion.nombreAutores || cancion.nombreAutores || ''} 
                urlCancion={cancion.urlYoutube|| cancion.url || ''} 
            />
            ))}
            </section>
      
      
    </div>
  )
}

export default cancionesHome
