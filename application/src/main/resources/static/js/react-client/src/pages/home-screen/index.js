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
          <a href="/artgallery"><img className={style.mysterybox} src={box} alt="mystery box" />
          </a>
          </div>
          <div className={style.artText}>
            <h2>Art Museum</h2>
            <p>Learn more about history through creativity</p>

          </div>
        </section>

        <section className={style.fishsection}>
          <div className={style.fishimg}>
          <a href="/fish"><img className={style.mysterybox} src={box} alt="mystery box" />
          </a>
          </div>
          <div className={style.fishText}>
            <h2>Aquarium</h2>
            <p>Learn more about fish wildlife</p>

          </div>
        </section>

        <section className={style.mathsection}>
          <div className={style.mathimg}>
          <a href="/math"><img className={style.mysterybox} src={box} alt="mystery box" />
          </a>
          </div>
          <div className={style.mathText}>
            <h2>Math Facts</h2>
            <p>Practice with some fun</p>

          </div>
        </section>

        <section className={style.rewardsection}>
          <div className={style.rewardimg}>
          <a href="/api/rewards"><img className={style.mysterybox} src={box} alt="mystery box" />
          </a>
          </div>
          <div className={style.artText}>
            <h2>Rewards</h2>
            <p>Check out what you've earned!</p>

          </div>
        </section>
    
    </div>
    </div>   
    </ThemeContext.Provider>    
    );
}

export default Homescreen;