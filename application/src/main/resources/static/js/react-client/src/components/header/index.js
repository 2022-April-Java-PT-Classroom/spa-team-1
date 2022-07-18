import JaclogoD from '../../assets/logo/JAC-Game-dark.png';
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
                <NavLink to={'/rewards'}>Rewards</NavLink>
                <NavLink to={'/artgallery-screen'}>Art Gallery</NavLink>
                <img classname={style.image} src={JaclogoD} alt='JAC Logo' />
            </ul>
        </div>
    )
}

export default Header;