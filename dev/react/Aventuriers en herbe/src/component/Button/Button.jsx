import React from 'react';
import styles from './Button.module.scss'
import { Link } from 'react-router-dom';


const Button = ({children, ...attributes}) => {
    return (
        <div >
            <button className={styles.button} type="button" {...attributes}>
                {children}
             </button>
        </div>
    );
};

export default Button;