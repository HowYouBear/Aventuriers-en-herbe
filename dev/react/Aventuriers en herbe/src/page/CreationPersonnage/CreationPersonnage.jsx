import { useEffect, useState } from "react";
import style from "./CreationPersonnage.module.scss"


function CreationPersonnage(){

    const [strenght, setStrenght] = useState(0);
    const [strenghtModifier, setStrenghtModifier] = useState(0);

    const [dexterity, setdexterity] = useState(0);
    const [dexterityModifier, setDexterityModifier] = useState(0);

    const [consitution, setConsitution] = useState(0);
    const [consitutionModifier, setConsitutionModifier] = useState(0);

    const [intelligence, setIntelligence] = useState(0);
    const [intelligenceModifier, setIntelligenceModifier] = useState(0);

    const [wisdom, setWisdom] = useState(0);
    const [wisdomModifier, setWisdomModifier] = useState(0);

    const [charisma, setCharisma] = useState(0);
    const [charismaModifier, setCharismaModifier] = useState(0);

    const [statCheck, setStatCheck] = useState('');
    
    useEffect(() =>{
        setStrenghtModifier(Math.floor((strenght-10)/2))
        if(strenght > 18){
            setStatCheck(statCheck + " Force")
        }
    }, [strenght])
    
    useEffect(() =>{
        setDexterityModifier(Math.floor((dexterity-10)/2))
        if(dexterity > 18){
            setStatCheck(statCheck + " Agilité")
        }
    }, [dexterity])

    useEffect(() =>{
        setConsitutionModifier(Math.floor((consitution-10)/2))
        if(consitution > 18){
            setStatCheck(statCheck + " consitution")
        }
    }, [consitution])

    useEffect(() =>{
        setIntelligenceModifier(Math.floor((intelligence-10)/2))
        if(intelligence > 18){
            setStatCheck(statCheck + " Intelligence")
        }
    }, [intelligence])

    useEffect(() =>{
        setWisdomModifier(Math.floor((wisdom-10)/2))
        if(wisdom > 18){
            setStatCheck(statCheck + " Sagesse")
        }
    }, [wisdom])

    useEffect(() =>{
        setCharismaModifier(Math.floor((charisma-10)/2))
        if(charisma > 18){
            setStatCheck(statCheck + " Charisme")
        }
    }, [charisma])

    return(
        <div className={style.creationPersonnageFrame}>
            <p>Remplissez la fiche personnage si-dessous et voyez en retour (en-dessous de la fiche personnage) les potentielles erreurs inscsrites</p>
            <div className={style.fichePersonnage}>
                <div className={style.firstRow}>
                    <div className={style.inspirationProficiency}>
                        <div>
                            <input type="text" className={style.statModifier}/>
                            <p>Bonus de maîtrise</p>
                        </div>
                        <div>
                            <input type="text" className={style.statModifier}/>
                            <p>Inspiration</p>
                        </div>
                        <div>
                            <input type="text" className={style.statModifier}/>
                            <p>Sagesse (perception) passive</p>
                        </div>
                    </div>
                    <div className={style.mainStatistiques}>
                        <div className={style.statistique}>
                            <div>
                                <input type="text" disabled
                                className={style.statModifier}
                                value={strenghtModifier}/>
                                
                                <input 
                                type="text" 
                                className={style.statValue}
                                value={strenght}
                                onChange={(e) => setStrenght(e.target.value.replace(/\D/g, ''))}
                                />
                                <p>Force</p>
                            </div>
                            <div className={style.skills}>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Jet de sauvegarde</p>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Athlétisme</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.statistique}>
                            <div>
                                <input type="text" disabled
                                className={style.statModifier}
                                value={dexterityModifier}/>
                                <input type="text"
                                className={style.statValue}
                                value={dexterity}
                                onChange={(e) => setdexterity(e.target.value)}/>
                                <p>Agilité</p>
                            </div>
                            <div className={style.skills}>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Jet de sauvegarde</p>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Acrobatie</p>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Discrétion</p>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Escamotage</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.statistique}>
                            <div>
                                <input type="text" disabled
                                className={style.statModifier}
                                value={consitutionModifier}/>
                                <input type="text"
                                className={style.statValue}
                                value={consitution}
                                onChange={(e) => setConsitution(e.target.value)}/>
                                <p>Constitution</p>
                            </div>
                            <div className={style.skills}>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Jet de sauvegarde</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.statistique}>
                            <div>
                                <input type="text" disabled
                                className={style.statModifier}
                                value={intelligenceModifier}/>
                                <input type="text"
                                className={style.statValue}
                                value={intelligence}
                                onChange={(e) => setIntelligence(e.target.value)}/>
                                <p>Intelligence</p>
                            </div>
                            <div className={style.skills}>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Jet de sauvegarde</p>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Arcane</p>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Histoire</p>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Investigation</p>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Nature</p>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Religion</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.statistique}>
                            <div>
                                <input type="text" disabled
                                className={style.statModifier}
                                value={wisdomModifier}/>
                                <input type="text"
                                className={style.statValue}
                                value={wisdom}
                                onChange={(e) => setWisdom(e.target.value)}/>
                                <p>Sagesse</p>
                            </div>
                            <div className={style.skills}>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Jet de sauvegarde</p>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Dressage</p>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Médecine</p>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Perception</p>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Perspicacité</p>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Représentation</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.statistique}>
                            <div>
                                <input type="text" disabled
                                className={style.statModifier}
                                value={charismaModifier}/>
                                <input type="text"
                                className={style.statValue}
                                value={charisma}
                                onChange={(e) => setCharisma(e.target.value)}/>
                                <p>Charisme</p>
                            </div>
                            <div className={style.skills}>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Jet de sauvegarde</p>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <p>- Athlétisme</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.otherMasteries}>
                        <p>Autres maîtrises et langues</p>
                        <textarea name="" id=""></textarea>
                    </div>
                </div>
                <div className={style.secondRow}>  
                    <div className={style.modifier}>
                        <div className={style.armor}>
                            <input type="text" />
                            <p>CA</p>
                        </div>
                        <div className={style.initiative}>
                            <input type="text" />
                            <p>Initiative</p>
                        </div>
                        <div className={style.speed}>
                            <input type="text" />
                            <p>Vitesse</p>
                        </div>
                    </div>
                    <div className={style.healthStatistiques}>
                        <div>
                            <div>
                                <p>Points de vie max</p>
                                <input type="text" name="" id="" />
                            </div>
                            <input type="text" name="" id="" />
                            <p>Points de vie actuels</p>
                        </div>
                        <div>
                            <input type="text" name="" id="" />
                            <p>Points de vie temporaires</p>
                        </div>
                    </div>
                    <div className={style.healthDeath}>
                        <div>
                            <div>
                                <p>Total</p>
                                <input type="text" name="" id="" />
                            </div>
                            <input type="text" name="" id="" />
                            <p>Dés de vie</p>
                        </div>
                        <div>
                            <div>
                                <p>Succès</p>
                                <input type="checkbox" name="" id="" /><span>=</span>
                                <input type="checkbox" name="" id="" /><span>=</span>
                                <input type="checkbox" name="" id="" />
                            </div>
                            <div>
                                <p>Echecs</p>
                                <input type="checkbox" name="" id="" /><span>=</span>
                                <input type="checkbox" name="" id="" /><span>=</span>
                                <input type="checkbox" name="" id="" />
                            </div>
                            <p>Jets de sauvegarde CONTRE LA MORT</p>
                        </div>
                    </div>
                    <div className={style.attackSpell}>
                        <div>
                            <p>Nom</p>
                            <p>Bonus ATT</p>
                            <p>Dégâts / Type</p>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <textarea name="" id=""></textarea>
                        <p>Attaques et sorts</p>
                    </div>
                    <div className={style.equipment}>
                        <div>
                            <div>
                                <div>
                                    <p>PC</p>
                                    <input type="text" />
                                </div>
                                <div>
                                    <p>PA</p>
                                    <input type="text" />
                                </div>
                                <div>
                                    <p>PE</p>
                                    <input type="text" />
                                </div>
                                <div>
                                    <p>PO</p>
                                    <input type="text" />
                                </div>
                                <div>
                                    <p>PP</p>
                                    <input type="text" />
                                </div>
                            </div>
                            <div>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                                <p>Equipement</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.thridRow}>
                    <div className={style.character}>
                        <div>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <p>Traits de personnalité</p>
                        </div>
                        <div>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <p>Idéaux</p>
                        </div>
                        <div>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <p>Liens</p>
                        </div>
                        <div>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <p>Défauts</p>
                        </div>
                    </div>
                    <div className={style.capacity}>
                        <textarea name="" id=""></textarea>
                        <p>Capacités et traits</p>
                    </div>
                </div>
            </div>
            <div className={style.retourErreur}>
                <p>Retour : {statCheck}</p>
                <p>Comment construire sa fiche de personnage?</p>
                <p>Consulter le livre des joueurs pour consulter les différentes races et classes</p>
                <p>Une fois votre race et classe choisis vous devez définir vos statistiques. Pour cela il existe plusieurs méthode:</p>
                <p>Pour remplir la valeur d'une statistique, il suffit de remplir la case grise au-dessus de la statistique correspondante.</p>
                <p>La méthode classique, le lancé de dé 6.</p>
                <p>Lancer 4d6 pour et retirer la valeur la plus faible pour définir votre statistique. C'est à dire que le score peut être de 3 à 18.</p>
                <p>La méthode distribution standard.</p>
                <p>Distribuer les valeurs 15 14 13 10 8 parmis vos statistiques</p>
                <p>La méthode d'achat</p>
                <p>Toutes vos statistiques commencent à 8 et disposer de 27 points à dépenser. Les scores de statistiques de 9 à 13 coûtent 1 point, alors que les scores 14 et 15 coûtent 2 points. Il n'est pas possible de dépasser un score de 15.</p>
                <p>Selon votre maître de jeu, vous serez libre de choisir la méthode de distribution des statistiques. Il est notable que la méthode des lancés et généralement la plus efficace car elle offre le plus de statistiques, si la chance vous souris.</p>
                <p>Vous avez maintenant vos statistiques. Notez que le modifieur (valeur indiquer au dessus de la valeur inscrite) est automatiquement calculer. Pour connaitre la valeur du modifieur, il faut appliquer la formule suivante: (valeur de la statistique - 10)/2.</p>
                <p></p>
            </div>
        </div>
    )
}

export default CreationPersonnage;