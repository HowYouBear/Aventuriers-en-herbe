import React from 'react';
import styles from './Univers.module.scss'

const Univers = () => {
    return (
        <div className={styles.frameUnivers}>
            <h1>Les Univers de jeux de rôle</h1>
            <p>Chaque univers de JDR possède ses propres règles, sa mythologie unique, et son atmosphère distincte. Que vous soyez attiré par les intrigues médiévales-fantastiques de Donjons et Dragons, les horreurs lovecraftiennes de Call of Cthulhu, l'exploration spatiale de Starfinder, ou la dystopie cyberpunk de Cyberpunk 2020, il existe un univers de jeu de rôle qui saura satisfaire vos désirs d'aventure et d'exploration.</p>
            <br />
            <p>Les joueurs, guidés par un maître du jeu, explorent ces mondes fantastiques en interagissant avec d'autres personnages, en résolvant des énigmes, en combattant des créatures maléfiques, en négociant des alliances politiques, ou en vivant des aventures épiques. Leur imagination est leur principal outil, et leur capacité à prendre des décisions stratégiques façonne le déroulement de l'histoire.</p>
            <br />
            <p>En franchissant les portes de ces mondes imaginaires, les joueurs peuvent se perdre dans des histoires épiques, créer des souvenirs inoubliables et développer des compétences de résolution de problèmes, de narration et de coopération. Les jeux de rôle transcendent les limites du réel pour offrir des expériences uniques, où chaque dé, chaque choix et chaque mot prononcé contribuent à forger des récits extraordinaires. Préparez-vous à plonger dans l'infini des univers de jeux de rôle, où l'aventure n'attend que vous.</p>
            <br />
            <h2>Donjons et Dragons</h2>
            <p>Donjons et Dragons, abrégé D&D, est le pionnier des jeux de rôle. Plongeant les joueurs dans des mondes médiévaux-fantastiques peuplés de chevaliers, de magiciens, de dragons et de créatures mythiques, D&D offre une expérience classique de JDR. Les aventuriers entreprennent des quêtes héroïques, résolvent des énigmes anciennes, et se battent contre des ennemis redoutables. L'accent est mis sur la créativité, l'improvisation et la coopération pour surmonter les défis.</p>
            {/* <Link to = "/universDnD">Donjons et Dragons</Link> */}
            <h2>PathFinder</h2>
            <p>Pathfinder est un univers de jeu de rôle qui s'inspire grandement de D&D. Cependant, il se démarque par sa profondeur et sa complexité. Les joueurs explorent un monde fantastique riche en détails, avec une multitude de races, de classes de personnages et de règles avancées. L'accent est mis sur la personnalisation, permettant aux joueurs de créer des personnages uniques et de vivre des aventures épiques dans un cadre de haute fantasy.</p>
            {/* <Link to = "/universpathfinder">PathFinder</Link> */}
            <h2>Blade Runner</h2>
            <p>Inspiré par le film culte de science-fiction, l'univers de Blade Runner offre une plongée dans un futur dystopique où les humains cohabitent avec des répliques, des androïdes presque indiscernables. Les joueurs incarnent des enquêteurs, des chasseurs de primes ou des fugitifs, naviguant dans les intrigues complexes d'une société corrompue. L'ambiance cyberpunk, la technologie avancée et les dilemmes moraux sont au cœur de cette expérience de jeu immersive.</p>
            {/* <Link to = "/universbladerunner">Blade Runner</Link> */}
            <h2>Fallout</h2>
            <p>Le monde post-apocalyptique de Fallout, ravagé par une guerre nucléaire, est le terrain de jeu des joueurs. Ils affrontent des radiations, des créatures mutantes et des factions en conflit pour survivre. Les choix moraux ont un impact significatif sur l'histoire, et les joueurs explorent des terres désolées remplies de mystères, d'histoires d'horreur et d'humour noir.</p>
            {/* <Link to = "/universfallout">Fallout</Link> */}
            <h2>Final Fantasy XIV</h2>
            <p>Cet univers transporte les joueurs dans le monde de la fantasy, d'Éorzéa. Ils incarnent des aventuriers épiques, maîtrisant des classes variées, explorant des donjons dangereux, combattant des primordiaux titanesques, et contribuant à la reconstruction de leur royaume après des catastrophes cataclysmiques. L'accent est mis sur la collaboration avec d'autres joueurs pour relever des défis épiques et vivre des récits épiques dans un monde vivant et en constante évolution.</p>
            {/* <Link to = "/universffxiv">Final Fantasy XIV</Link> */}
            <br />
            <p>Chacun de ces univers de jeu de rôle offre une expérience unique, des défis spécifiques et des opportunités pour les joueurs de vivre des aventures inoubliables dans des mondes extraordinaires. Que ce soit en explorant des donjons, en poursuivant des androïdes, en survivant à l'apocalypse nucléaire, ou en combattant des primordiaux, les univers de JDR ouvrent la porte à l'imagination et à l'aventure.</p>
        </div>
    );
};

export default Univers;