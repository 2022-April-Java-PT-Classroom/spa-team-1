import React from 'react';
import alanIcon from '../../assets/contact/alan.png';
import cliffIcon from '../../assets/contact/cliff.png';
import jordanIcon from '../../assets/contact/jordan.png';
import style from './style.module.scss';

const ContactScreen = () => {
    return (
        <div className={style.ContactScreen}>
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