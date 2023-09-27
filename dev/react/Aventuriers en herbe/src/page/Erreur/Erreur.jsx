import styles from './Erreur.module.scss'

function Erreur(){
    return(
        <div className={styles.erreur}>
            <div className={styles.messageErreur}>
            <p>Y'a une erreur mon gars</p>
            <button className={styles.button} onClick="history.back()">Retour</button>
            </div>
        </div>
    )
}

export default Erreur;