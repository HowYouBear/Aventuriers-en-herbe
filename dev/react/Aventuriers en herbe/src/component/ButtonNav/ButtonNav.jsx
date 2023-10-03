import React from 'react';
import styles from "./ButtonNav.module.scss"

const ButtonNav = ({children, ...attributes}) => {
    return (
        <div>
            <button className={styles.buttonNav} type="button" {...attributes}>
                {children}
             </button>
        </div>
    );
};

export default ButtonNav;