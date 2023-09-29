import { Link } from 'react-router-dom';
import styles from './Accueil.module.scss'

function Accueil(){

function scrollUp (){
    window.scroll(0,0)
}

    return(
        <div className={styles.frameAccueil}>
            <h1>Bienvenue, Aventuriers en herbe !</h1>

            <p>Que vous soyez un maître du jeu chevronné ou un débutant curieux, notre site est votre compagnon idéal dans le monde du jeu de rôle. Plongez dans des récits épiques, incarnez des héros légendaires, et forgez des souvenirs inoubliables. Que l'aventure commence !</p>
        
            <div className={styles.texteIntroduction}>
                <h2>Introduction au Jeu de Rôle</h2>
                <p>Sur la première page, plongez dans les profondeurs du jeu de rôle. Découvrez ce qu'est le JdR, explorez ses racines et comprenez les règles fondamentales qui guident les aventuriers dans des récits épiques.</p>
                <button><Link to ="/introduction" onClick={scrollUp}>Aller à la page Introduction</Link></button>
            </div>

            <br />

            <div className={styles.texteUnivers}>
                <h2>Univers</h2>
                <p>Notre page Univers vous emmène à travers les multivers du jeu de rôle. Explorez des mondes fantastiques, des dystopies futuristes, des contrées médiévales, et bien plus encore. Choisissez votre terrain de jeu idéal et laissez votre imagination s'épanouir.</p>
                <button><Link to ="/univers" onClick={scrollUp}>Aller à la page Univers</Link></button>
            </div>

            <br />

            <div className={styles.texteCreation}>
                <h2>Création de personnage</h2>
                <p>Prêt à vous lancer dans une aventure inoubliable ? Notre page de Création de Personnage simplifie le processus. Remplissez facilement une feuille de personnage pour Donjons et Dragons, ou créez votre propre héros ou héroïne avec un système convivial.</p>
                <button><Link to = "/creationpersonnage" onClick={scrollUp}>Aller à la page Création de personnage</Link></button>
            </div>

            <br />
            
            <div className={styles.texteLanceur}>
                <h2>Lanceur de dés</h2>
                <p>Pas de jeu de rôle sans dés ! Notre page de Lanceurs de Dés virtuels garantit des lancers équitables pour prendre des décisions cruciales, résoudre des énigmes, et déterminer l'issue de vos quêtes.</p>
                <button><Link to ="/lanceurdes" onClick={scrollUp}>Aller à la page Lanceur de dés</Link></button>
            </div>
        </div>
    )
}

export default Accueil;