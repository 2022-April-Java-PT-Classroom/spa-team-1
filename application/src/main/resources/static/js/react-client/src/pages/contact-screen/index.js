import JacLogoL from '../../assets/logo/JAC-Game-light.png';
import React, { createContext, useState } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import ReactSwitch from "react-switch";
import alanIcon from '../../assets/contact/alan1.png';
import cliffIcon from '../../assets/contact/cliff1.png';
import jordanIcon from '../../assets/contact/jordan1.png';
import style from './style.module.scss';
import {FaStar} from 'react-icons/fa';
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





   const[review, setReview] = useState('')
   const handleReviewChange=(e)=>{
    setReview((e).target.value)
   };


const handleSubmit= (e)=>{
  (e).preventDefault();
  ;
}
const updateContent = (e) =>{
  

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
                              <Router>
                              
                                  <a href='https://github.com/cljenkinsjr/jackr-enterprises-site' target="_blank" rel="noreferrer">
                                  <img src={cliffIcon} alt='Cliff Jenkins CEO'/><br></br>
                                  </a>
                                   
                                   </Router>    
                                       <a>Cliff Jenkins<br></br> CEO</a>
                                </div>
                                <div style={styles.card} alt='alan'> 
                                <Router>
                                <a href='https://github.com/AlanKostrick' target='_blank' rel="noreferrer">
                                <img src={alanIcon} alt='Alan Kostrick VP'/><br></br>
                                </a>
                                </Router>
                                <a>Alan Kostrick<br></br> Vice President</a>
                            </div>
                            <div style={styles.card} alt='jordan'> 
                                <Router>                            
                            <a href='https://github.com/orgs/2022-April-Java-PT-Classroom/people/jordanCCIT' target='_blank' rel="noreferrer">
                            <img src={jordanIcon} alt='Jordan Gilpin Retired' /><br></br>
                                </a>
                                </Router>
                                <a>Jordan Gilpin <br></br>You are Missed</a>
                            </div>
                        </div>
                        <br></br><br></br>
            <h1 style={styles.reviews}>Reviews</h1>
            <div className='Rwrapper' style={styles.Rwrapper} alt='Rwrapper'>
              <div className='kreviews>' style={styles.kreviews} alt='kreviews'>
              <div class="andrew">Andrew<br></br> "I loved the flying Mario"</div><br></br>
    <div class="ryker"> Ryker<br></br> "The fish are Cool"</div><br></br>
    <div class="felicia">Felicia<br></br>"I think it's fun"</div>
              </div><br></br><br></br>

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
                <div ClassName='Review' >
               <form onSubmit={handleSubmit}>
                <div>
                
                  <input
                   type="review"
                   name="review"
                    placeholder="What do you think?"
                    onChange={handleReviewChange}
                    value={review}
                    />
                 </div>
                  <button type="submit">Submit</button>
                </form>
                  
     </div>
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
      kreviews:{
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
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