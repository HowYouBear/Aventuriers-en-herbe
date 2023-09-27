import styles from './Erreur.module.scss'

function Erreur(){
    return(
        <div className={styles.erreur}>
            <div className={styles.messageErreur}>
            <p>Y'a une erreur mon gars</p>
            </div>
        </div>
    )
}

export default Erreur;