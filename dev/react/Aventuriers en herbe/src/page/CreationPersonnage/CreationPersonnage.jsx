import { useEffect, useState } from "react";
import style from "./CreationPersonnage.module.scss"
import Section from "../../component/Section/Section";
import Fade from "../../component/Fade/Fade";

function CreationPersonnage(){
//#region statistiques
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
    
    useEffect(() =>{
        setStrenghtModifier(Math.floor((strenght-10)/2))
    }, [strenght])

    useEffect(() =>{
        setDexterityModifier(Math.floor((dexterity-10)/2))
    }, [dexterity])
    useEffect(() =>{
        setConsitutionModifier(Math.floor((consitution-10)/2))
    }, [consitution])
    useEffect(() =>{
        setIntelligenceModifier(Math.floor((intelligence-10)/2))
    }, [intelligence])
    useEffect(() =>{
        setWisdomModifier(Math.floor((wisdom-10)/2))
    }, [wisdom])
    useEffect(() =>{
        setCharismaModifier(Math.floor((charisma-10)/2))
    }, [charisma])

    const [isOpenOne, setIsOpenOne] = useState(false);
    function dropDownOne(){
        setIsOpenOne((isOpenOne) => !isOpenOne);
    }
    const [isOpenTwo, setIsOpenTwo] = useState(false);
    function dropDownTwo(){
        setIsOpenTwo((isOpenTwo) => !isOpenTwo);
    }
    const [isOpenThree, setIsOpenThree] = useState(false);
    function dropDownThree(){
        setIsOpenThree((isOpenThree) => !isOpenThree);
    }
    const [isOpenFour, setIsOpenFour] = useState(false);
    function dropDownFour(){
        setIsOpenFour((isOpenFour) => !isOpenFour);
    }
    const [isOpenFive, setIsOpenFive] = useState(false);
    function dropDownFive(){
        setIsOpenFive((isOpenFive) => !isOpenFive);
    }
    const [isOpenSix, setIsOpenSix] = useState(false);
    function dropDownSix(){
        setIsOpenSix((isOpenSix) => !isOpenSix);
    }
//#endregion

//#region checkvalues
    const [valueMastery, setValueMastery] = useState('');
    const masteryChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValueMastery(result);
    }
    const [valueInspire, setValueInspire] = useState('');
    const inspireChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValueInspire(result);
    }
    const [valuePassiveWisdom, setValuePassiveWisdom] = useState('');
    const passiveWisdomChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValuePassiveWisdom(result);
    }
    const [valueArmorClass, setValueArmorClass] = useState('');
    const armorClassChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValueArmorClass(result);
    }
    const [valueInitiative, setValueInitiative] = useState('');
    const initiativeChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValueInitiative(result);
    }
    const [valueSpeed, setValueSpeed] = useState('');
    const speedChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValueSpeed(result);
    }
    const [valueMaxHealth, setValueMaxHealth] = useState('');
    const maxHealthChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValueMaxHealth(result);
    }
    const [valueActualHealth, setValueActualHealth] = useState('');
    const actualHealthChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValueActualHealth(result);
    }
    const [valueBonusHealth, setValueBonusHealth] = useState('');
    const bonusHealthChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValueBonusHealth(result);
    }

    const [valueTotalHealthDice, setValueTotalHealthDice] = useState();
    const totalHealthDiceChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValueTotalHealthDice(result);
    }
    const [valueHealthDice, setValueHealthDice] = useState();
    const HealthDiceChange = event =>{
        const r = event.target.value.replace(/\D/g, '');
        setValueHealthDice(r);
    }
    
    const [valueBonusAttackOne, setValueBonusAttackOne] = useState('');
    const attackOneChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValueBonusAttackOne(result);
    }
    const [valueBonusAttackTwo, setValueBonusAttackTwo] = useState('');
    const attackTwoChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValueBonusAttackTwo(result);
    }   
    const [valueBonusAttackThree, setValueBonusAttackThree] = useState('');
    const attackThreeChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValueBonusAttackThree(result);
    }
    const [valuePC, setValuePC] = useState('');
    const pCChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValuePC(result);
    }
    const [valuePA, setValuePA] = useState('');
    const pAChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValuePA(result);
    }
    const [valuePE, setValuePE] = useState('');
    const pEChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValuePE(result);
    }
    const [valuePG, setValuePG] = useState('');
    const pGChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValuePG(result);
    }
    const [valuePP, setValuePP] = useState('');
    const pPChange = event =>{
        const result = event.target.value.replace(/\D/g, '');
        setValuePP(result);
    }
