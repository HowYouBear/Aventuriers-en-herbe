import style from "./Contact.module.scss"
import { useForm } from "react-hook-form"


function Contact(){

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    function onSubmit (data){
        console.log(data);
    }

    return(
        <div className={style.frameContact}>
            <p>Vous pouvez laissez un mail à l'adresse suivante ou alors soumettre un message directement grâce au formulaire si dessous</p>
            <p>uneadresse@mail.com</p>
            <form onSubmit={handleSubmit(onSubmit)} className={style.contactForm}>
                <h2>Se connecter</h2>
                <label htmlFor="sujet">Sujet</label>
                <input name='sujet' type='texte' {...register("sujet", { required: true })}  />
                {errors.sujet && <span>Un sujet est nécessaire</span>}
                <label htmlFor="message">Message</label>
                <textarea className={style.zoneMessage} name='message' type='text' {...register("message", { required: true })} cols="30" rows="10" ></textarea>
                {errors.message && <span>Un contenu de message est nécessaire</span>}
                <button type="submit">Connexion</button>
            </form>
        </div>
    )
}

export default Contact;