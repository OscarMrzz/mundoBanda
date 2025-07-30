"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NavBarN = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [supabaseAvailable, setSupabaseAvailable] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if Supabase environment variables are available
    const hasSupabaseConfig = !!(
      process.env.NEXT_PUBLIC_SUPABASE_URL && 
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
    
    setSupabaseAvailable(hasSupabaseConfig);

    if (hasSupabaseConfig) {
      // Only initialize Supabase if config is available
      import("@supabase/auth-helpers-nextjs").then(({ createClientComponentClient }) => {
        const supabase = createClientComponentClient();
        
        // Checa si hay sesión
        const checkSession = async () => {
          try {
            const { data } = await supabase.auth.getSession();
            setIsLoggedIn(!!data.session);
          } catch (error) {
            console.warn('Error checking session:', error);
            setIsLoggedIn(false);
          }
        };
        checkSession();

        // Opcional: suscribirse a cambios de sesión
        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
          setIsLoggedIn(!!session);
        });
        
        return () => {
          authListener?.subscription.unsubscribe();
        };
      }).catch((error) => {
        console.warn('Error initializing Supabase:', error);
        setSupabaseAvailable(false);
      });
    }
  }, []);

  // Maneja click en el botón (si está logueado, cierra sesión y redirige; si no, navega a login)
  const handleAuthClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (!supabaseAvailable) {
      // If Supabase is not available, just navigate to login
      router.push("/login");
      return;
    }

    if (isLoggedIn) {
      try {
        const { createClientComponentClient } = await import("@supabase/auth-helpers-nextjs");
        const supabase = createClientComponentClient();
        await supabase.auth.signOut();
        setIsLoggedIn(false);
        router.push("/");   // Redirige al home tras cerrar sesión
      } catch (error) {
        console.warn('Error signing out:', error);
        router.push("/");
      }
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
          <Link href="/musicaHome" className="text-white ">Musica</Link>
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
            {supabaseAvailable && isLoggedIn ? "cerrar sesión" : "iniciar sesión"}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarN;