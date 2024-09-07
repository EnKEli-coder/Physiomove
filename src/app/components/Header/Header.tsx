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
      <Link className={style.logo_wrapper} href='#hero-section' scroll>
        <PhysiomoveIcon/>
        <p className={`${style.logo_text} ${anek_Devanagari.className}` }>Pshysiomove.</p>
      </Link>
      <nav className={style.navigation}>
        <Link href="#services-section" className={style.services_link} scroll>SERVICIOS</Link>
        <Link href="#aboutus-section" scroll>CONOCENOS</Link>
        <Link href="#contact-section" scroll>CONTACTO</Link>
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