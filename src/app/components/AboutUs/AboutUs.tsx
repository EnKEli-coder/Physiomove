import style from "./AboutUs.module.scss"
import { anek_Devanagari } from "@/app/fonts";

const AboutUs = () => {
  return(
    <section className={style.about_us} id="aboutus-section">
      <div className={style.content_wrapper}>
        <div className={style.image_container}>
          <div className={style.circle_container}>
          </div>
        </div>
        <div className={style.info_container}>
          <div className={style.title_wrapper}>
            <p className={`${style.name} ${anek_Devanagari.className}`}>Physiomove.</p>
            <h1 className={`${style.title_one} ${anek_Devanagari.className}`}>TU BIENESTAR</h1>
            <h1 className={`${style.title_two} ${anek_Devanagari.className}`}>EN MANOS DE EXPERTOS</h1>
          </div>
          <div className={style.name_container}>
            <p>DRA. EN FISIOTERAPIA</p>
            <p>KARLA DE MEDINA</p>
          </div>
          <div className={style.description_container}>
            <p>
              Fisioterapeuta con experiencia en areas como fisioterapia deportiva,
              dermatofuncional, ortopedica, geriatrica y cuidados del adulto mayor.
            </p>
            <p>
              "Siempre buscando tu bienestar y mejorar tu calidad de vida."
            </p>
          </div>
        </div>
        <p className={`${style.name_absolute} ${anek_Devanagari.className}`}>Physiomove.</p>
      </div>
    </section>
  )
}

export default AboutUs;