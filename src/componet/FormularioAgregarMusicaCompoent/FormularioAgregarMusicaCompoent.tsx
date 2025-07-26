"use client";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const ItemsFormulario = {
    nombreCancion: "",
    nombreAutores: "",
    urlYoutube: "",
}

const FormularioAgregarMusicaCompoent = () => {
    const [form, setForm] = useState(ItemsFormulario);
      const [mensaje, setMensaje] = useState("");
      const [loading, setLoading] = useState(false);

      
  const router = useRouter();
  const supabase = createClientComponentClient();

  
    // Cuando cambia un input
    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [evento.target.name]: evento.target.value });
    };

    const handleSubmit = async (evento: React.FormEvent) => {
        evento.preventDefault();
        setMensaje("");
        setLoading(true); 
        
        // Verificar si el usuario está autenticado
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
            setMensaje("Error: Debes estar logueado para agregar canciones");
            setLoading(false);
            return;
        }
        
        const { error } = await supabase.from("canciones").insert([
            {
                nombreCancion: form.nombreCancion,
                nombreAutores: form.nombreAutores,
                urlYoutube: form.urlYoutube,
            }
        ]);
        
        if (error) {
            console.error("Error detallado:", error);
            setMensaje("Error al agregar la canción: " + error.message);
        } else {
            setMensaje("Canción agregada exitosamente");
            setForm(ItemsFormulario); // Limpiar formulario
            router.push("/musicaHome"); // Redirigir a la página de canciones
        }
        setLoading(false);
    }
    
      




  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Agregar Nueva Canción</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div>
                <label className='block text-sm font-medium mb-2' htmlFor="nombreCancion">Nombre de la canción</label>
                <input 
                    type="text" 
                    id="nombreCancion"
                    name="nombreCancion"
                    value={form.nombreCancion}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ingresa el nombre de la canción"
                    required
                />
            </div>
            
            <div>
                <label className='block text-sm font-medium mb-2' htmlFor="nombreAutores">Autor</label>
                <input 
                    type="text" 
                    id="nombreAutores"
                    name="nombreAutores"
                    value={form.nombreAutores}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ingresa el nombre del autor"
                    required
                />
            </div>
            
            <div>
                <label className='block text-sm font-medium mb-2' htmlFor="urlYoutube">Link de YouTube</label>
                <input 
                    type="url" 
                    id="urlYoutube"
                    name="urlYoutube"
                    value={form.urlYoutube}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://youtube.com/watch?v=..."
                    required
                />
            </div>

            <button 
                type="submit"
                disabled={loading}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
                {loading ? "Agregando..." : "Agregar Canción"}
            </button>
            
            {mensaje && (
                <div className={`mt-4 p-3 rounded-md text-sm ${
                    mensaje.includes("Error") 
                        ? "bg-red-900 text-red-300 border border-red-700" 
                        : "bg-green-900 text-green-300 border border-green-700"
                }`}>
                    {mensaje}
                </div>
            )}
        </form>
      
    </div>
  )
}

export default FormularioAgregarMusicaCompoent
