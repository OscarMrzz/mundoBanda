'use client'

import AnimatedDiv from "@/componet/Animaciones/AnimationLeftRight";

const ScrollAnimado = () => {
  return (
    <div>

      <div id="progresss"></div>
      <div id="tituloPrueba">Titulo de prueba</div>

    <div className="grid grid-cols-4 gap-4 p-6">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="animar-scroll-fade-in h-80 w-full bg-blue-500  flex items-center justify-center text-white font-bold text-xl"
        >
          hola {i + 1}
        </div>
      ))}
    </div>
    <AnimatedDiv>
  <div style={{ background: "#eee", padding: 20 }}>
    ¡Hola! Aparezco animado desde la izquierda tras 8ms al entrar al viewport
  </div>
</AnimatedDiv>
   <div className="grid grid-cols-4 gap-4 p-6">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="animar-scroll-fade-in h-80 w-full bg-blue-500  flex items-center justify-center text-white font-bold text-xl"
        >
          hola {i + 1}
        </div>
      ))}
    </div>
        </div>
  );
};

export default ScrollAnimado;
