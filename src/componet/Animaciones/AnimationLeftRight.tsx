import { motion } from "framer-motion";

import { ReactNode } from "react";

export default function AnimationLeftRight({ children }: { children: ReactNode }) {
  return (
    <motion.div
  initial={{ opacity: 0, x: -100 }}            // Estado inicial
whileInView={{ opacity: 1, x: 0 }}           // Cuando el elemento está en el viewport: totalmente visible y en su posición original
transition={{ duration: 1, delay: 0.5 }}     // La animación dura 1 segundo y espera 0.8 segundos antes de empezar
viewport={{ once: false, amount: 0.1 }}      // La animación se activa cada vez que entra/sale del viewport; se activa cuando el 10% del elemento es visible
style={{ willChange: "opacity, transform" }} // Sugerencia al navegador para optimizar la animación de opacidad y transformación
    >
      {children}
    </motion.div>
  );
}