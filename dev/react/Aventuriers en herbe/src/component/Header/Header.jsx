import style from "./Header.module.scss"
import logo from "../../Ressources/logodesign8.png"
import {Link} from "react-router-dom"

function Header(){
    return(
        <header>
            <img src={logo} alt="logo"/>
            <nav>
                <ul>
                    <li><Link to = "/">Accueil</Link></li>
                    <li><Link to = "/introduction">Introduction</Link></li>
                    <div className={style.dropdown}>
                        <li><Link to = "/univers">Univers</Link></li>
                        <div className={style.dropdownContent}>
                            <ul>
                                <li>Donjon & Dragon</li>
                                <li><Link to = "/Pokémon">Pokémon</Link></li>
                                <li>Bladerunner</li>
                                <li>Fallout</li>
                                <li>Final Fantasy XIV</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.dropdown}>
                        <li><Link to = "/outils">Outils</Link></li>
                        <div className={style.dropdownContent}>
                            <ul>
                                <li><Link to = "/lanceurdes">Lanceur de dés</Link></li>
                                <li><Link to = "/creationpersonnage">Création personnage D&D5</Link></li>
                            </ul>
                        </div>
                    </div>
                    <li><Link to = "/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;