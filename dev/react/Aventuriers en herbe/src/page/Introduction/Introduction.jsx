import styles from './Introduction.module.scss'

function Introduction(){
    return(
        <div className={styles.introduction}>
            <h1 className={styles.titre}> Introduction au Jeu de Rôle </h1>
            <h2>Etape 1 - C'est quoi le jeu de rôle ?</h2>
            <p>Le jeu de rôle, c'est bien plus qu'un simple passe-temps : c'est une aventure dans l'imaginaire, une exploration de mondes inconnus et une expérience sociale unique. À la croisée entre le théâtre improvisé et le jeu de société, il repose sur la créativité, la narration collaborative et la construction de personnages. Dans le jeu de rôle, vous ne jouez pas seulement un personnage, vous le devenez, adoptant ses pensées, ses réactions et son destin. C'est un moyen extraordinaire de s'évader de la réalité, de développer ses compétences d'acteur, de scénariste et de résolution de problèmes, tout en tissant des liens profonds avec vos compagnons de jeu.</p>
            <h2>Etape 2 - Comment se déroule une partie ?</h2>
            <p>Une partie de jeu de rôle se déroule généralement autour d'une table, où un maître de jeu (MJ) guide les joueurs à travers une histoire qu'il a imaginée ou adaptée d'un scénario préexistant. Les joueurs, souvent entre 3 et 6, incarnent des personnages fictifs avec des caractéristiques, des compétences et des motivations uniques. Le MJ décrit l'univers, les situations, et les personnages non joueurs, tandis que les joueurs réagissent en prenant des décisions et en décrivant les actions de leurs personnages.
                <br /><br />
                Pour déterminer l'issue des actions, on utilise généralement un système de règles, tel qu'un jet de dés. Les dés ajoutent une part d'incertitude et de surprise, ce qui rend chaque partie unique. L'histoire se développe en fonction des choix des joueurs, et la progression dépend de leur ingéniosité, de leurs décisions morales et de leurs interactions avec les autres personnages.
            </p>
            <h2>Etape 3 - Avec quel jeu commencer ?</h2>
            <p>Il existe une multitude de jeux de rôle parmi lesquels choisir, chacun offrant des univers, des règles et des styles de jeu différents. Pour les débutants, il est souvent recommandé de commencer par des jeux plus simples, comme "Donjons et Dragons", qui est un jeu de rôle médiéval-fantastique très populaire. D'autres jeux, comme "L'Appel de Cthulhu", plongent les joueurs dans des univers d'horreur lovecraftienne, tandis que "Shadowrun" mélange cyberpunk et magie. Le choix du jeu dépendra de vos préférences en matière de genre, d'histoire et de complexité.</p>
            <h2>Etape 4 - Ou trouver des gens avec qui jouer ?</h2>
            <p>Trouver un groupe de jeu de rôle peut sembler intimidant, mais il existe de nombreuses options pour rencontrer des joueurs enthousiastes. Vous pouvez commencer par rechercher des groupes locaux ou des magasins spécialisés qui organisent des soirées de jeu de rôle. De nombreux sites web et forums dédiés aux jeux de rôle sont également d'excellents moyens pour trouver des joueurs en ligne ou locaux. Les réseaux sociaux et les applications dédiées sont de plus en plus utilisés pour former des groupes de jeu virtuels. N'hésitez pas à rejoindre des communautés en ligne pour rencontrer des gens partageant la même passion.</p>
            <h2>Etape bonus - S'amuser !</h2>
            <p>Le jeu de rôle, c'est avant tout du plaisir ! Laissez libre cours à votre créativité, à votre imagination et à votre sens de l'aventure. Plongez-vous dans des mondes fantastiques, résolvez des énigmes, combattez des monstres, et développez des personnages riches en histoire. Profitez de l'opportunité de tisser des liens avec vos coéquipiers, de partager des moments mémorables et de créer des souvenirs durables. N'oubliez pas que chaque partie est une opportunité d'apprendre, de grandir en tant que joueur et de vivre des histoires épiques. Alors, préparez-vous à vous immerger dans l'univers captivant du jeu de rôle et à vivre des aventures inoubliables !</p>
        </div>
    )
}

export default Introduction;