import React from 'react';
import {Link} from "react-router-dom"
import style from './Connexion.module.scss'

import {BiSolidUser} from "react-icons/bi"

const ConnexionButton = () => {

    function scrollUp (){
        window.scroll(0,0)
    }

    return (
        <div>
             <Link to ="/connexion"><button className={style.buttonConnexion} onClick={scrollUp}><BiSolidUser/></button></Link>
        </div>
    );
};

export default ConnexionButton;