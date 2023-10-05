import style from "./Footer.module.scss"
import Logo from "../../Ressources/logodesign8.png"
import {Link} from "react-router-dom"
import Button from "../Button/Button"
import {FaFacebookF} from "react-icons/Fa"
import {AiFillInstagram} from "react-icons/Ai"
import {FaDiscord} from "react-icons/Fa"
import {FaXTwitter} from "react-icons/Fa6"

function Footer(){

    function scrollUp (){
        window.scroll(0,0)
    }

    return(
        <footer>
            <div className={style.logoButtons}>
                <div className={style.footerAll}>
                  <img src={Logo} alt="Logo" className={style.imgLogo} onClick={scrollUp}/>
                    <div className={style.reseaux}>
                        <Link to ="https://www.facebook.com/?locale=fr_FR" target="blank1"><FaFacebookF/></Link>
                        <Link to ="https://www.instagram.com/" target="blank2"><AiFillInstagram/></Link>
                        <Link to ="https://twitter.com/?lang=fr" target="blank3"><FaXTwitter/></Link>
                        <Link to ="https://discord.com/" target="blank4"><FaDiscord/></Link>
                    </div>
                    <ul className={style.boutonsFooter}>
                        <li><Link to ="/" onClick={scrollUp}>Accueil</Link></li>
                        <li><Link to ="/contact" onClick={scrollUp}>Nous contacter</Link></li>
                        <li><Link to ="/mentionslegales" onClick={scrollUp}>Mentions Légales</Link></li>
                        <li><Link to ="/cgu" onClick={scrollUp}>Conditions Général d'Utilisation</Link></li>
                    </ul>
                </div>

            </div>
            <p>Aventuriers en herbe &copy;</p>
        </footer>
    )
}

export default Footer;