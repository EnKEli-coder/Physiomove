import Link from "next/link";
import style from "./Hero.module.scss"

const Hero = () => {
  return (
      <div className={style.hero}>
        <div className={style.title_section}>
          <h1>TU SALUD</h1>
          <h2>ES NUESTRA PRIORIDAD</h2>
          <p>Physiomove.</p>
        </div>
        <p className={style.slogan}>
          En Physiomove nos capacitamos constantemente en técnicas avanzadas
          con la finalidad de ayudarte a cuidar, recuperar y aliviar tu salud física.
        </p>
        <Link href="#contacto_section" scroll className={style.contacto_button} >
          CONTÁCTANOS
        </Link>
      </div>
  )
}

export default Hero;