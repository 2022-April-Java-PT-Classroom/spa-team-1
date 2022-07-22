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
      
<div className={style.fishsection}>
<div className={style.fishimg}>
<a href="/fish"><img className={style.mysterybox} src={box} alt="mystery box" />
</a>
</div>
<div className={style.fishText}>
  <h2>Fish maybe?</h2>
  </div>
  </div>

  <div className={style.fishsection}>
<div className={style.fishimg}>
<a href="/fish"><img className={style.mysterybox} src={box} alt="mystery box" />
</a>
</div>
<div className={style.fishText}>
  <h2>Seafood</h2>
  </div>
  </div>

  <div className={style.fishsection}>
<div className={style.fishimg}>
<a href="/fish"><img className={style.mysterybox} src={box} alt="mystery box" />
</a>
</div>
<div className={style.fishText}>
  <h2>Fish?</h2>
  </div>
  </div>

  <div className={style.fishsection}>
<div className={style.fishimg}>
<a href="/fish"><img className={style.mysterybox} src={box} alt="mystery box" />
</a>
</div>
<div className={style.fishText}>
  <h2>Fish</h2>
  </div>
  </div>

  </div>
  </div>
      </ThemeContext.Provider>
    );
  }

  export default FishesPage;