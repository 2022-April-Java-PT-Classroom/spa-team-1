<<<<<<< HEAD
import Jaclogo from '../../assets/JAC-Game.png';
=======
import JaclogoD from '../../assets/logo/JAC-Game-dark.png';
>>>>>>> main
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
<<<<<<< HEAD
                <img classname={style.image} src={Jaclogo} alt='JAC Logo' />
=======
                <img classname={style.image} src={JaclogoD} alt='JAC Logo' />
>>>>>>> main
            </ul>
        </div>
    )
}

export default Header;