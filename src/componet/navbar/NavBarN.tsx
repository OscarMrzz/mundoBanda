import Link from 'next/link'
import React from 'react'

const NavBarN = () => {
  return (
    <nav className=" flex bg-blue-600 p-4 justify-between items-center pr-10 ">
      <div>
        <h1><Link href="/" className="text-white hover:underline no-underline">Mundo Banda</Link></h1>
      </div>
      <ul className="flex space-x-4 ">
        <li>
          <Link href="/" className="text-white ">Inicio</Link>
        </li>

        <li>
          <Link href="/calendar" className="text-white ">Eventos</Link>
        </li>
        <li>
          <Link href="/" className="text-white  ">Federaciones</Link>
        </li>
        <li>
          <Link href="/campeones" className="text-white  ">Campeones</Link>
        </li>
        <li>
          <Link href="/" className="text-white ">Musica</Link>
        </li>
        <li>
          <Link href="/" className="text-white ">Herramientas</Link>
        </li>
        <li>
          <Link href="/" className="text-white ">Comunicados</Link>
        </li>
        <li>
          <Link href="/" className="text-white ">Login</Link>
        </li>
        {/* Agrega más rutas aquí */}
      </ul>
    </nav>

  )
}

export default NavBarN
