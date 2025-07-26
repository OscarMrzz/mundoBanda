"use client";
import React, { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const initialForm = {
  nombre: "",
  alias: "",
  email: "",
  password: "",
  password2: "",
  fechaNacimiento: "",
  sexo: "",
  genero: "",
  tipoUsuario: "",
  banda: "",
  identidad: "",
  numeroTelefono: "",
  direccion: "",
};

const Page = () => {
  const [form, setForm] = useState(initialForm);
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const supabase = createClientComponentClient();

  // Cuando cambia un input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Al enviar el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje("");
    setLoading(true);

    if (form.password !== form.password2) {
      setMensaje("Las contraseñas no coinciden.");
      setLoading(false);
      return;
    }

    // 1. Crear usuario en Auth
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setMensaje("Error registrando usuario: " + error.message);
      setLoading(false);
      return;
    }

    // 2. Insertar perfil con datos extra
    const userId = data.user?.id;
    if (userId) {
      const { error: perfilError } = await supabase.from("perfiles").insert([{
          id: userId,
          nombre: form.nombre,
          alias: form.alias,
          fechaNacimiento: form.fechaNacimiento,
          sexo: form.sexo,
          genero: form.genero,
          tipoUsuario: form.tipoUsuario,
          banda: form.banda,
          identidad: form.identidad,
          numeroTelefono: form.numeroTelefono,
          direccion: form.direccion,
        },
      ]);
      if (perfilError) {
        console.error(perfilError);
        setMensaje("Usuario creado, pero error al guardar perfil: " + perfilError.message);
      } else {
        setMensaje("¡Usuario creado correctamente! Revisa tu correo para confirmar.");

        // Si NO tienes confirmación de correo activada, la sesión ya está activa y puedes redirigir
        // Si tienes confirmación de correo, el usuario debe iniciar sesión después de confirmar el email
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          // Esto activa el middleware para copiar sesión a cookies httpOnly
          router.push("/");
        }
        setForm(initialForm);
      }
    } else {
      setMensaje("Usuario creado, pero no se pudo obtener el ID.");
    }
    setLoading(false);
  };

  return (
    <div className="py-24 px-12">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-100">Crear Usuario</h1>
        <p className="text-gray-400 mt-4">
          Esta es la página para crear un nuevo usuario. Aquí puedes ingresar tus datos para registrarte.
        </p>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="nombre">Nombre de Usuario</label>
            <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} className="w-full p-2 bg-gray-700 text-white rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="alias">Alias</label>
            <input type="text" id="alias" name="alias" value={form.alias} onChange={handleChange} className="w-full p-2 bg-gray-700 text-white rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="w-full p-2 bg-gray-700 text-white rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" value={form.password} onChange={handleChange} className="w-full p-2 bg-gray-700 text-white rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="password2">Confirmar Contraseña</label>
            <input type="password" id="password2" name="password2" value={form.password2} onChange={handleChange} className="w-full p-2 bg-gray-700 text-white rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
            <input type="date" id="fechaNacimiento" name="fechaNacimiento" value={form.fechaNacimiento} onChange={handleChange} className="w-full p-2 bg-gray-700 text-white rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="sexo">Sexo</label>
            <input type="text" id="sexo" name="sexo" value={form.sexo} onChange={handleChange} className="w-full p-2 bg-gray-700 text-white rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="genero">Género</label>
            <input type="text" id="genero" name="genero" value={form.genero} onChange={handleChange} className="w-full p-2 bg-gray-700 text-white rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="tipoUsuario">Tipo de usuario</label>
            <input type="text" id="tipoUsuario" name="tipoUsuario" value={form.tipoUsuario} onChange={handleChange} className="w-full p-2 bg-gray-700 text-white rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="banda">Banda</label>
            <input type="text" id="banda" name="banda" value={form.banda} onChange={handleChange} className="w-full p-2 bg-gray-700 text-white rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="identidad">Identidad</label>
            <input type="text" id="identidad" name="identidad" value={form.identidad} onChange={handleChange} className="w-full p-2 bg-gray-700 text-white rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="numeroTelefono">Número de Teléfono</label>
            <input type="text" id="numeroTelefono" name="numeroTelefono" value={form.numeroTelefono} onChange={handleChange} className="w-full p-2 bg-gray-700 text-white rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="direccion">Dirección</label>
            <input type="text" id="direccion" name="direccion" value={form.direccion} onChange={handleChange} className="w-full p-2 bg-gray-700 text-white rounded" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors" disabled={loading}>
            {loading ? "Creando..." : "Crear Cuenta"}
          </button>
          {mensaje && <div className="mt-4 text-sm">{mensaje}</div>}
        </form>
      </div>
    </div>
  );
};

export default Page;