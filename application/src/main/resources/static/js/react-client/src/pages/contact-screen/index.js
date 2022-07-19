import JacLogoL from '../../assets/logo/JAC-Game-light.png';
import React from 'react';
import alanIcon from '../../assets/contact/alan.png';
import cliffIcon from '../../assets/contact/cliff.png';
import jordanIcon from '../../assets/contact/jordan.png';
import style from './style.module.scss';
import {FaStar} from 'react-icons/fa';
const colors ={
 orange:'#FFBA5A',
 grey: '#a9a9a9'
}

const ContactScreen = () => {
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
          <div className="wrapper"style={styles.container}>
                <h2>JAC Enterprises</h2>
                        <div style= {style.founders}>
                            <img src={cliffIcon} alt='Cliff Jenkins CEO'/>
                            <img src={alanIcon} alt='Alan Kostrick VP'/>
                            <img src={jordanIcon} alt='Jordan Gilpin Retired' />
                            <h2>Contact Us</h2>
                            <article>
                
                                <a href='https://github.com/cljenkinsjr/jackr-enterprises-site'></a>
                            </article>
                        </div>
            <h1>Reviews</h1>
            <div style={styles.stars}>
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
                style={styles.textarea}
                />
          </div>
        )
    
  
  
        
    
};
const styles={
    container:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      textarea:{
        border: '1px solid#a9a9a9',
        borderRadius:'5',
        wdith: 300,
        padding:'10'
      }
    }
}

export default ContactScreen;