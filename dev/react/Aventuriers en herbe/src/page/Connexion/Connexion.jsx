import styles from './Connexion.module.scss'

function Connexion(){
    return(
        <div className={styles.connexionInscription}>
        <form className={styles.connexion}>
            <h2>Se connecter</h2>
            <p>Addresse mail</p>
            <input type="email" required />
            <p>Mot de passe</p>
            <input type="password" required />
            <button type='submit'>Se connecter</button>
        </form>
        <form className={styles.inscription}>
            <h2>Créer un compte</h2>
            <p>Addresse mail</p>
            <input type="email" required />
            <p>Confirmation addresse mail</p>
            <input type="email" required />
            <p>Mot de passe</p>
            <input type="password" required />
            <p>Confirmation mot de passe</p>
            <input type="password" required />
            <input type="checkbox" name="CGU" required/>
            <label for="CGU">j'accepte les conditions générales et <br />la politique de confidentialité de <br /> "Les Aventuriers en herbe"</label>
            <button type='submit'>Inscription</button>
        </form>
        </div>
    )
}

export default Connexion;