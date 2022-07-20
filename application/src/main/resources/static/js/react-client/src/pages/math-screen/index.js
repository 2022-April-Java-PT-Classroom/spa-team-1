import React, { createContext, useEffect, useState } from "react";

import ReactSwitch from "react-switch";
import style from './style.module.scss';
import Axios from 'axios';

export const ThemeContext = createContext(null);

const MathScreen = () => {

    const [ theme, setTheme ] = useState("dark");
    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    const [math, setMath]= useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (()=>{

        const fetchMathData = async () => {
            const result = await Axios('http://localhost:8080/math');
            setMath(result.data);
        }

        if(math) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !math && fetchMathData();
        }, 1000);

        return ()=> clearTimeout(timer);

    


    }, [math]);

        console.log(math);


    
    return (

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="Contact" id={theme} >   
      <div className={theme=== 'dark' ? style.dark : style.light}>
      <div className="switch">
          {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>

        <div>
            <h2>This is the math screen</h2>
            {loading ? <h3>Loading...</h3> : math.map(math => (
                <a href={'math.${math.id}' }><p>{math.name}</p></a>
            ))}



        </div>

    </div>
    </div>   
    </ThemeContext.Provider>  

    );
}
export default MathScreen;

{/* <div class="addSect">
                <h3>This is the addition section</h3>
                <p>This is where the page will hook up to the API to show simple addition problems</p>
                <p>1+1=2</p>
                <p>Fun video to explain subject in link below</p>
                <p><a href= "https://www.youtube.com/watch?v=DkM1krQfESM" >VIDEO</a></p>
            </div>

            <div class="subSect">
                <h3>This is the subtraction section</h3>
                <p></p>
                <p>2-1=1</p>
            </div>

            <div class="multiSect">
                <h3>This is the multiplication section</h3>
                <p>3x2=6</p>
                <p><a href= "https://www.youtube.com/watch?v=DkM1krQfESM" >VIDEO</a></p>
            </div>

            <div class="divSect">
                <h3>This is the division section</h3>
                <p>6/3=2</p>
            </div> */}