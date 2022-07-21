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
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="About" id={theme} >   
      <div className={theme=== 'dark' ? style.dark : style.light}>
      <div className="switch">
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
      </div>
            <div class='container' style={styles.cont}>
                  <h1 className="aboutHF"style={styles.aboutHF}> Meet the Team</h1>
                  <div style={styles.group1}>
                  <div className="Card" id= '1'style={styles.card}>
                        <h5 className="aboutH2">Stephanie</h5>
                        <img src={stephIcon} alt="Stephanie Pic" />  
                        <article className="Card" id= '1'>
                             
                              <p>lorem Ipsum</p>
                        </article>
                  </div>
            
                        <div className="Card2 " id= '2'style={styles.card}>
                              <h5 className="aboutH2">Gian</h5>
                              <img src={gianIcon} alt="Gian Pic" />
                              <p>I’m an experienced Human Resource professional currently working as an HR Partner for
                  Amazon, with over 7 years of experience.
                  {/* This year, I’m fulfilling a personal goal by pivoting in my career to pursue a future in Tech. After
                  learning Python and other languages on my own, I decided to enroll in an amazing bootcamp, WCCI, that
                  has an accelerated approach to teaching and training future Software Engineers. Upon completion of my
                  certification, I will be pursuing a position that will enhance my career. This position would challenge
                  me to continue to learn, grow my knowledge and push me to construct and deliver software that will make */}
                  a difference.</p>
                        </div>
                        <div className="Card3" id='3'style={styles.card}>
                              <h5 className="aboutH2">Gail</h5>
                              <img src={gailIcon} alt="Gail Pic" />
                              <p>lorem Ipsum</p>
                        </div>
                        </div>
                        <div style={styles.group2}>
                        <div className="Card4" id='4'style={styles.card}>
                              <h5 className="aboutH2">Victor</h5>
                              <img src={victorIcon} alt="Vic pic" />
                              <p>lorem Ipsum</p>
                        </div>
                        <div className="Card5" id='5'style={styles.card}>
                              <h5 className="aboutH2">Adrian</h5>
                              <img src={adrianIcon} alt="Adrian Pic" />
                              <p>lorem Ipsum</p>
                        </div>
                        <div className="Card6" id='6'style={styles.card}>
                              <h5 className="aboutH2">Jalyn</h5>
                              <img src={gailIcon} alt="Jalyn Pic" />
                              <p>lorem Ipsum</p>
                        
                        </div>
                        </div>
                  </div>
            </div>
            </div>   
            </ThemeContext.Provider>
    );
    
};
const styles={
      cont:{
            display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
         },
      group1:{
            display: 'flex',
            gap:'10'
      }, 
      group2:{
            display: 'flex',
            gap:'20'
      }, 
      card:{
            
      width: "200px",
      height: "auto",
      },
      gail:{

      }

}
export default AboutScreen;

 
