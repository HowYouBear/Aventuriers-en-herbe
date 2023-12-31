import React from 'react';
import style from './Fallout.module.scss'
import Logo from '../../Ressources/LogoFallout1.png'
import imgFallout1 from '../../Ressources/Fallout1.png'
import imgFallout2 from '../../Ressources/Fallout2.avif'
import imgFallout3 from '../../Ressources/Fallout3.jpg'

const Fallout = () => {
    return (
        <div className={style.frameFallout}>
            <img src={Logo} alt="Logo Fallout" />
            <h2>L'Apocalypse Atomique : Un Monde Né des Cendres</h2>
            <p>La Terre de Fallout n'est pas celle que nous connaissons. Suite à une guerre nucléaire dévastatrice entre les États-Unis et la Chine, le monde a été réduit à un désert irradié, parsemé de villes en ruines et de terres désolées. Le ciel est souvent couvert de nuages toxiques, et les ressources, comme l'eau propre et la nourriture, sont rares. Dans ce paysage, chaque jour est une lutte pour la survie.</p>
            <h2>Abri et Survie : Les Vestiges d'un Ancien Monde</h2>
            <p>Avant la guerre, de vastes abris souterrains, connus sous le nom d'Abri (Vault en anglais), ont été construits pour protéger une fraction de la population. Ces abris, censés être des refuges, ont souvent servi d'expériences sociologiques par la mystérieuse compagnie Vault-Tec. Des années ou des décennies après l'explosion, les résidents de ces abris ont émergé pour découvrir le nouveau monde sauvage et impitoyable.</p>
            <img src={imgFallout1} alt="Image Fallout" />
            <h2>Des Factions, des Gangs et la Lutte pour le Pouvoir</h2>
            <p>Dans le désert, diverses factions tentent de restaurer l'ordre, ou du moins leur version de l'ordre. Que ce soit la Confrérie de l'Acier, avec sa technologie avancée, la République de Nouvelle Californie, essayant d'établir un nouveau gouvernement, ou les nombreux gangs et tribus qui règnent sur des territoires, les joueurs devront choisir leurs alliés et leurs ennemis avec soin.</p>
            <h2>Mutants, Monstres et Machines : La Faune du Nouveau Monde</h2>
            <p>L'irradiation a transformé la faune et la flore, créant des créatures mutantes comme les goules, les super mutants et les créatures terrifiantes de la région. Les joueurs doivent également être prudents avec les robots, qui, malgré leur programmation obsolète, patrouillent toujours les terres, souvent perçus comme des menaces.</p>
            <img src={imgFallout2} alt="Image Fallout" />
            <h2>La Technologie et ses Séquelles : De l'Espoir à la Destruction</h2>
            <p>Le monde de Fallout est un mélange de technologie ancienne et nouvelle. Des armes à énergie, des armures assistées et des gadgets de l'ère pré-guerre côtoient des innovations post-apocalyptiques. Mais la technologie n'est pas toujours une bénédiction ; elle est souvent à l'origine des plus grands dangers du monde de Fallout.</p>
            <img src={imgFallout3} alt="Image Fallout" />
            <h2>Conclusion :</h2>
            <p>Fallout est un univers de contrastes, où la beauté peut être trouvée dans les endroits les plus improbables, et où les choix moraux ne sont jamais simples. C'est un terrain de jeu pour des histoires de survie, de sacrifice, d'espoir et de désespoir. Dans cet environnement, les joueurs peuvent être les héros qui reconstruisent le monde, ou les opportunistes qui profitent de ses ruines.</p>

        </div>
    );
};

export default Fallout;