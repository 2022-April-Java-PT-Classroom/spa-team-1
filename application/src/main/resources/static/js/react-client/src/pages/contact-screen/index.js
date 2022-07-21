<<<<<<< HEAD
import JacLogoL from '../../assets/logo/JAC-Game-light.png';
import React from 'react';
import alanIcon from '../../assets/contact/alan1.png';
import cliffIcon from '../../assets/contact/cliff1.png';
import jordanIcon from '../../assets/contact/jordan1.png';
=======
import React, { createContext, useState } from "react";

import ReactSwitch from "react-switch";
import alanIcon from '../../assets/contact/alan.png';
import cliffIcon from '../../assets/contact/cliff.png';
import jordanIcon from '../../assets/contact/jordan.png';
>>>>>>> main
import style from './style.module.scss';
import {FaStar} from 'react-icons/fa';
const colors ={
 orange:'#FFBA5A',
 grey: '#a9a9a9'
}

export const ThemeContext = createContext(null);

const ContactScreen = () => {
<<<<<<< HEAD
    var stars= Array(5).fill(0);
   const[currentValue, setCurrentValue]= React.useState(0);
   const[hoverValue, setHoverValue] = React.useState(undefined); 
   
   const handleClick = value=> {
    setCurrentValue(value)
   };
   const handleMouseOver=value=>{
    setHoverValue(value)
}
   const handleMouseLeave=()=>{
    setHoverValue(undefined)
   }






        return(
          <div className="fWrapper"style={styles.container}alt='container'>
                         <h2>JAC Enterprises</h2>
                        <div className= 'founders'style= {styles.founders} alt='founders'>
                            <div style={styles.card} alt='cliff'>
                                <img src={cliffIcon} alt='Cliff Jenkins CEO'/>
                                <a>Cliff Jenkins CEO</a>
                                </div>
                                <div style={styles.card} alt='alan'>                                <img src={alanIcon} alt='Alan Kostrick VP'/>
                                <a>Alan Kostrick Vice President</a>
                            </div>
                            <div style={styles.card} alt='jordan'>                                <img src={jordanIcon} alt='Jordan Gilpin Retired' />
                                <a>Jordan Gilpin You are Missed</a>
                            </div>
                        </div>
                            {/* <h2>Contact Us</h2> */}
                            {/* <article>
                
                                <a href='https://github.com/cljenkinsjr/jackr-enterprises-site'></a>
                            </article> */}
                        
            <h1>Reviews</h1>
            <div className='Rwrapper' style={styles.Rwrapper} alt='Rwrapper'>
            <div className='stars'style={styles.stars} alt='stars'>
                {stars.map((_, index)=>{
                    return(
                        <FaStar
                        key={index}
                        size={24}
                        style={{
                            marginRight: 10, 
                            cursor: 'pointer'
                        }}
                        color={(hoverValue || currentValue)> index ? colors.orange : colors.grey}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={()=> handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                    />
                    )
                })}
                </div>
                <textarea
                placeholder='What do you think?'
                style={styles.textarea} alt='textarea'
                />
            </div>
          </div>
        )
    
  
  
        
    
};
const styles={
    container:{
        display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
     },
      founders:{
        display: 'flex', 
        flex:'1'
      },
      

      card:{
        diplay:'flex',
        flexDirection:'Column'
    },
    Rwrapper:{
       display:'flex', 
        flexDirection:'Column',
    },
      stars:{
        display:'flex',
        alignItem:'flex-Start',
        alignContent:'center'

      },
      textarea:{
        display:'flex',
        alignContent:'center',
        border: '1px solid#a9a9a9',
        borderRadius:'5',
        wdith: '300',
        padding:'10'

      }

    
=======

    const [ theme, setTheme ] = useState("dark");
    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    
    return (

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="Contact" id={theme} >   
      <div className={theme=== 'dark' ? style.dark : style.light}>
      <div className="switch">
          {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
        
        <div className={style.ContactScreen}>
            <h2>Contact Us!</h2>
            <img src={cliffIcon} alt='Cliff Jenkins CEO' />
            <img src={alanIcon} alt='Alan Kostrick VP' />
            <img src={jordanIcon} alt='Jordan Gilpin Retired' />
            <h2>Contact Us</h2>
            <article>
                {/* <a href='https://github.com/cljenkinsjr/jackr-enterprises-site'></a> */}
            </article>
        </div>
    </div>
    </div>   
    </ThemeContext.Provider>    
    );
>>>>>>> main
}

export default ContactScreen;