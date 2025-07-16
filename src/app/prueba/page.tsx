'use client'
const ScrollAnimado = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="h-40 w-full bg-blue-500 animar-scroll flex items-center justify-center text-white font-bold text-xl"
        >
          hola {i + 1}
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimado;
