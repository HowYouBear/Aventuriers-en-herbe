import React from 'react';
import styles from './Button.module.scss'
import { Link } from 'react-router-dom';


const Button = ({children, ...attributes}) => {
    return (
        <div className={styles.button}>
            <button type="button" {...attributes}>
                {children}
             </button>
        </div>
    );
};

export default Button;