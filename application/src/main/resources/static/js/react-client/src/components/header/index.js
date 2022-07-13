import JaclogoD from '../../assets/JAC-Game-light.png';
import { NavLink } from "react-router-dom";
import React from "react";
import style from './style.module.scss';

const Header = () => {

    return (
        <div className={style.header}>
            <ul className={style.navList}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <img classname={style.image} src={JaclogoD} alt='JAC Logo' />
            </ul>
        </div>
    )
}

export default Header;