//#endregion

    return(
        <div className={style.creationPersonnageFrame}>
            <div className={style.retourErreur}>
                <h3>Comment construire sa fiche de personnage ?</h3>
                <div className={style.section}>
                    <h3 onClick={dropDownOne}>Partie 1 : Choisir son personnage.</h3>
                    <Fade visible={isOpenOne} animateEnter>
                        <Section text={
                        <div>
                            <p>Consultez <a href="https://online.anyflip.com/oerjk/rewd/mobile/index.html" target="blank">le livre des joueurs</a> pour découvrir les différentes races (page 17) et classes (page 45) de donjons et dragons.</p>
                            <p>Chaque race et classe possèdent divers avantages et défauts. Le plus important, notamment pour les débutants, est de choisir une race qui nous plaît et que l'on aimerait incarner. N'oubliez pas, Donjons et Dragons et un jeu de rôle avant tout.</p>
                        </div>
                        }/>
                    </Fade>
                </div>
                <div className={style.section}>
                    <h3 onClick={dropDownTwo}>Partie 2 : Choisir ses statistiques.</h3>
                    <Fade visible={isOpenTwo}>
                        <Section text={
                            <div>
                                <p>Pour remplir la valeur d'une statistique, il suffit de remplir la case grise au-dessus de la statistique correspondante.</p>
                                <p>Une fois votre race et classe choisie vous devez définir vos statistiques. Pour cela, il existe plusieurs méthode :</p>
                                <p className={style.underline}>La méthode classique, le lancer de dé 6 :</p>
                                <p>Lancer 4d6 pour et retirer la valeur la plus faible pour définir votre statistique. C'est-à-dire que le score peut être de 3 à 18.</p>
                                <p className={style.underline}>La méthode de distribution standard :</p>
                                <p>Distribuer les valeurs 15 14 13 10 8 parmi vos statistiques</p>
                                <p className={style.underline}>La méthode d'achat :</p>
                                <p>Toutes vos statistiques commencent à 8 et disposer de 27 points à dépenser. Les scores de statistiques de 9 à 13 coûtent 1 point, alors que les scores 14 et 15 coûtent 2 points. Il n'est pas possible de dépasser un score de 15.</p>
                                <p>Vous êtes libre de choisir la méthode de distribution des statistiques. Il est notable que la méthode des lancés et généralement la plus efficace car elle offre le plus de statistiques, si la chance vous souris.</p>
                                <p>Une fois vos statistiques distribuées, ajouter les bonus de votre race.</p>
                                <p>Vous avez maintenant vos statistiques. Notez que le modifieur (valeur indiquée au dessus de la valeur inscrite) est automatiquement calculer. Pour connaître la valeur du modifieur, il faut appliquer la formule suivante : (valeur de la statistique - 10)/2.</p>
                                <p>La classe définie quels jets de sauvegarde vous bénéficier.</p>
                                <p>Un total de deux compétences pour être sélectionné en plus des compétences définies par la race et classe.</p>
                            </div>
                        }/>
                    </Fade>
                </div>
                <div className={style.section}>
                    <h3 onClick={dropDownThree}>Partie 3 : Le reste des statistiques.</h3>
                    <Fade visible={isOpenThree}>
                        <Section text={
                            <div>
                            <p>La classe d'armure correspond à 10 plus le modifieur de dextérité plus les éventuelles armures.</p>
                            <p>L'initiative correspond à la valeur du modifieur de dextérité.</p>
                            <p>La vitesse dépend de votre race.</p>
                            <p>La santé est calculée en fonction de la classe. Pour savoir le dé correspondant, consulter le livre des joueurs.</p>
                            <p>Au niveau 1, la santé correspond à la valeur maximum du dé de vie plus le modificateur.</p>
                            <p>A chaque niveau, lancez un dé de vie pour gagner autant de santé que le résultat en ajoutant votre modificateur de constitution. Vous pouvez égalemment choisir la moyenne (d6: 4, d8: 5, D10: 6, D12: 7) si votre MJ vous l'accorde.</p>
                            <p>Les points de vie temporaires correspondent à divers bonus qui peuvent être lancés en faveur du joueur (comme des sorts ou des festins). Attention, car les bonus ne sont pas cumulables.</p>
                            </div>
                        }/>
                    </Fade>
                </div>
                <div className={style.section}>
                        <h3 onClick={dropDownFour}>Partie 4 : Les jets de sauvegarde contre la mort.</h3>
                    <Fade visible={isOpenFour}>
                        <Section text={
                            <div>
                                <p>Elle se décompose en deux parties: les succès et les échecs.</p>
                                <p>Quand votre personnage tombe sous les 1 points de vie, il doit alors lancer chaque tour suivant un dé 20. Si le joueur fait au moins 10, c'est un succès. Une réussite critique donne trois succès alors qu'un échec critique donne 2 éches.</p>
                                <p>Si un joueur à terre réussi à obtenir 3 succès, il se relève alors avec un point de vie après avoir reçu de l'aide. S'il s'agit de 3 échecs, référencer vous à la partie 1 de ce guide.</p>
                            </div>
                        }/>
                    </Fade>
                </div>
                <div className={style.section}>
                    <h3 onClick={dropDownFive}>Partie 5 : Le reste de la fiche.</h3>
                    <Fade visible={isOpenFive}>
                        <Section text={
                        <div>
                            <p>Cette partie s'appelle plus communément "copier coller le contenu du livre de joueur".</p>
                            <p>Dans les maîtrises et langue, incrivez les maitrises et langues données par votre race et classe.</p>
                            <p>Pour attaques et sorts, inscrivez l'équipement donné par votre classe/race</p>
                            <p>Pour l'équipement et les pièces (cuivre, argent, électrum, or et platine), inscrivez l'équipement donné par votre classe/race</p>
                            <p>Pour les capacités et traits, inscrivez pour une dernière fois les élèments donnés par votre classe/race</p>
                            <p>Le bonus de maîtrise est un valeur fixe. Elle commence à 2 au niveau 1 et monte de 1 point tous les 4 niveaux.</p>
                            <p>L'inspiration est une valeur offerte par votre MJ. Pour en obtenir, jouer de manière rôle play. Si votre Mj est satisfait de votre participation à l'ambiance de la partie, il peut vous offrir des points que vous pouvez utiliser en bonus pour vos jets.</p>
                            <p>La sagesse (perception) passive correspond à votre instinct. Sa valeur est de 10 plus votre modifieur de sagesse. Vous pouvez ajouter votre bonus de maîtrise si vous possédez la compétence perception.</p>
                        </div>
                        }/>
                    </Fade>
                </div>
                <div className={style.section}>
                    <h3 onClick={dropDownSix}>Partie 6 : Personnalité du personnage.</h3>
                    <Fade visible={isOpenSix}>
                        <Section text={
                        <div>
                            <p>Il est fort probable que vous ayez déjà vu l'anciennement charte d'alignement. Celle-ci a disparu en faveur de ce nouveau système offrant plus de liberté d'expression au joueur.</p>
                            <p>Les cases sont assez intuitives en elle même: Traits de personnalité, idéaux, liens et défauts correspondent aux caractéristiques de votre personnage. Vous y êtes libre d'y d'écrire la personnalité du personnage que vous incarnerez. Certains joueurs peuvent avoir du mal à remplir ces cases, car ils ne savent pas encore comment ils vont intéragir avec le monde offert par le maître de jeu. Ce n'est pas grave, car c'est case ne sont cruciale au déroulement d'une partie. Cependant, les remplir en cours d'aventure au fur et mesure que vous contruirez l'histoire avec les différents joueurs et maître de jeu est une bonne chose à faire (et elle vous permettra d'obtenir des points d'inspiration !).</p>
                        </div>
                        }/>
                    </Fade>
                </div>
            </div>
            <div className={style.fichePersonnageFrame}>
                <div className={style.fichePersonnage}>
                    <div className={style.firstRow}>
                        <div className={style.inspirationProficiency}>
                            <div>
                                <input type="text" 
                                value={valueMastery}
                                onChange={masteryChange}
                                className={style.statModifier}/>
                                <p>Bonus de maîtrise</p>
                            </div>
                            <div>
                                <input type="text"
                                value={valueInspire}
                                onChange={inspireChange}
                                className={style.statModifier}/>
                                <p>Inspiration</p>
                            </div>
                            <div>
                                <input type="text"
                                value={valuePassiveWisdom}
                                onChange={passiveWisdomChange}
                                className={style.statModifier}/>
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
                                    onChange={(e) => setdexterity(e.target.value.replace(/\D/g, ''))}/>
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
                                    onChange={(e) => setConsitution(e.target.value.replace(/\D/g, ''))}/>
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
                                    onChange={(e) => setIntelligence(e.target.value.replace(/\D/g, ''))}/>
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
                                    onChange={(e) => setWisdom(e.target.value.replace(/\D/g, ''))}/>
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
                                    onChange={(e) => setCharisma(e.target.value.replace(/\D/g, ''))}/>
                                    <p>Charisme</p>
                                </div>
                                <div className={style.skills}>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                        <p>- Jet de sauvegarde</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                        <p>- Intimidation</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                        <p>- Persuation</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                        <p>- Représentation</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                        <p>- Tromperie</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.otherMasteries}>
                            <p>Autres maîtrises et langues</p>
                            <textarea/>
                        </div>
                    </div>
                    <div className={style.secondRow}>  
                        <div className={style.modifier}>
                            <div className={style.armor}>
                                <input type="text"
                                value={valueArmorClass}
                                onChange={armorClassChange}
                                />
                                <p>CA</p>
                            </div>
                            <div className={style.initiative}>
                                <input type="text"
                                value={valueInitiative}
                                onChange={initiativeChange}
                                />
                                <p>Initiative</p>
                            </div>
                            <div className={style.speed}>
                                <input type="text"
                                value={valueSpeed}
                                onChange={speedChange}
                                />
                                <p>Vitesse</p>
                            </div>
                        </div>
                        <div className={style.healthStatistiques}>
                            <div>
                                <div>
                                    <p>Points de vie max</p>
                                    <input type="text"
                                    value={valueMaxHealth}
                                    onChange={maxHealthChange}
                                    />
                                </div>
                                <input type="text"
                                value={valueActualHealth}
                                onChange={actualHealthChange}/>
                                <p>Points de vie actuels</p>
                            </div>
                            <div>
                                <input type="text"
                                value={valueBonusHealth}
                                onChange={bonusHealthChange}/>
                                <p>Points de vie temporaires</p>
                            </div>
                        </div>
                        <div className={style.healthDeath}>
                            <div>
                                <div>
                                    <p>Total</p>
                                    <input type="text"
                                    value={valueTotalHealthDice}
                                    onChange={totalHealthDiceChange}
                                    />
                                </div>
                                <input type="text"
                                value={valueHealthDice}
                                onChange={HealthDiceChange}/>
                                <p>Dés de vie</p>
                            </div>
                            <div>
                                <div>
                                    <p className={style.deathSaves}>Succès</p>
                                    <input type="checkbox"/><span>=</span>
                                    <input type="checkbox"/><span>=</span>
                                    <input type="checkbox"/>
                                </div>
                                <div>
                                    <p className={style.deathSaves}>Echecs</p>
                                    <input type="checkbox"/><span>=</span>
                                    <input type="checkbox"/><span>=</span>
                                    <input type="checkbox"/>
                                </div>
                                <p className={style.deathSavesTitle}>Jets de sauvegarde</p>
                                <p>CONTRE LA MORT</p>
                            </div>
                        </div>
                        <div className={style.attackSpell}>
                            <div>
                                <p>Nom</p>
                                <p>Bonus ATT</p>
                                <p>Dégâts / Type</p>
                                <input type="text"/>
                                <input type="text"
                                className={style.attackBonus}
                                value={valueBonusAttackOne}
                                onChange={attackOneChange}
                                />
                                <input type="text"/>
                                <input type="text"/>
                                <input type="text"
                                className={style.attackBonus}
                                value={valueBonusAttackTwo}
                                onChange={attackTwoChange}
                                />
                                <input type="text"/>
                                <input type="text"/>
                                <input type="text"
                                className={style.attackBonus}
                                value={valueBonusAttackThree}
                                onChange={attackThreeChange}
                                />
                                <input type="text"/>
                            </div>
                            <textarea/>
                            <p>Attaques et sorts</p>
                        </div>
                        <div className={style.equipment}>
                            <div>
                                <div>
                                    <div>
                                        <p>PC</p>
                                        <input type="text"
                                        value={valuePC}
                                        onChange={pCChange}/>
                                    </div>
                                    <div>
                                        <p>PA</p>
                                        <input type="text"
                                        value={valuePA}
                                        onChange={pAChange}/>
                                    </div>
                                    <div>
                                        <p>PE</p>
                                        <input type="text"
                                        value={valuePE}
                                        onChange={pEChange}/>
                                    </div>
                                    <div>
                                        <p>PO</p>
                                        <input type="text"
                                        value={valuePG}
                                        onChange={pGChange}/>
                                    </div>
                                    <div>
                                        <p>PP</p>
                                        <input type="text"
                                        value={valuePP}
                                        onChange={pPChange}/>
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
            </div>

        </div>
    )
}

export default CreationPersonnage;