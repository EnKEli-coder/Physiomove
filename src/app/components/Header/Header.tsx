import Link from "next/link";
import PhysiomoveIcon from "../svg/PshysiomoveIcon";
import style from "./Header.module.scss"
import { anek_Devanagari } from "@/app/fonts";
import WhatsappLink from "../SocialLink/WhatsappLink";
import InstagramLink from "../SocialLink/InstagramLink";
import FacebookLink from "../SocialLink/FacebookLink";
import LanguageIcon from "../svg/LanguageIcon";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo_wrapper}>
        <PhysiomoveIcon/>
        <p className={`${style.logo_text} ${anek_Devanagari.className}` }>Pshysiomove.</p>
      </div>
      <nav className={style.navigation}>
        <Link href="#services_section" className={style.services_link}>SERVICIOS</Link>
        <Link href="#aboutus_section">CONOCENOS</Link>
        <Link href="#contact_section">CONTACTO</Link>
      </nav>
      <div className={style.links_group}>
        <button type="button" className={style.language_switch}>
          <LanguageIcon/>
        </button>
        <WhatsappLink/>
        <InstagramLink/>
        <FacebookLink/>
      </div>
    </header>
  )
}

export default Header;