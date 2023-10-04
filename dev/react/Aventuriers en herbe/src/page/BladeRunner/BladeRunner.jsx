import React from 'react';
import style from './Bladerunner.module.scss'
import LogoBladerunner from '../../Ressources/LogoBlade.png'
import imgBladerunner1 from '../../Ressources/BladeRunner1.jpg'
import imgBladerunner2 from '../../Ressources/BladeRunner2.jpg'
import imgBladerunner3 from '../../Ressources/BladeRunner3.jpg'

const BladeRunner = () => {
    return (
        <div className={style.frameBladerunner}>
            <img src={LogoBladerunner} alt="Logo Bladerunner" className={style.logo} />
            <h2>Neo-Los Angeles : Une Mégapole du Futur</h2>
            <p>Dans le monde de Blade Runner, la Terre est transformée. Les effets du changement climatique, de la surpopulation et de la technologie avancée ont créé des cités tentaculaires où les néons brillent à travers une pluie incessante. Los Angeles est un labyrinthe vertical d'immenses gratte-ciels, de marchés surpeuplés et de ruelles sombres. C'est un endroit où la technologie et la décadence se côtoient à chaque coin de rue.</p>       
            <img src={imgBladerunner1} alt="Image Bladerunner" />
            <h2>Réplicants : Plus qu'une Simple Machine</h2>        
            <p>Les réplicants sont des êtres bio-ingénierie, presque indiscernables des humains. Créés pour servir, que ce soit dans les colonies hors-monde, les guerres, ou pour des tâches plus domestiques, ils possèdent force, agilité, et parfois même des émotions. Cependant, leur durée de vie est limitée, et leur existence soulève d'importants dilemmes éthiques. Sont-ils simplement des outils, ou ont-ils des droits comme tout autre être sensible ?</p>           
            <h2>Blade Runners : Entre Chasseurs et Gardiens</h2>      
            <p>Les Blade Runners sont des agents spéciaux, formés pour traquer et « retirer » les réplicants qui se sont échappés et se cachent dans la population humaine. Dotés d'équipements de pointe et d'une formation spécifique, leur rôle est essentiel pour maintenir un équilibre précaire. Cependant, chaque mission les amène à se questionner sur la nature de l'humanité, et s'ils sont du bon côté de la morale.</p>             
            <h2>Des Enigmes dans l'Ombre : Les Corporations et Conspirations</h2>  
            <p>Les grandes corporations, en particulier la Tyrell Corporation, détiennent un pouvoir immense. Elles façonnent la société, dictent les tendances technologiques et jouent souvent à la divinité. Dans cet univers, les complots abondent. Les joueurs peuvent être entraînés dans des intrigues corporatives, où la vérité est aussi insaisissable que les lumières de la ville à travers la brume.</p>                 
            <img src={imgBladerunner2} alt="Image Bladerunner" />
            <h2>Qu'est-ce qui Nous Rend Humains ?</h2>     
            <p>Au cœur de Blade Runner se trouve une question persistante : qu'est-ce qui définit l'humanité ? Est-ce la biologie, les émotions, les souvenirs ? Les joueurs sont constamment confrontés à ces dilemmes, à travers leurs interactions avec les réplicants, leurs missions en tant que Blade Runners, et les mystères qu'ils cherchent à dévoiler.</p>              
            <img src={imgBladerunner3} alt="Image Bladerunner" />
            <h2>Conclusion :</h2>            
            <p>L'univers de Blade Runner est un miroir sombre de notre propre monde, une vision d'un avenir possible où la frontière entre l'homme et la machine est floue. C'est un jeu de nuances grises, où chaque décision, chaque action, a des conséquences profondes et souvent imprévues.</p>       
        </div>
    );
};

export default BladeRunner;