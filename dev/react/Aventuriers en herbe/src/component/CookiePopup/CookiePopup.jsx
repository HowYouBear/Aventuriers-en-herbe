import React, { useState } from 'react';
import style from "../CookiePopup/CookiePopup.module.scss"; 

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const acceptCookies = () => {
    setShowPopup(false);
  };

  const refuseCookies = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className={style['cookie-popup']}> 
        <div className={style['cookie-popup-content']}> 
          <p>Nous utilisons des cookies pour améliorer votre expérience sur notre site web.</p>
          <button onClick={acceptCookies}>Accepter</button>
          <button onClick={refuseCookies}>Refuser</button>
        </div>
      </div>
    )
  );
};

export default CookiePopup;
