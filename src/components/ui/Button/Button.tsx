import React from 'react';

import styles from './Button.module.css'

type ButtonType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {}

export const Button: React.FC<ButtonType> = ({...props}) => {
    return (
        <button className={styles.btn} {...props}/>
    )
}
