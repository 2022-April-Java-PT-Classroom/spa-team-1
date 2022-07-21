import React, { createContext, useState } from "react";

import ReactSwitch from "react-switch";
import box from '../../assets/homepagepics/mysterybox.gif';
import style from './style.module.scss';

export const ThemeContext = createContext(null);

const Homescreen = () => {
    
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

        <div className={style.Homescreen}>
            <h2>Welcome to the Mystery Learning Site</h2>
        </div>

        <section className={style.artsection}>
          <div className={style.artimg}>
            <img className={style.mysterybox} src={box} alt="mystery box" />
          </div>
        </section>

        <section className={style.fishsection}>
          <div className={style.fishimg}>
            <img className={style.mysterybox} src={box} alt="mystery box" />
          </div>
        </section>

        <section className={style.mathsection}>
          <div className={style.mathimg}>
            <img className={style.mysterybox} src={box} alt="mystery box" />
          </div>
        </section>

        <section className={style.rewardsection}>
          <div className={style.rewardimg}>
            <img className={style.mysterybox} src={box} alt="mystery box" />
          </div>
        </section>

        
    </div>
    </div>   
    </ThemeContext.Provider>    
    );
}

export default Homescreen;