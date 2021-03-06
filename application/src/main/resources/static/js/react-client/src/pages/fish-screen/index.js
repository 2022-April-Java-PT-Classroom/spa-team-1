import React, { createContext, useEffect, useState } from 'react';

import Axios from 'axios';
import ReactSwitch from "react-switch";
import style from './style.module.scss';

const randomNum = Math.floor((Math.random() * 116));

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
            const result = await Axios('https://www.fishwatch.gov/api/species');
            setFishes(result.data[randomNum]);
            console.log(result.data);
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

    loading ? <h3>loading fish...</h3> :
    
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="Contact" id={theme} >   
            <div className={theme=== 'dark' ? style.dark : style.light}>
            <div className="switch">

            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
            </div>
    
    <div className={style.fishStyleInfo}>
        <h3>{fishes['Species Name']}</h3>
        <h3>{fishes['Scientific Name']}</h3>
        <img src={fishes['Species Illustration Photo'].src}></img>
        <div className={style.fishStyle}>
        <h4>{fishes['Quote']}</h4>
        <div className={style.fishText}>
            <ul>NOAA Fisheries Region : {fishes['NOAA Fisheries Region']}</ul>
            <ul>Population : {fishes['Population']}</ul>
            <ul>Calories : {fishes['Calories']}</ul>
            <ul>Carbohydrate : {fishes['Carbohydrate']}</ul>
            <ul>Cholesterol : {fishes['Cholesterol']}</ul>
            <ul>FatTotal : {fishes['Fat, Total']}</ul>
            <ul>Fiber, Total Dietary : {fishes['Fiber, Total Dietary']}</ul>
            <ul>Sodium : {fishes['Sodium']}</ul>
            </div>
            </div>

            
            </div>
                </div>
                </div>
                </ThemeContext.Provider> 
           
        
    );
};

export default FishPage;