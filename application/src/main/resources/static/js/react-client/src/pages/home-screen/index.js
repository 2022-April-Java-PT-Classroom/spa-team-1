import React, { createContext, useState } from "react";

import ReactSwitch from "react-switch";
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
            <h2>This is the home page</h2>
        </div>
    
    </div>
    </div>   
    </ThemeContext.Provider>    
    );
}

export default Homescreen;