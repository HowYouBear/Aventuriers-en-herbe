import React from 'react';
import styles from './Outils.module.scss'
import {Link} from "react-router-dom"
import Button from "../../component/Button/Button"


const Outils = () => {

    function scrollUp (){
        window.scroll(0,0)
    }

    return (
        <div className={styles.frameOutils}>
            <h1>La boite à outils des rôlistes</h1>
            <p>Quel que soit votre niveau d'expérience dans le monde des jeux de rôle, notre Boîte à Outils est votre alliée pour une expérience de jeu exceptionnelle. Conçue pour rendre vos aventures plus captivantes, plus conviviales et surtout plus amusantes, cette boîte renferme deux outils essentiels : la création de Fiche de Personnage et le Lanceur de Dés.</p>
            <h2>Création de personnage Donjons et Dragons</h2>
            <p>Préparez-vous à forger votre propre destin en créant un héros unique dans l'univers riche et fantastique de Donjons et Dragons 5ème Édition. Sur cette Fiche de Personnage, personnalisez chaque détail de votre aventurier, du nom à la race, en passant par la classe, les compétences, l'équipement, l'histoire et bien plus encore. Que vous aspiriez à incarner un magicien érudit, un guerrier courageux ou un roublard rusé, cette fiche vous guidera pour créer un héros prêt à relever tous les défis de D&D. Plongez-vous dans l'univers de Donjons et Dragons, et que l'aventure commence !</p>
            <Link to = "/creationpersonnage" onClick={scrollUp}><Button>Création de personnage Donjons et Dragons</Button></Link>
            <h2>Lanceur de dès</h2>
            <p>Les dés sont la quintessence du jeu de rôle, ajoutant une touche d'incertitude et d'excitation à chaque action. Notre Lanceur de Dés virtuel vous permet de lancer différents types de dés, du classique dé à six faces au redoutable dé à vingt faces. Vous pouvez ajuster le nombre de dés et le type de dé pour répondre aux besoins de votre aventure, que ce soit pour résoudre des combats, des énigmes, des tests de compétence ou pour tout moment crucial. Utilisez cet outil pour vivre des histoires inoubliables, des batailles épiques et des moments palpitants. Alors, plongez dans le monde des jeux de rôle et que l'aventure commence !</p>
            <Link to = "/lanceurdes" onClick={scrollUp}><Button>Lanceur de dès</Button></Link>
        </div>
    );
};

export default Outils;