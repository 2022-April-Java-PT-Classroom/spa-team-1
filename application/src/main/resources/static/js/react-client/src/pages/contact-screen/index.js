import React, { createContext, useState } from "react";

import {FaStar} from 'react-icons/fa';
import JacLogoL from '../../assets/logo/JAC-Game-light.png';
import ReactSwitch from "react-switch";
import alanIcon from '../../assets/contact/alan1.png';
import cliffIcon from '../../assets/contact/cliff1.png';
import jordanIcon from '../../assets/contact/jordan1.png';
import style from './style.module.scss';

const colors ={
 orange:'#FFBA5A',
 grey: '#a9a9a9'
}

export const ThemeContext = createContext(null);

const ContactScreen = () => {

    const [ theme, setTheme ] = useState("dark");
    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

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

            
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="Contact" id={theme} >   
        <div className={theme=== 'dark' ? style.dark : style.light}>
        <div className="switch">
            {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
          </div>

          <div className="fWrapper"style={styles.container}alt='container'>
                         <h2>JAC Enterprises</h2>
                        <div className= 'founders'style= {styles.founders} alt='founders'>
                            <div style={styles.card} alt='cliff'>
                                <img src={cliffIcon} alt='Cliff Jenkins CEO'/><br></br>
                                <a>Cliff Jenkins<br></br> CEO</a>
                                </div>
                                <div style={styles.card} alt='alan'>                                
                                <img src={alanIcon} alt='Alan Kostrick VP'/><br></br>
                                <a>Alan Kostrick<br></br> Vice President</a>
                            </div>
                            <div style={styles.card} alt='jordan'>                                
                            <img src={jordanIcon} alt='Jordan Gilpin Retired' /><br></br>
                                <a>Jordan Gilpin <br></br>You are Missed</a>
                            </div>
                        </div>
                            {/* <h2>Contact Us</h2> */}
                            {/* <article>
                
                                <a href='https://github.com/cljenkinsjr/jackr-enterprises-site'></a>
                            </article> */}
                        <br></br><br></br>
            <h1 style={styles.reviews}>Reviews</h1>
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
          </div>
    </div>   
    </ThemeContext.Provider>   
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
        justifyContent:'space-between',
        gap: '20px',
        flex:'1'
      },
      reviews:{
      },

      card:{
        backgroundColor:'black',
        diplay:'flex',
        flexDirection:'Column',
        border: '5px solid#e0b12d',

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

    
}

export default ContactScreen;