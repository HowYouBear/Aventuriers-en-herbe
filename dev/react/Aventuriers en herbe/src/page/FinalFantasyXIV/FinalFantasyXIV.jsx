import React from 'react';
import style from './FinalFantasyXIV.module.scss';
import logoFFXIV from '../../Ressources/LogoFFXIV.png';
import backgroundImage from '../../Ressources/PersoFFXIV.png';
import bandeFFXIV from '../../Ressources/Perso2FFXIV.png';
import typeFFXIV from '../../Ressources/DragonFFXIV.png';

const FFXIV = () => {
  return (
    <div className={style.frameFFXIV}>
        <img src={logoFFXIV} alt="LogoFFXIV" className={style.FFXIV}/>
        

      <h2 className={style.SectionTitle}>Éorzéa : Un Continent aux Multiples Visages</h2>
      <p className={style.Paragraph}>
      Le monde de FFXIV est centré sur le continent d'Éorzéa, une terre vaste et variée, abritant tout, des déserts arides aux forêts luxuriantes, des montagnes majestueuses aux côtes sereines. Chaque région a ses propres cultures, créatures et dangers, demandant aux aventuriers d'être toujours sur leurs gardes et prêts à explorer.
      </p>

      <img src={bandeFFXIV} alt="ChoixFFXIV" />

      <h2 className={style.SectionTitle}>Les Héritiers des Septs Éclats : Des Bravoureux Défenseurs</h2>
      <p className={style.Paragraph}>
      Les joueurs incarnent des aventuriers qui, grâce à leur capacité unique d'interagir avec les cristaux d'Éorzéa, sont devenus les Héritiers des Septs Éclats. Ces héros ont la lourde tâche de défendre le continent contre de multiples menaces, qu'il s'agisse d'invasions impériales, de primals déchaînés ou de calamités anciennes.
      </p>

      <img src={typeFFXIV} alt="LestypeFFXIV" />

      <h2 className={style.SectionTitle}>Des Cités-États aux Allégeances Variées :</h2>
      <p className={style.Paragraph}>
      De Kanto à Galar, chaque région offre un paysage unique, une culture distincte et, bien sûr, une variété de Pokémon endémiques. Traverser ces régions, c'est comme parcourir différents pays, chacun avec ses propres défis. Que ce soit les marais de Sinnoh, les plages d'Alola ou les métropoles de Kalos, chaque région est un terrain de jeu et d'aventure pour les dresseurs.
       </p>

      <h2 className={style.SectionTitle}>Magie, Cristaux et Primals : Le Cœur Palpitant d'Éorzéa</h2>
      <p className={style.Paragraph}>
      La magie est omniprésente, alimentée par les cristaux éthérés qui parsèment la terre. Ces cristaux sont aussi la source de l'émergence des primals, des entités puissantes adorées comme des dieux par certaines factions. Les aventuriers doivent souvent affronter ces primals pour protéger Éorzéa de leur emprise.
      </p>

      <img src={backgroundImage} alt="FFXIV" />

      <h2 className={style.SectionTitle}>Des Intrigues Politiques aux Anciennes Menaces :</h2>
      <p className={style.Paragraph}>
      Si les dangers extérieurs sont nombreux, les intrigues internes le sont tout autant. Les cités-états rivalisent souvent pour le pouvoir et les ressources, et des factions secrètes opèrent dans l'ombre, avec leurs propres agendas. En outre, le passé ancien d'Éorzéa regorge de mystères et de menaces qui pourraient bien refaire surface.
      </p>

      <h2 className={style.SectionTitle}>Conclusion</h2>
      <p className={style.Paragraph}>
      Final Fantasy XIV est un univers riche en histoires, en conflits et en aventures. C'est un monde où les destins individuels se croisent, où les batailles épiques côtoient des moments intimes, et où chaque choix peut avoir des conséquences qui résonnent à travers le continent. Chaque session de jeu offre une chance de vivre une épopée digne des plus grandes sagas de Final Fantasy.
     </p>

      
    </div>
  );
};

export default FFXIV