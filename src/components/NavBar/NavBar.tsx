import React from 'react';
import {NavLink} from 'react-router-dom';
import {ConfigPATH, PATH} from '../pages/RoutesPath';

import styles from './NavBar.module.css'

export const NavBar = () => {

    const getClassName = ({isActive}:{isActive: boolean}) => isActive ? `${styles.link} ${styles.active}` : `${styles.link}`

    return (
        <nav>
            <ul className={styles.list}>
                {/*{ConfigPATH.map(el => <LiNavLinks key={el.path} path={el.path} />)}*/}
                <li className={styles.listItem}><NavLink to={PATH.login} className={getClassName}>Login</NavLink></li>
                <li className={styles.listItem}><NavLink to={PATH.newPassword} className={getClassName}>New password</NavLink></li>
                <li className={styles.listItem}><NavLink to={PATH.passwordRecovery} className={getClassName}>Password recovery</NavLink></li>
                <li className={styles.listItem}><NavLink to={PATH.profile} className={getClassName}>Profile</NavLink></li>
                <li className={styles.listItem}><NavLink to={PATH.registration} className={getClassName}>Registration</NavLink></li>
                <li className={styles.listItem}><NavLink to={PATH.test} className={getClassName}>Test</NavLink></li>
                <li className={styles.listItem}><NavLink to={PATH.error404} className={getClassName}>Error404</NavLink></li>
            </ul>
        </nav>
    )
}

type LiNavLinksPropsType = {
    path: string
}

const LiNavLinks: React.FC<LiNavLinksPropsType> = ({path}) => {

    const getClassName = ({isActive}:{isActive: boolean}) => isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
    return(
        <li className={styles.listItem}>
            <NavLink to={path} className={getClassName}>{path}</NavLink>
        </li>
    )
}

//TODO 2 вариант (закоменчено), если импортировать массив конфига