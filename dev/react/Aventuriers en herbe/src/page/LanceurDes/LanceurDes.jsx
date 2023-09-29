import React, { useState } from 'react';
import styles from './LanceurDes.module.scss';

function LanceurDes() {
  const [valeurDes, setValeurDes] = useState('');
  const [resultats, setResultats] = useState([]);

  function lancer() {
    const des = document.getElementById('des');
    const quantite = document.getElementById('quantite');
    
    const nouveauxResultats = [];

    for (let i = 0; i < quantite.value; i++) {
      const resultat = Math.floor(Math.random() * des.value) + 1;
      nouveauxResultats.push(resultat);
    }

    setResultats(nouveauxResultats);
    
    const sommeResultats = nouveauxResultats.reduce((total, resultat) => total + resultat, 0);
    setValeurDes(sommeResultats);
  }

  return (
    <div className={styles.lanceurDes}>
      <h1>Lanceur de dés</h1>
      <div className={styles.input}>
        <select className={styles.select} name="des" id="des">
          <option value="4">D4</option>
          <option value="6">D6</option>
          <option value="8">D8</option>
          <option value="10">D10</option>
          <option value="12">D12</option>
          <option value="20">D20</option>
        </select>
        <div className={styles.nombreDeDes}>
          <label htmlFor="quantite">Nombre de dés : </label>
          <input className={styles.quantiteDes} id="quantite" type="number" defaultValue="1" />
        </div>
      </div>
      <button type="button" onClick={lancer}>Lancer</button>
      <div className={styles.resultatAll}>
        <label htmlFor="resultat">Résultat</label>
        <div className={styles.resultat} id="resultat">{valeurDes}</div>
        <div className={styles.resultatsIndividuels}>
          {resultats.map((resultat, index) => (
            <div key={index}>Lancer {index + 1}: {resultat}</div>
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default LanceurDes;