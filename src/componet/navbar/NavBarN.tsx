"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const NavBarN = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    // Checa si hay sesión
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
    };
    checkSession();

    // Opcional: suscribirse a cambios de sesión
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [supabase]);

  // Maneja click en el botón (si está logueado, cierra sesión y redirige; si no, navega a login)
  const handleAuthClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLoggedIn) {
      await supabase.auth.signOut();
      setIsLoggedIn(false);
      router.push("/");   // Redirige al home tras cerrar sesión
    } else {
      router.push("/login"); // Navega a login si no está logueado
    }
  };

  return (
    <nav className="flex bg-gray-400/40 backdrop-blur-md p-4 justify-between items-center pr-10 border-b border-white/10">
      <div>
        <h1>
          <Link href="/" className="text-white hover:underline no-underline">
            Mundo Banda
          </Link>
        </h1>
      </div>
      <ul className="flex space-x-4 ">
        <li>
          <Link href="/prueba" className="text-white ">pruebas</Link>
        </li>
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
          <Link href="/cancionesHome" className="text-white ">Musica</Link>
        </li>
        <li>
          <Link href="/" className="text-white ">Herramientas</Link>
        </li>
        <li>
          <Link href="/" className="text-white ">Comunicados</Link>
        </li>
        <li>
          {/* Cambia texto y acción según estado */}
          <a
            href={isLoggedIn ? "/" : "/login"}
            className="text-white cursor-pointer"
            onClick={handleAuthClick}
          >
            {isLoggedIn ? "cerrar sesión" : "iniciar sesión"}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarN;