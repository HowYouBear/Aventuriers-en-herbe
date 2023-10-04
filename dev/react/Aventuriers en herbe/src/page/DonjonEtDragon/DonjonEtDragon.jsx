import React from 'react';
import style from './DonjonEtDragon.module.scss';
import logoDND from '../../Ressources/LogoDND.png';
import DragonDND from '../../Ressources/DragonDND.png'
import BandeDND from '../../Ressources/BandeDND.png'
import BandeDND2 from '../../Ressources/BandeDND2.png'



const DonjonEtDragon = () => {
  return (
    <div className={style.DonjonEtDragon}>
        <img src={logoDND} alt="LogoDND" />
        

      <h2 className={style.SectionTitle}>Un Monde d'Aventure et de Fantaisie</h2>
      <p className={style.Paragraph}>
      Au cœur de la culture populaire, Donjons et Dragons (D&D) s'est imposé comme le jeu de rôle par excellence, modelant et reflétant un univers fantastique aux dimensions quasi infinies. Lorsqu'on évoque D&D, on imagine de vastes continents à explorer, depuis les forêts épaisses de la Sylve Ancienne aux montagnes escarpées des Pics du Tonnerre. C'est un monde où chaque coin de rue dans une ville médiévale pourrait cacher un secret et où chaque grotte pourrait être l'entrée d'un donjon profond et sombre, rempli de trésors... et de dangers.
       </p>

      <img src={DragonDND} alt="Dragon" />

      <h2 className={style.SectionTitle}>Des Races, des Classes et des Destinées</h2>
      <p className={style.Paragraph}>
      La diversité est l'une des plus grandes forces de D&D. Imaginez des villes cosmopolites où des nains barbus, des elfes hautains, des orques robustes et des humains aux multiples cultures coexistent, marchandent et parfois se querellent. La race que vous choisissez pour votre personnage n'est pas seulement esthétique; elle définit son histoire, ses préjugés, ses alliés et ses ennemis. Mais ce n'est que le début. Votre personnage peut également appartenir à une classe, comme un paladin intrépide qui jure de protéger les innocents, un druide qui tire sa puissance de la nature elle-même, ou un barde qui utilise la musique pour charmer et tromper. Chaque choix ouvre des possibilités narratives, transformant chaque session en une tapestry riche de possibilités.
      </p>

      <img src={BandeDND} alt="Race DND" />

      <h2 className={style.SectionTitle}>De Puissants Artefacts et de Terribles Ennemis</h2>
      <p className={style.Paragraph}>
      Au cœur de nombreuses quêtes se trouve la promesse de richesses incalculables et de puissants artefacts. Que ce soit Excalibur, une épée légendaire, ou la Pierre Philosophale permettant la transmutation de matériaux, ces objets convoités sont souvent le moteur des aventures. Mais un trésor n'est précieux que s'il est protégé. Dragons crachant du feu, nécromanciens avec des armées de morts-vivants, ou même des dieux anciens oubliés, les ennemis dans D&D sont aussi variés que redoutables.
       </p>

      <h2 className={style.SectionTitle}>La Magie, Essence de l'Univers</h2>
      <p className={style.Paragraph}>
      La magie est le tissu qui relie tout dans l'univers de D&D. Elle est à la fois une bénédiction et une malédiction, utilisée pour soigner ou pour blesser, pour créer ou détruire. Les livres de sorts sont autant recherchés que les armes, car ils contiennent le pouvoir de changer le monde. Des runes anciennes aux incantations complexes, la maîtrise de la magie est souvent le chemin vers la grandeur. Mais, elle peut aussi être une voie vers la damnation si elle est utilisée imprudemment.
     </p>

      <img src={BandeDND2} alt="Race DND" />

      <h2 className={style.SectionTitle}>La Création d'Histoires Épiques</h2>
      <p className={style.Paragraph}>
      Au-delà des dés et des règles, D&D est avant tout un outil de narration. Chaque partie est une histoire en cours, avec son lot de héros, de méchants, de drames et de victoires. Le maître du jeu est à la fois narrateur, metteur en scène et adversaire. Il crée le monde, pose les défis, mais c'est aux joueurs de décider comment y répondre. Ensemble, ils tissent une histoire qui, bien que née de l'imagination, peut être aussi réelle et émotionnelle que n'importe quelle expérience vécue.
    </p>

      <h2 className={style.SectionTitle}>Conclusion</h2>
      <p className={style.Paragraph}>
      L'univers de Donjons et Dragons est une invitation à l'aventure. C'est une porte ouverte sur des mondes inconnus, prêts à être explorés, conquis, sauvés ou même détruits. Chaque session est une page blanche, et c'est à vous de décider ce qui y sera écrit.
     </p>

    </div>
  );
};

export default DonjonEtDragon;
