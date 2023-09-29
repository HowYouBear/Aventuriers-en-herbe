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

    useEffect(() =>{
        setStrenghtModifier(Math.floor((strenght-10)/2))
        setDexterityModifier(Math.floor((dexterity-10)/2))
        setConsitutionModifier(Math.floor((consitution-10)/2))
        setIntelligenceModifier(Math.floor((intelligence-10)/2))
        setWisdomModifier(Math.floor((wisdom-10)/2))
        setCharismaModifier(Math.floor((charisma-10)/2))
    }, [strenght, dexterity, consitution, intelligence, wisdom, charisma])

    return(
        <div className={style.creationPersonnageFrame}>
            <p>Remplissez la fiche personnage si-dessous et voyez en retour les potentielles erreurs inscsrites</p>
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
                                <input type="text" 
                                className={style.statModifier}
                                defaultValue={strenghtModifier}/>
                                
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
                                <input type="text"
                                className={style.statModifier}
                                defaultValue={dexterityModifier}/>
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
                                <input type="text"
                                className={style.statModifier}
                                defaultValue={consitutionModifier}/>
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
                                <input type="text"
                                className={style.statModifier}
                                defaultValue={intelligenceModifier}/>
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
                                <input type="text"
                                className={style.statModifier}
                                defaultValue={wisdomModifier}/>
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
                                <input type="text"
                                className={style.statModifier}
                                defaultValue={charismaModifier}/>
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
        </div>
    )
}

export default CreationPersonnage;