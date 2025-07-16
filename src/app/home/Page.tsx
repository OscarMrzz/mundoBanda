'use client'

import CardsCreadorContenido from '@/componet/card/creadoresContenido/CardsCreadorContenido'
import CardFederacion from '@/componet/card/federaciones/CardFederacion'
import CardMediosComunicacion from '@/componet/card/mediosComunicacion/CardMediosComunicacion'
import React, { use } from 'react'

import { useEffect, useState } from 'react'

const Home = () => {
    const [showTituloEncabezado, setShowTituloEncabezado] = useState(true);

    useEffect(() => {
        let posicionAnteriorScroll = window.scrollY;

        const controlScroll = () => {
            const posicionActualScroll = window.scrollY;
            if (posicionActualScroll > posicionAnteriorScroll) {
                setShowTituloEncabezado(false);
            } else {
                setShowTituloEncabezado(true);
            }
            posicionAnteriorScroll = posicionActualScroll;
        };

        window.addEventListener('scroll', controlScroll);

        return () => {
            window.removeEventListener('scroll', controlScroll);
        };
    }, [])
    return (
        <div className='h-full'>
            <section id='hero' className=" px-24  h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/hero.jpg')", clipPath: "polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0)" }}>
                <div className='flex flex-col items-start justify-center h-full '>
                    <div className='w-md flex flex-col items-start justify-end h-80'>
                        <h1 className={`text-8xl font-bold text-white text-left pt-20 text-shadow
            transition-all duration-[1500ms] ease-in-out
                ${showTituloEncabezado == true ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Mundo Banda</h1>
                        <p className={`text-lg text-white text-left mt-4
                 transition-all duration-[1500ms] ease-in-out
                ${showTituloEncabezado == true ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quasi possimus aspernatur, ex minus culpa, nisi dolorum maiores fugiat officia voluptatum autem! Odit voluptatibus blanditiis non, assumenda tempore officia accusantium.</p>
                    </div>

                </div>

            </section>

            <section id='federaciones' className="px-24 py-40">
                <div className='flex  justify-center h-40 '>
                    <h2 className='text-8xl text-white font-bold' >FEDERACIONES</h2>

                </div>
                <div className='grid grid-cols-4 gap-6'>
                    <CardFederacion />
                    <CardFederacion />
                    <CardFederacion />
                    <CardFederacion />
                    <CardFederacion />
                    <CardFederacion />
                    <CardFederacion />


                </div>

            </section>


            <section id='seccionMediosComunicacion' className='px-24 py-40'>
                <div className='flex  justify-center h-40 '>
                    <h2 className='text-6xl text-white font-bold' >MEDIOS DE COMUNICACION</h2>

                </div>
                <div className='grid grid-cols-2'>


                    <div className='text-white'>
                        <h3 className='font-bold text-3xl'>Medios de comunicacion</h3>
                        <p className='w-2xs mt-3.5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quasi aspernatur odio optio nam rem facilis, fugit inventore, distinctio placeat sint saepe blanditiis debitis, corporis amet dolorum nihil? Harum, doloremque.</p>
                        <button className='bg-gray-300 px-3 text-gray-800 mt-3.5'>Ver todos</button>
                    </div>
                    <div className='grid grid-cols-2 grid-rows-2 gap-6 '>
                        <CardMediosComunicacion />
                        <CardMediosComunicacion />
                        <CardMediosComunicacion />
                        <CardMediosComunicacion />
                    </div>
                </div>

            </section>
        
            <section id='federaciones' className="px-24 py-40">
                <div className='flex  justify-center h-40 '>
                    <h2 className='text-8xl text-white font-bold' >CREADORES DE CONTENIDO</h2>

                </div>
                <div className='grid grid-cols-3 gap-6'>
                  
                <CardsCreadorContenido />
                <CardsCreadorContenido />
                <CardsCreadorContenido />
                <CardsCreadorContenido />
                <CardsCreadorContenido />


                </div>

            </section>
            <section id='seccionCreadoresContenido' className='px-24 py-40'>
                <div className='flex  justify-center h-40 '>
                    <h2 className='text-6xl text-white font-bold' >TIENDAS</h2>

                </div>
                <div className='grid grid-cols-4 grid-rows-2 gap-6 h-150'>
                    <div className=' bg-gray-500 shadow-md row-span-2'>1</div>
                    <div className=' bg-gray-500 shadow-md col-span-2'>2</div>
                    <div className=' bg-gray-500 shadow-md'>3</div>
                    <div className=' bg-gray-500 shadow-md'>4</div>
                    <div className=' bg-gray-500 shadow-md col-span-2'>5</div>



                </div>



            </section>
        </div>
    )
}

export default Home




