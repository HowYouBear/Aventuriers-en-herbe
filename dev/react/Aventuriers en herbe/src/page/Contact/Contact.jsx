import style from "./Contact.module.scss"

function Contact(){
    return(
        <div className={style.frameContact}>
            <p>Vous pouvez laissez un mail à l'adresse suivante ou alors soumettre un message directement grâce au formulaire si dessous</p>
            <p>uneadresse@mail.com</p>
            <form className={style.contactForm} action="">
                <label htmlFor="object">Sujet</label>
                <input type="text" name="object" id="object"/>
                <label htmlFor="object">Texte</label>
                <textarea type="text" name="object" id="object" rows="20"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Contact;