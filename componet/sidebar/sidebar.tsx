import React from 'react'

const sidebar = () => {
    return (
        <div className='w-40  bg-white  shadow p-4'>
            <div className='flex flex-col   h-full ga'>
                <h2 className='text-lg text-gray-700 font-bold mb-4'>Federaciones</h2>
                <ul className='space-y-2'>
                    <li className='text-gray-700 cursor-pointer p-2 hover:bg-gray-200 '>FECCAH</li>
                    <li className='text-gray-700 cursor-pointer p-2 hover:bg-gray-200 '>ONBH</li>
                    <li className='text-gray-700 cursor-pointer p-2 hover:bg-gray-200 '>Item 3</li>
                    <li className='text-gray-700 cursor-pointer p-2 hover:bg-gray-200 '>Item 4</li>




                </ul>
                <h2 className='text-lg text-gray-700 font-bold mb-4 mt-4'>Departamentos</h2>
                <ul>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">Atlántida</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">Choluteca</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">Colón</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">Comayagua</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">Copán</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">Cortés</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">El Paraíso</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">Francisco Morazán</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">Gracias a Dios</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">Intibucá</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">Islas de la Bahía</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">La Paz</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">Lempira</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">Ocotepeque</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">Olancho</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">Santa Bárbara</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">Valle</li>
                    <li className="text-gray-700 cursor-pointer p-2 hover:bg-gray-200">Yoro</li>
                </ul>
            </div>

        </div>
    )
}

export default sidebar
