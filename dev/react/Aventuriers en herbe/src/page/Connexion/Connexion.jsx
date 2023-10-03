import styles from './Connexion.module.scss'
import { useForm } from "react-hook-form"
import Button from "../../component/Button/Button"

function Connexion(){

const {
    register,
    handleSubmit,
    formState: { errors }
} = useForm();

const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 }
} = useForm();

function onSubmit (data){
    console.log(data);
}
function onSubmit2 (data2){
    console.log(data2);
}

    return(
        <div className={styles.connexionInscription}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.connexion}>
                <h2>Se connecter</h2>
                <label htmlFor="email">Adresse email</label>
                <input name='email' type='email' placeholder='john@doe.com' {...register("email", { required: true })}  />
                {errors.email && <span>Une addresse email est nécessaire</span>}
                <label htmlFor="password">Mot de passe</label>
                <input name='password' type='password' placeholder='Mot de passe' {...register("password", { required: true })} />
                {errors.password && <span>Un mot de passe est nécessaire</span>}
                <Button type="submit">Connexion</Button>
            </form>

        <form onSubmit={handleSubmit2(onSubmit2)} className={styles.inscription}>
            <h2>Créer un compte</h2>
            <label htmlFor="email2">Addresse mail</label>
            <input name='email2' placeholder='john@doe.com' {...register2("email2", { required: true })}  />
            {errors2.email2 && <span>Une addresse email est nécessaire</span>}
            <label htmlFor="confEmail2">Confirmation d'adresse mail</label>
            <input name='confEmail2' placeholder='john@doe.com' {...register2("confEmail2", { required: true })}  />
            {errors2.confEmail2 && <span>Une addresse email est nécessaire</span>}
            <label htmlFor="password2">Mot de passe</label>
            <input name='password2' {...register2("password2", { required: true })}  />
            {errors2.password2 && <span>Un mot de passe est nécessaire</span>}
            <label htmlFor="confPassword2">Confirmation de mot de passe</label>
            <input name='confPassword2' {...register2("confPassword2", { required: true })}  />
            {errors2.confPassword2 && <span>Un mot de passe est nécessaire</span>}
            <Button type="submit">Créer</Button>
        </form>
        </div>
    )
}

export default Connexion;