import React, { createContext, useState } from "react";

import ReactSwitch from "react-switch";
import adrianIcon from '../../assets/about/adrian.png'
import gailIcon from '../../assets/about/gail.png';
import gianIcon from '../../assets/about/gian.png';
import jalynIcon from '../../assets/about/jalyn.png'
import stephIcon from '../../assets/about/steph.png';
import style from './style.module.scss';
import victorIcon from '../../assets/about/victor.png'

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
                  <h1 className="aboutHF"style={styles.aboutHF}> Meet the Team</h1><br></br>
                  <div style={styles.group1}>
                             <div style={styles.spacer1}>
                              
                             </div>
                  <div className="Card" id= '1'style={styles.card}>
                        <h5 className="aboutH2">Stephanie</h5>
                        <img className='pics' src={stephIcon} alt="Stephanie Pic" />  
                             <p>My german cat Oliver thinks I'm the best dog mom in the world. As long as I listen to his every meow.</p>
                  </div>
                  
            
                        <div className="Card " id= '2'style={styles.card}>
                              <h5 className="aboutH2">Gian</h5>
                              <img className='pics' src={gianIcon} alt="Gian Pic" />
                              <p>Past life HR pro, current life software developer. You can catch me gaming on pc or console most days, or outside smoking a nice cigar.</p>
                        </div>
                        <div className="Card" id='3'style={styles.card}>
                              <h5 className="aboutH2">Gail</h5>
                              <img className='pics' src={gailIcon} alt="Gail Pic" />
                              <p>Hi, I am a Cleveland based junior developer. 
                                    I love learning, animals, being outdoors, 
                                    and spending time with my family.
                                    </p>
                        </div>
                        </div>
                        <div style={styles.group2}>
                              <div className="Card" style={styles.spacer}>
                                    <h2></h2>                              </div>
                        <div className="Card" id='4'style={styles.card}>
                              <h5 className="aboutH2">Victor</h5>
                              <img className='pics' src={victorIcon} alt="Vic pic" />
                              <p>Hi I'm Victor! I'm a junior full stack developer that enjoys anime, gaming, and sports.</p>
                        </div>
                        <div className="Card" id='5'style={styles.card}>
                              <h5 className="aboutH2">Adrian</h5>
                              <img className='pics' src={adrianIcon} alt="Adrian Pic" />
                              <p>Hello! I am an entry-level developer located in the greater Cleveland area. I enjoy skating, cats & coffee.</p>
                        </div>
                        <div className="Card" id='6'style={styles.card}>
                              <h5 className="aboutH2">Jalyn</h5>
                              <img className='pics' src={jalynIcon} alt="Jalyn Pic" />
                              <p>I like magic tricks and reading low quality graphic novels. My favorite is Catman.</p>
                        
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
            width:'600',
            display: 'flex',
          flexDirection: 'column',
          justifyContent:'center',
         },
         aboutHF:{
            justifyContent:'center',
           
         },
      group1:{ 
           columnGap:'162px',
            display: 'flex',
            
            // justifyContent:'space-around',
      },
      spacer1:{
           width:'350px',
           }, 
      group2:{
            columnGap:'161px',
            display: 'flex',
      }, 
      spacer:{
       width:'512px'
      },
      card:{
            backgroundColor:'black',
      
            padding:'50',
            border: '5px solid#e0b12d',
            width: '160px',
      justifyContent:'Center'
      },
      pics:{
      height:'auto'
      }

}

export default AboutScreen;