import Link from "next/link";
import style from "./Hero.module.scss"
import { anek_Devanagari } from "@/app/fonts";

const Hero = () => {
  return (
      <section className={style.hero} id="hero-section">
        <div className={style.title_section}>
          <h1 className={`${style.title_one} ${anek_Devanagari.className}`}>TU SALUD</h1>
          <h2 className={`${style.title_two} ${anek_Devanagari.className}`}>ES NUESTRA PRIORIDAD</h2>
          <h1 className={`${style.title_full} ${anek_Devanagari.className}`}>TU SALUD ES NUESTRA PRIORIDAD</h1>
          <p>Physiomove.</p>
        </div>
        <p className={style.slogan}>
          En Physiomove nos capacitamos constantemente en técnicas avanzadas
          con la finalidad de ayudarte a cuidar, recuperar y aliviar tu salud física.
        </p>
        <Link href="#contacto_section" scroll className={style.contacto_button} >
          CONTÁCTANOS
        </Link>
      </section>
  )
}

export default Hero;