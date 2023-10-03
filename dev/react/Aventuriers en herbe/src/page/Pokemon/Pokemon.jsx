import React from 'react';
import style from './Pokemon.module.scss';
import logoPokemon from '../../Ressources/LogoPokemon.png';
import backgroundImage from '../../Ressources/Pikachu.png';
import bandepokemon from '../../Ressources/BandePokemon.png'
import typepokemon from '../../Ressources/TypePokemon.png'

const Pokemon = () => {
  return (
    <div className={style.Pokemon}>
        <img src={logoPokemon} alt="LogoPokemon" className={style.PokemonImage}/>
        

      <h2 className={style.SectionTitle}>Choisissez votre Pokémon</h2>
      <p className={style.Paragraph}>
        Une des premières choses à faire dans votre aventure sera de choisir votre premier partenaire Pokémon. Chaque jeu vous offrira un choix d’espèces de Pokémon différentes, mais dans la majorité des cas vous aurez à choisir entre un Pokémon de type Feu, un Pokémon de type Plante et un Pokémon de type Eau. Votre choix pourra faciliter ou compliquer le début du jeu, mais très vite, vous aurez un éventail de Pokémon de tous types à votre disposition. N’hésitez donc pas à adopter celui que vous trouvez le plus mignon, et partez à l'aventure ! Sachez toutefois que ces trois espèces de Pokémon sont introuvables à l’état sauvage, et que vous devrez donc les échanger si vous les voulez toutes. Vous en apprendrez davantage sur l’échange de Pokémon plus loin dans cet article.
      </p>

      <img src={bandepokemon} alt="ChoixPokemon" />

      <h2 className={style.SectionTitle}>Qu'est-ce qu’un type de Pokémon ?</h2>
      <p className={style.Paragraph}>
        Chaque Pokémon possède un ou deux types parmi un choix de 18 : Normal, Feu, Eau, Plante, Électrik, Glace, Combat, Poison, Sol, Vol, Psy, Insecte, Roche, Spectre, Dragon, Ténèbres, Acier ou Fée. Chaque type a des avantages et des faiblesses contre d’autres types. Par exemple, les Pokémon Feu ont un avantage sur les Pokémon de type Plante, mais ils sont faibles contre les Pokémon de type Eau. Un des défis auxquels vous devrez faire face dans votre aventure sera de vous construire une équipe équilibrée, capable d’affronter tous les adversaires.
      </p>

      <img src={typepokemon} alt="LestypePokemon" />

      <h2 className={style.SectionTitle}>Explorez le monde autour de vous</h2>
      <p className={style.Paragraph}>
        Quand vous aurez choisi votre partenaire, vous pourrez vous plonger dans le jeu et entamer votre aventure ! Mais avant de commencer à combattre et attraper des Pokémon, voici quelques bases de JDR que vous devrez garder à l’esprit. Le plus important est de sauvegarder votre partie aussi souvent que possible. Ainsi, si vous vous faites battre dans une Arène ou que vous utilisez accidentellement votre unique Master Ball sur un pauvre Rattata de niveau 4, vous pourrez faire machine arrière et effacer votre erreur.
      </p>

      <h2 className={style.SectionTitle}>Combattez des Pokémon sauvages</h2>
      <p className={style.Paragraph}>
      Au cours de votre aventure, vous allez inévitablement rencontrer des Pokémon sauvages et devoir les combattre. En général, cela arrivera dans les hautes herbes, dans les grottes, ou lorsque vous nagez. Pendant un combat, à chaque tour, les participants choisissent leur prochaine action, puis celle-ci se déclenche. Vous pouvez choisir d’utiliser une capacité ou un objet, de changer votre Pokémon actif pour un autre, ou encore de fuir le combat.
La stat de Vitesse des Pokémon au combat définit presque toujours quel Pokémon attaque en premier, à moins qu’une capacité prioritaire ne prenne le pas sur les autres. Les actions de votre personnage, comme utiliser un objet ou changer de Pokémon actif, auront toujours lieu avant que l'autre Pokémon n'attaque.
Pendant les combats contre des Pokémon sauvages, il vous faudra choisir entre battre votre adversaire et l'attraper. Dans les deux cas, vous devrez abaisser ses PV en l’attaquant, tout en vous assurant que ceux de vos Pokémon ne diminuent pas trop.
      </p>

      <img src={backgroundImage} alt="Pikachu" />

      <h2 className={style.SectionTitle}>Capacités de statut et altérations de statut</h2>
      <p className={style.Paragraph}>
      En combat, ne sous-estimez pas les capacités de statut. Celles-ci n’infligent pas de dégâts directs, mais affectent les performances d’un Pokémon pendant le combat. Elles vous permettront notamment d’augmenter l’Attaque de votre Pokémon ou de baisser la Vitesse de l'adversaire.
Les Pokémon peuvent aussi souffrir d’altérations de statut aux effets ravageurs. Par exemple, un Pokémon paralysé verra sa Vitesse baisser et aura une chance de ne pas pouvoir agir à chaque tour. Un Pokémon endormi ne pourra utiliser presque aucune capacité pendant plusieurs tours. D'autres altérations de statut pourront causer des dégâts continus à chaque tour, comme le Poison ou la Brûlure.
À noter que votre adversaire pourra également infliger ces altérations de statut à votre Pokémon, donc soyez prêt à le soigner. Heureusement, de nombreux objets de soin existent pour cela.
      </p>

      <h2 className={style.SectionTitle}>Attrapez des Pokémon sauvages</h2>
      <p className={style.Paragraph}>
      Pour attraper un Pokémon sauvage, vous devrez faire le plein de Poké Balls (ou d’objets similaires tels que des Super Balls ou des Hyper Balls) avant le début du combat. Au lieu de demander à votre Pokémon d’utiliser une capacité, vous pouvez choisir de lancer une Poké Ball sur un Pokémon sauvage. Toutefois, si vous le faites dès le début du combat, les chances que le Pokémon y reste enfermé sont très minces. En revanche, elles augmenteront si vous affaiblissez le Pokémon au préalable.
Utilisez des capacités pour abaisser les PV d’un Pokémon sauvage. Plus ils sont proches de 0, plus il sera facile de l’attraper. La capacité Faux-Chage est extrêmement précieuse pour y parvenir, car elle laissera toujours au moins 1 PV à sa cible. Pour augmenter davantage vos chances, vous pouvez également infliger une altération de statut au Pokémon sauvage. Par exemple, s’il est endormi, il aura davantage de chances de rester dans la Poké Ball.
Pour attraper un Pokémon sauvage, vous devrez faire le plein de Poké Balls (ou d’objets similaires tels que des Super Balls ou des Hyper Balls) avant le début du combat. Au lieu de demander à votre Pokémon d’utiliser une capacité, vous pouvez choisir de lancer une Poké Ball sur un Pokémon sauvage. Toutefois, si vous le faites dès le début du combat, les chances que le Pokémon y reste enfermé sont très minces. En revanche, elles augmenteront si vous affaiblissez le Pokémon au préalable.
Utilisez des capacités pour abaisser les PV d’un Pokémon sauvage. Plus ils sont proches de 0, plus il sera facile de l’attraper. La capacité Faux-Chage est extrêmement précieuse pour y parvenir, car elle laissera toujours au moins 1 PV à sa cible. Pour augmenter davantage vos chances, vous pouvez également infliger une altération de statut au Pokémon sauvage. Par exemple, s’il est endormi, il aura davantage de chances de rester dans la Poké Ball.
      </p>

      <h2 className={style.SectionTitle}>Entrainer un Pokémon</h2>
      <p className={style.Paragraph}>
      Quand un Pokémon se bat, il gagne des Points Exp. (points d’expérience). Après en avoir accumulé suffisamment, le Pokémon montera de niveau, et ainsi de suite jusqu’à atteindre le niveau 100. Quand un Pokémon monte de niveau, il peut voir ses stats augmenter et apprend parfois une nouvelle capacité.
      Attention : un Pokémon ne peut connaître que quatre capacités à la fois. S’il tente d’en apprendre une nouvelle alors qu’il a déjà atteint ce maximum, il devra en oublier une ou abandonner la nouvelle capacité. Réfléchissez bien, car il peut être difficile d’enseigner à nouveau une capacité oubliée !
Les Pokémon peuvent également apprendre des capacités sans monter de niveau. Certains PNJ, les Maîtres des Capacités, peuvent enseigner des capacités aux Pokémon, dont certaines qu’ils ne peuvent pas apprendre autrement. Enfin, il existe des objets spéciaux, les CT (Capsules Techniques), qui peuvent enseigner des capacités à un Pokémon.
Quand vous choisissez quelles capacités enseigner à votre Pokémon, essayez de maintenir un équilibre entre différents types. Vous pourriez être tenté d’enseigner uniquement des capacités Eau à votre Pokémon de type Eau, mais un choix étendu de capacités lui sera utile pour faire face à toutes sortes d’adversaires.
     </p>

     <h2 className={style.SectionTitle}>Evolution des Pokémon</h2>
      <p className={style.Paragraph}>
      De nombreux Pokémon (mais pas tous) peuvent évoluer. Il s’agit d’un processus grâce auquel un Pokémon change d’espèce. En général, un Pokémon est plus redoutable après son évolution, et peut parfois apprendre des capacités plus puissantes. Dans certains cas, il peut aussi changer de type. Par exemple, Flamiaou, type Feu, évolue en Matoufeu, également de type Feu. Toutefois, Matoufeu évolue à son tour en Félinferno, qui est à la fois de type Feu et Ténèbres. Osselait est de type Sol, mais à Alola, il peut évoluer en Ossatueur d'Alola, qui est de type Feu et Spectre.
La plupart des Pokémon n’ont qu’une seule évolution possible, mais certains ont davantage de choix. L’un des plus célèbres des Pokémon, Évoli, de type Normal, peut évoluer en huit Pokémon uniques, chacun de type différent !
Il existe beaucoup de façons de faire évoluer vos Pokémon. La plus fréquente est simplement de les faire monter de niveau : ainsi, quand un certain Pokémon atteint un niveau prédéfini, l’évolution se produit automatiquement. Parfois, il faut quelque chose en plus : le Pokémon doit par exemple tenir un certain objet ou être particulièrement attaché à son Dresseur. D’autres fois, c'est l’heure de la journée, le sexe du Pokémon ou même l’endroit où le joueur se trouve quand le Pokémon monte de niveau qui détermine l’évolution de ce dernier.
Une autre méthode d’évolution requiert un objet spécifique, comme une Pierre Foudre ou une Pierre Soleil. Certains Pokémon n’évolueront que s’ils sont échangés avec un autre joueur, et certains seulement s’ils sont échangés tout en tenant un objet particulier. Comme vous le voyez, il existe énormément de façons d’évoluer !
Il est aussi possible d’empêcher un Pokémon d’évoluer. Pendant l’animation d’évolution, il vous suffit d’appuyer sur le bouton B pour annuler le processus. Vous pouvez aussi donner à votre Pokémon un objet appelé la Pierre Stase, qui l’empêche d’évoluer tant qu’il la tient.
     </p>

     <h2 className={style.SectionTitle}>Combats des Dresseurs</h2>
      <p className={style.Paragraph}>
      En explorant chaque région, vous rencontrerez beaucoup d’autres Dresseurs Pokémon. Traversez leur champ de vision, et ils vous défieront en combat. Tout comme vous, ces Dresseurs peuvent avoir jusqu’à six Pokémon dans leur équipe, et plus vous avancerez dans le jeu, plus leurs partenaires seront susceptibles d’être puissants.
Certains Dresseurs pivoteront sur eux-mêmes, ce qui vous permettra, si vous le souhaitez, de passer discrètement dans leur dos sans les combattre. Mais n’en faites pas une habitude : plus vous affronterez de Dresseurs, plus vous aurez l’occasion d’élaborer de nouvelles stratégies et de vous améliorer. Qui plus est, chaque combat remporté vous récompensera avec de précieux Points Exp. pour vos Pokémon et de l’argent pour faire le plein d’objets utiles. Il serait dommage que vous vous retrouviez les mains vides et que votre équipe ne soit plus à la hauteur parce que vous avez évité trop de combats !
     </p>

     <h2 className={style.SectionTitle}>Affrontez les Champions d’Arène</h2>
      <p className={style.Paragraph}>
      Dans la plupart des jeux Pokémon, vous devrez affronter de puissants Champions d’Arène. Vous pourrez trouver ces adversaires chevronnés dans les Arènes Pokémon réparties à travers les villes de chaque région. Les Champions d’Arène se spécialisent souvent dans un certain type de Pokémon. Vos Pokémon devront donc être non seulement suffisamment forts, mais également capables de contrer de nombreux types différents. Une équipe entièrement constituée de Pokémon de type Combat ne vous serait par exemple pas d’une grande utilité face à un Champion d’Arène qui privilégie le type Psy.
Pour avoir le droit d’affronter un Champion d’Arène, vous devrez généralement commencer par battre les Dresseurs de son Arène. Vous aurez la possibilité de soigner vos Pokémon entre chaque combat, et même de quitter l’Arène en cours de route sans que cela annule les combats déjà remportés. Mais restez sur vos gardes, car il vous faudra parfois résoudre de petits casse-têtes. Vous devrez ainsi déjouer de nombreux pièges tels que des murs invisibles, des téléporteurs ou de fragiles plates-formes en glace avant de pouvoir affronter le Champion.
Une fois le Champion d’Arène vaincu, vous recevrez là encore de l’argent et des Points Exp., mais également une CT qui vous permettra d’enseigner une nouvelle capacité à vos Pokémon. En règle générale, il s’agit d’une capacité utilisée par un des Pokémon du Champion. Le Champion vous donnera également un Badge pour homologuer votre victoire. Ces Badges ne font pas simplement office de médailles, mais font aussi en sorte que les Pokémon échangés au-delà d’un certain niveau vous obéissent en combat.
Alola, la région tropicale de Pokémon Ultra-Soleil, Pokémon Ultra-Lune, Pokémon Soleil et Pokémon Lune n’a pas les Arènes et Champions traditionnels. À la place, ces jeux proposent une série d’Épreuves imposées par des Capitaines. Ces Épreuves peuvent comprendre des combats de Pokémon, ou bien d’autres sortes de tâches à remplir. De plus, l’Épreuve ne sera remportée qu’une fois que vous aurez affronté un puissant Pokémon Dominant.
Remportez suffisamment d’Épreuves sur une île de la région d’Alola, et vous serez prêt pour la Grande Épreuve de cette île, qui consiste à combattre le Doyen et son équipe de Pokémon.
En règle générale, obtenir tous les Badges d’Arène ou terminer toutes les Épreuves vous permettra d’affronter le Conseil 4, qui réunit les meilleurs Dresseurs Pokémon de la région. Venez-en à bout, et vous aurez bien mérité une récompense unique.
      </p>

      <h2 className={style.SectionTitle}>Affrontez les Champions d’Arène</h2>
      <p className={style.Paragraph}>
      Très tôt dans votre aventure, vous vous verrez confier un Pokédex, un instrument qui enregistrera tous les Pokémon que vous verrez ou attraperez. Gagner tous les Badges d’Arène pour affronter le Conseil 4 est le but principal du jeu, mais remplir son Pokédex est un objectif secondaire particulièrement prenant. Compléter un Pokédex implique d’attraper au moins un membre de chaque espèce de Pokémon, à l’exception des Pokémon fabuleux qui ne sont disponibles qu’à l’occasion d’évènements spéciaux.
Vous ne parviendrez certainement pas à remplir votre Pokédex avant la fin de l’histoire du jeu, mais même une fois l’aventure principale terminée, vous pourrez continuer à explorer la région à la recherche des Pokémon qui vous ont échappé. En plus des nombreux Pokémon que vous pouvez obtenir via capture ou évolution, vous devrez également traquer de rares Pokémon légendaires particulièrement difficiles à attraper si vous souhaitez remplir votre Pokédex. Échanger des Pokémon avec d’autres joueurs est également une bonne façon de compléter votre collection.
Outre un sentiment de fierté, remplir votre Pokédex vous donnera généralement une récompense d’une grande valeur, comme le Charme Ovale, qui aide à obtenir des Œufs de Pokémon, ou le Charme Chroma, qui augmente les chances de rencontrer de rares Pokémon chromatiques.
      </p> 

    </div>
  );
};

export default Pokemon;
