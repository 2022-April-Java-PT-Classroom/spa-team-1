import React, { createContext, useState } from "react";

import ReactSwitch from "react-switch";
import alanIcon from '../../assets/contact/alan.png';
import cliffIcon from '../../assets/contact/cliff.png';
import jordanIcon from '../../assets/contact/jordan.png';
import style from './style.module.scss';

export const ThemeContext = createContext(null);

const ContactScreen = () => {

    const [ theme, setTheme ] = useState("dark");
    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    
    return (

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="Contact" id={theme} >   
      <div className={theme=== 'dark' ? style.dark : style.light}>
      <div className="switch">
          {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
        
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
    </div>
    </div>   
    </ThemeContext.Provider>    
    );
}

export default ContactScreen;