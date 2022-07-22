import React, { createContext, useEffect, useState } from 'react';

import ReactSwitch from "react-switch";
import box from '../../assets/homepagepics/mysterybox.gif';
import style from './style.module.scss';

export const ThemeContext = createContext(null);

const FishesPage =()=> {

  const [ theme, setTheme ] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

    return (

<ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="Contact" id={theme} >   
            <div className={theme=== 'dark' ? style.dark : style.light}>
            <div className="switch">

            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
            </div>

            <h1>Welcome to the Mystery Learning Site</h1>
            <br></br>
            <h3>Pick a mystery box to see our fish!</h3>
      
<div className={style.fishsectionone}>
<div className={style.fishText}>
  <h2>Fish 1</h2>
  </div>
<div className={style.fishimg}>
<a href="/fish"><img className={style.mysterybox} src={box} alt="mystery box" />
</a>
</div>

  </div>

  <div className={style.fishsectiontwo}>
  <div className={style.fishText}>
  <h2>Fish 2</h2>
  </div>
<div className={style.fishimg}>
<a href="/fish"><img className={style.mysterybox} src={box} alt="mystery box" />
</a>
</div>

  </div>

  <div className={style.fishsectionthree}>
  
  <div className={style.fishText}>
  <h2>Fish 3</h2>
  </div>
<div className={style.fishimg}>
<a href="/fish"><img className={style.mysterybox} src={box} alt="mystery box" />
</a>
</div>

  </div>

  <div className={style.fishsectionfour}>
  <div className={style.fishText}>
  <h2>Fish 4</h2>
  </div>
<div className={style.fishimg}>
<a href="/fish"><img className={style.mysterybox} src={box} alt="mystery box" />
</a>
</div>

  </div>

  </div>
  </div>
      </ThemeContext.Provider>
    );
  }

  export default FishesPage;