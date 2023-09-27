import style from "./Header.module.scss"
import logo from "../../Ressources/LogoTempo.jpg"

function Header(){
    return(
        <header>
            <img src={logo} alt="logo"/>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Introduction</li>
                    <li>Contact</li>
                    <li>Univers</li>
                    <li>Outils</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;