import React, { createContext, useState } from "react";

import ReactSwitch from "react-switch";
import adrianIcon from '../../assets/about/adrian.png'
import gailIcon from '../../assets/about/gail.png';
import gianIcon from '../../assets/about/gian.png';
import stephIcon from '../../assets/about/steph.png';
import style from './style.module.scss';
import victorIcon from '../../assets/about/victor.png'

// import jalynIcon from '../../assets/jalyn.png'

export const ThemeContext = createContext(null);

const AboutScreen =() => {
           
const [ theme, setTheme ] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
      
    return(
<<<<<<< HEAD

        <div class='container'>
            <h4 className="aboutHF"> Meet the Team</h4>
            <div className= 'cards' >
             <img src={stephIcon} alt="Stephanie Pic" /> 
                  <article className="Card1" id= '1'>
                        <h2 className="aboutH2">Stephanie</h2>
                        <p>lorem Ipsum</p>
                  </article>
            </div>
           
            <div className="Card2 " id= '2'>
                  <h2 className="aboutH2">Gian</h2>
                  <img src={gianIcon} alt="Gian Pic" />
=======
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="About" id={theme} >   
      <div className={theme=== 'dark' ? style.dark : style.light}>
      <div className="switch">
          {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
            <div class='container'>
                  <h4 className="aboutHF"> Meet the Team</h4>
                  <div className="Card1" id= '1'>
                        <h2 className="aboutH2">Stephanie</h2>
                        <img src={stephIcon} alt="Stephanie Pic" /> 
>>>>>>> main
                        <p>lorem Ipsum</p>
                  </div>
                  <div className="Card2 " id= '2'>
                        <h2 className="aboutH2">Gian</h2>
                        <img src={gianIcon} alt="Gian Pic" />
                        <p>I’m an experienced Human Resource professional currently working as an HR Partner for
                Amazon, with over 7 years of experience.
                This year, I’m fulfilling a personal goal by pivoting in my career to pursue a future in Tech. After
                learning Python and other languages on my own, I decided to enroll in an amazing bootcamp, WCCI, that
                has an accelerated approach to teaching and training future Software Engineers. Upon completion of my
                certification, I will be pursuing a position that will enhance my career. This position would challenge
                me to continue to learn, grow my knowledge and push me to construct and deliver software that will make
                a difference.</p>
                  </div>
                  <div className="Card3" id='3'>
                        <h2 className="aboutH2">Gail</h2>
                        <img src={gailIcon} alt="Gail Pic" />
                        <p>lorem Ipsum</p>
                  </div>
                  <div className="Card4" id='4'>
                        <h2 className="aboutH2">Victor</h2>
                        <img src={victorIcon} alt="Vic pic" />
                        <p>lorem Ipsum</p>
                  </div>
                  <div className="Card5" id='5'>
                        <h2 className="aboutH2">Adrian</h2>
                        <img src={adrianIcon} alt="Adrian Pic" />
                        <p>lorem Ipsum</p>
                  </div>
                  <div className="Card6" id='6'>
                        <h2 className="aboutH2">Jalyn</h2>
                        <img src={gailIcon} alt="Jalyn Pic" />
                        <p>lorem Ipsum</p>
                  </div>
            </div>
      </div>
      </div>   
      </ThemeContext.Provider>
    );
}
export default AboutScreen;

 
