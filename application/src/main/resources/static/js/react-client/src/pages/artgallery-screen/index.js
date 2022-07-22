import React, { createContext, useEffect, useState } from "react";

import Axios from "axios";
import ReactSwitch from "react-switch";
import style from './style.module.scss';

export const ThemeContext = createContext(null);

const ArtgalleryScreen = () => {

    // light/dark mode
    const [ theme, setTheme ] = useState("dark");
    const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
     // light/dark mode

    const [art, setArt] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const randomID = Math.floor((Math.random() * 500) +1);

    useEffect(() => {

        const fetchArtData = async() => {
            const randomArt = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomID}`);
            console.log(randomArt.data);
            setArt(randomArt.data);
        };

        if (art) {
            setLoading(false);
        
        }
        const timer = setTimeout(() => {
            !art && fetchArtData();
        }, 1000);
        return () => clearTimeout(timer);
    }, [art]);

    function newArt () {
        window.location.reload(false);
    }
            
       

    return (
        loading ? <h3>Creating art...</h3> :
         // light/dark mode
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="Artgallery" id={theme} >   
      <div className={theme=== 'dark' ? style.dark : style.light}>
      <div className="switch">
          {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
    {/* light/dark mode */}
         <div>
            <section className ={style.artContainer}>
            <h1>The Metropolitan Museum of Art</h1>
            <h3>{art.title}</h3>
          <h4>{art.artistDisplayName}</h4>
          <img src={art.primaryImage}/>   
          <h5>{art.period}</h5>
          <h5>{art.objectDate}</h5>
        
        {/* light/dark mode */}
        </section>
        <button onClick={newArt}>See More!</button>
        </div>
        </div>
        </div>
         </ThemeContext.Provider>
    );


}

export default ArtgalleryScreen;