import React from 'react';
import style from './Pokemon.module.scss';
import logoPokemon from '../../Ressources/LogoPokemon.png';
import backgroundImage from '../../Ressources/Pikachu.png';
import bandepokemon from '../../Ressources/BandePokemon.png';
import typepokemon from '../../Ressources/TypePokemon.png';

const Pokemon = () => {
  return (
    <div className={style.Pokemon}>
        <img src={logoPokemon} alt="LogoPokemon" className={style.PokemonImage}/>
        

      <h2 className={style.SectionTitle}>Le Voyage d'un Dresseur : Des Origines à la Légende</h2>
      <p className={style.Paragraph}>
      Chaque grand dresseur commence par un choix simple : Bulbizarre, Salamèche ou Carapuce? Dans le vaste univers de Pokémon, chaque joueur incarne un dresseur, un individu passionné par la capture, l'élevage et le combat des créatures appelées Pokémon. Le voyage commence souvent dans une petite ville, avec un professeur Pokémon offrant votre premier compagnon. De là, les horizons s'étendent indéfiniment, avec la promesse de défis, de rencontres et de découvertes à chaque tournant.
      </p>

      <img src={bandepokemon} alt="ChoixPokemon" />

      <h2 className={style.SectionTitle}>Des Créatures Fantastiques : Les Pokémon</h2>
      <p className={style.Paragraph}>
      Des forêts luxuriantes aux profondeurs océaniques, en passant par les cieux et les cavernes souterraines, des créatures incroyables peuplent le monde. Il y a actuellement plus de 800 Pokémon différents, chacun avec sa propre combinaison de type, d'attaques et de caractéristiques. Certains sont doux et serviables, d'autres féroces et indomptables. Les légendes, comme le majestueux Arceus ou le mystérieux Mew, sont particulièrement rares et recherchées par les dresseurs.
      </p>

      <img src={typepokemon} alt="LestypePokemon" />

      <h2 className={style.SectionTitle}>Des Régions Pleines de Mystères</h2>
      <p className={style.Paragraph}>
      De Kanto à Galar, chaque région offre un paysage unique, une culture distincte et, bien sûr, une variété de Pokémon endémiques. Traverser ces régions, c'est comme parcourir différents pays, chacun avec ses propres défis. Que ce soit les marais de Sinnoh, les plages d'Alola ou les métropoles de Kalos, chaque région est un terrain de jeu et d'aventure pour les dresseurs.
       </p>

      <h2 className={style.SectionTitle}>Combats et Stratégies : L'Art de la Bataille Pokémon</h2>
      <p className={style.Paragraph}>
      Capturer des Pokémon est une chose, mais les maîtriser au combat en est une autre. Les arènes sont dispersées dans tout le pays, chacune dirigée par un champion d'arène spécialisé dans un type de Pokémon. Pour devenir le meilleur dresseur, il faut non seulement comprendre les forces et faiblesses de chaque type, mais aussi établir des stratégies, prévoir les mouvements de l'adversaire et synchroniser son équipe de Pokémon pour maximiser leur potentiel.
      </p>

      <img src={backgroundImage} alt="Pikachu" />

      <h2 className={style.SectionTitle}>L'Évolution : Plus qu'une Transformation</h2>
      <p className={style.Paragraph}>
      L'un des aspects les plus fascinants de l'univers Pokémon est le phénomène d'évolution. Au fur et à mesure que les Pokémon grandissent et s'entraînent, beaucoup ont la capacité de se transformer en une forme plus puissante. Cette évolution n'est pas seulement physique, elle symbolise le lien entre le Pokémon et son dresseur, un lien basé sur la confiance, le respect et l'amitié.
      </p>

      <h2 className={style.SectionTitle}>Conclusion</h2>
      <p className={style.Paragraph}>
      À travers les villes, les montagnes, les jungles et les océans, le monde de Pokémon est une célébration de la découverte, de l'amitié et de l'aventure. C'est un endroit où l'ingéniosité, la bravoure et la passion peuvent faire d'un dresseur ordinaire une véritable légende.
     </p>

      
    </div>
  );
};

export default Pokemon;
