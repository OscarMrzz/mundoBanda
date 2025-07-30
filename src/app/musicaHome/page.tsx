import React from 'react'
import { cookies } from 'next/headers'
import CardCancion from '@/componet/card/cardCanciones/CardCancion'



const cancionesHome = async () => {
  let canciones = null;
  
  // Check if Supabase environment variables are available
  const hasSupabaseConfig = !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL && 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  
  if (hasSupabaseConfig) {
    try {
      const { createServerComponentClient } = await import('@supabase/auth-helpers-nextjs');
      const supabase = createServerComponentClient({cookies});
      const { data } = await supabase.from('canciones').select();
      canciones = data;
    } catch (error) {
      console.warn('Error loading songs from Supabase:', error);
      canciones = [];
    }
  } else {
    // Fallback when Supabase is not configured
    canciones = [];
  }

  return (
    <div className='py-24 px-12'>
        <h1 className='text-3xl font-bold text-gray-100'>Repertorio de musica</h1>
       
       <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-8 '>
            {canciones && canciones.length > 0 ? (
              canciones.map((cancion, index) => (
                <CardCancion 
                    key={index}
                    nombreCancion={cancion.nombreCancion || cancion.nombreCancion || ''} 
                    artistas={cancion.nombreAutores || cancion.nombreAutores || ''} 
                    urlCancion={cancion.urlYoutube|| cancion.url || ''} 
                />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-300">
                <p>No hay canciones disponibles en este momento.</p>
                {!hasSupabaseConfig && (
                  <p className="text-sm text-gray-400 mt-2">
                    Base de datos no configurada.
                  </p>
                )}
              </div>
            )}
            </section>
      
      
    </div>
  )
}

export default cancionesHome
