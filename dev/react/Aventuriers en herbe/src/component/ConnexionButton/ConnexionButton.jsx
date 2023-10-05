import React from 'react';
import {Link} from "react-router-dom"
import style from './Connexion.module.scss'

import {AiOutlineUser} from "react-icons/Ai"

const ConnexionButton = () => {

    function scrollUp (){
        window.scroll(0,0)
    }

    return (
        <div>
             <Link to ="/connexion"><button className={style.buttonConnexion} onClick={scrollUp}><AiOutlineUser/></button></Link>
        </div>
    );
};

export default ConnexionButton;