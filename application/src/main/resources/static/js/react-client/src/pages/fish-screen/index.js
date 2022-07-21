import React, { createContext, useEffect, useState } from 'react';

import Axios from 'axios';
import ReactSwitch from "react-switch";
import style from './style.module.scss';

export const ThemeContext = createContext(null);

const FishPage = () => {

    const [ theme, setTheme ] = useState("dark");
    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
  
    const [fishes, setFishes] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFishesData = async () => {
            const result = await Axios('https://www.fishwatch.gov/api/species/red-snapper');
            setFishes(result.data);
        }
        
        if(fishes){
            setLoading(false);
        }

        const timer = setTimeout(() =>{
            !fishes && fetchFishesData();
        }, 1000);
        
        return ()=> clearTimeout(timer);
        
    }, [fishes]);

return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>
<div className="Contact" id={theme} >   
<div className={theme=== 'dark' ? style.dark : style.light}>
<div className="switch">
{/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
  <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
  </div>

  
    loading ? <h3>loading fish...</h3> :
    <div>
        <h3>{ fishes.SpeciesName }</h3>
    </div>



    </div>
    </div>   
    </ThemeContext.Provider>    

    );
};

export default FishPage;