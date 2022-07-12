import Jaclogo from '../../assets/JAC-Game.png';
import { NavLink } from "react-router-dom";
import React from "react";
import style from './style.module.scss';

const Header = () => {

    return (
        <div className={style.header}>
            <h1>JAC Game</h1>
            <ul className={style.navList}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <img classname={style.image} src={Jaclogo} alt='JAC Logo' />
            </ul>
        </div>
    )
}

export default Header;