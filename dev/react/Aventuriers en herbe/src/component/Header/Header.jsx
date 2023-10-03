import style from "./Header.module.scss"
import logo from "../../Ressources/logodesign8.png"
import {Link} from "react-router-dom"
import ButtonNav from "../../component/ButtonNav/ButtonNav"

function Header(){
    return(
        <header>
            <img src={logo} alt="logo"/>
            <nav>
                <ul>
                    <li><Link to = "/"><ButtonNav>Acceuil</ButtonNav></Link></li>
                    <li><Link to = "/introduction"><ButtonNav>Introduction</ButtonNav></Link></li>
                    <div className={style.dropdown}>
                        <li><Link to = "/univers"><ButtonNav>Univers</ButtonNav></Link></li>
                        <div className={style.dropdownContent}>
                            <ul>
                                <li><ButtonNav>Donjon & Dragon</ButtonNav></li>
                                <li><Link to ="/Pokémon"><ButtonNav>Pokémon</ButtonNav></Link></li>
                                <li><ButtonNav>Bladerunner</ButtonNav></li>
                                <li><ButtonNav>Fallout</ButtonNav></li>
                                <li><ButtonNav>Final Fantasy XIV</ButtonNav></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.dropdown}>
                        <li><Link to = "/outils"><ButtonNav>Outils</ButtonNav></Link></li>
                        <div className={style.dropdownContent}>
                            <ul>
                                <li><Link to = "/lanceurdes"><ButtonNav>Lanceur de dés</ButtonNav></Link></li>
                                <li><Link to = "/creationpersonnage"><ButtonNav>Création personnage D&D5</ButtonNav></Link></li>
                            </ul>
                        </div>
                    </div>
                    <li><Link to = "/contact"><ButtonNav>Contact</ButtonNav></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;