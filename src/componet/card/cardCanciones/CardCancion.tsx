import React from 'react'

type CardCancioneProps = {
nombreCancion: string;
artistas: string;
urlCancion: string;
}

// Función para extraer el ID del video de YouTube
const getYouTubeVideoId = (url: string): string | null => {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

const CardCancione = ({nombreCancion, artistas,urlCancion}:CardCancioneProps) => {
  const videoId = getYouTubeVideoId(urlCancion);
  
  return (
    <div>
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-bold mb-2">{nombreCancion}</h2>
        <p className="text-gray-400 mb-2">Artistas: {artistas}</p>
        
        {videoId ? (
          <div className="mt-4">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={nombreCancion}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        ) : (
          <a href={urlCancion} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            Escuchar Canción
          </a>
        )}
        <p className='text-gray-400'>0 <span className='text-gray-300'>Bandas</span></p>
        <p className='text-gray-400 mb-2'>Ver lista</p>
      </div>
      
    </div>
  )
}

export default CardCancione
