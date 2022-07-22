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
    const [artTwo, setArtTwo] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchArtData = async () => {
            const result = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/437`);
            console.log(result.data);
            setArt(result.data);
        };
        if(art) {
            setLoading(false);
        }
        const timer = setTimeout(() => {
            !art && fetchArtData();
        }, 500);
        return () => clearTimeout(timer);
        }, [art]);
        useEffect(() => {
            const fetchArtTwoData = async () => {
                const result = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/432`);
                console.log(result.data);
                setArtTwo(result.data);
            };
            if(artTwo) {
                setLoading(false);
            }
            const timer = setTimeout(() => {
                !artTwo && fetchArtTwoData();
            }, 500);
            return () => clearTimeout(timer);
            }, [artTwo]);
    return (

         // light/dark mode
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="Artgallery" id={theme} >   
      <div className={theme=== 'dark' ? style.dark : style.light}>
      <div className="switch">
          {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
    {/* light/dark mode */}

        
        loading ? <h3>Creating art...</h3> :
        <div className={style.artContainer}>
            <h1>The Metropolitan Museum of Art</h1>
          <h2>{art.title}</h2>
          <h5>{art.accessionYear}</h5>
          <h3>{art.artistDisplayName}</h3>
          <img src={art.primaryImage} />
          <h2>{artTwo.title}</h2>
          <h5>{artTwo.accessionYear}</h5>
          <h3>{artTwo.artistDisplayName}</h3>
          <img src={artTwo.primaryImage} />
        </div>
        
        {/* light/dark mode */}
        </div>
        </div>
        </ThemeContext.Provider>
    );
};
export default ArtgalleryScreen;