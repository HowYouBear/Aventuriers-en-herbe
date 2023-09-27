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
                    <div className={style.dropdown}>
                        <li>Univers</li>
                        <div className={style.dropdownContent}>
                            <ul>
                                <li>Donjon & Dragon</li>
                                <li>Pathfinder</li>
                                <li>Bladerunner</li>
                                <li>Fallout</li>
                                <li>Final Fantasy XIV</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.dropdown}>
                        <li>Outils</li>
                        <div className={style.dropdownContent}>
                            <ul>
                                <li>Lanceur de dé</li>
                                <li>Création personnage D&D5</li>
                            </ul>
                        </div>
                    </div>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;