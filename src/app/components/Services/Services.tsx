import style from "./Services.module.scss"
import { anek_Devanagari } from "@/app/fonts";

const Services = () => {
  return(
    <section className={style.services}>
      <div className={`${style.physio_services} ${style.service_container}`}>
        <h2 className={anek_Devanagari.className}>SERVICIOS DE FISIOTERAPIA</h2>
        <div className={style.text_wrapper}>
          <p>Ver todos los servicios &gt;&gt;</p>
          <p>Keep healthy, keep moving.</p>
        </div>
      </div>
      <div className={`${style.derma_services} ${style.service_container}`}>
        <h2 className={anek_Devanagari.className}>SERVICIOS DERMATOFUNCIONALES</h2>
        <div className={style.wrapped_title}>
          <h2 className={anek_Devanagari.className}>SERVICIOS DERMATO</h2>
          <h2 className={anek_Devanagari.className}>FUNCIONALES</h2>
        </div>
        <div className={style.text_wrapper}>
          <p>Ver todos los servicios &gt;&gt;</p>
          <p>Physiomove.</p>
        </div>
        
      </div>
    </section>
  )
}

export default Services;