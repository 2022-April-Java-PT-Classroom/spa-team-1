import JacLogo from '../../assets/JAC-Game-light.png';
import React from 'react';
import alanIcon from '../../assets/alan.png';
import cliffIcon from '../../assets/cliff.png';
import jordanIcon from '../../assets/jordan.png';
import style from './style.module.scss';

const ContactScreen = () => {
    return (
        <div className={style.ContactScreen}>
            <img src={JacLogo} alt='JAC Logo' />
            <h2>Contact Us!</h2>
            <img src={cliffIcon} alt='Cliff Jenkins CEO' />
            <img src={alanIcon} alt='Alan Kostrick VP' />
            <img src={jordanIcon} alt='Jordan Gilpin Retired' />
            <h2>Contact Us</h2>
            <article>
                {/* <a href='https://github.com/cljenkinsjr/jackr-enterprises-site'></a> */}
            </article>
        </div>
    );
}

export default ContactScreen;