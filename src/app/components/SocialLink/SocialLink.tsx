import style from "./SociaLink.module.scss"


type SocialLinkParams = {
  href: string,
  children: React.ReactNode,
}


const SocialLink = ({ href, children, }: SocialLinkParams) => {
  return (
    <a className={style.social_link} href={href}>
      {children}
    </a>
  )
}

export default SocialLink;