import style from "./Footer.module.scss"
import Logo from "../../Ressources/logodesign8.png"
import {Link} from "react-router-dom"
import Button from "../Button/Button"
import {FaFacebookF} from "react-icons/Fa"
import {BiLogoInstagramAlt} from "react-icons/Bi"
import {FaDiscord} from "react-icons/Fa"

function Footer(){

    function scrollUp (){
        window.scroll(0,0)
    }

    return(
        <footer>
            <div className={style.logoButtons}>
                <img src={Logo} alt="Logo" className={style.imgLogo}/>
                <ul className={style.boutonsFooter}>
                    <li><Link to ="/" onClick={scrollUp}>Accueil</Link></li>
                    <li><Link to ="/contact" onClick={scrollUp}>Nous contacter</Link></li>
                    <li><Link to ="/mentionslegales" onClick={scrollUp}>Mentions Légales</Link></li>
                    <li><Link to ="/cgu" onClick={scrollUp}>Conditions Général d'Utilisation</Link></li>
                </ul>
                <div className={style.reseaux}>
                    <FaFacebookF/>
                    <BiLogoInstagramAlt/>
                    <FaDiscord/>

                </div>
            </div>
            <p>Aventuriers en herbe &copy;</p>
        </footer>
    )
}

export default Footer;