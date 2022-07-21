import JacLogoL from '../../assets/logo/JAC-Game-light.png';
import React from 'react';
import alanIcon from '../../assets/contact/alan1.png';
import cliffIcon from '../../assets/contact/cliff1.png';
import jordanIcon from '../../assets/contact/jordan1.png';
import style from './style.module.scss';
import {FaStar} from 'react-icons/fa';
import axios from 'axios';

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

const Reviews =({reviews})=>{

  const [ reviewState, setReviewState] =useState({
    userName:"",
    isSelected:False
  });
  const handleChange= (e)=>{
    const Value = e.target.value;
    setItemState({
      ...itemState, 
      [e.target.userName]:value
    });
 };
 const handleSubmit = (e) => {
  e.preventDefault();

  const userData = {
      name: reviewState.name,
      isSelected: false
  };

  axios.post('http://localhost:8080/api/contat/add-review', userData).then((response) => {
      console.log(response.status);
      console.log('DATA', response.data);
      setReviewState(response.data);
  });
 };

}

        return(
          <div className="fWrapper"style={styles.container}alt='container'>
                         <h2>JAC Enterprises</h2>
                        <div className= 'founders'style= {styles.founders} alt='founders'>
                            <div style={styles.card} alt='cliff'>
                                <img src={cliffIcon} alt='Cliff Jenkins CEO'/><br></br>
                                <a>Cliff Jenkins</a><br></br> 
                                <a>CEO</a>
                                </div>
                                <div style={styles.card} alt='alan'>
                                <img src={alanIcon} alt='Alan Kostrick VP'/> <br></br>
                                <a>Alan Kostrick</a> <br></br>
                                <a>Vice President</a>
                            </div>
                            <div style={styles.card} alt='jordan'>                               
                            <img src={jordanIcon} alt='Jordan Gilpin Retired'/><br></br> 
                                <a>Jordan Gilpin</a><br></br>
                                <a>You are Missed</a>
                            </div>
                        </div>
             <br></br>     
             <br></br>           

             <br></br>           

             <br></br>           

            <h1>Reviews</h1>
            <br></br>           
            <br></br>           

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
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={reviewState.name}
                    onChange={handleChange}
                    placeholder='name' />
             
                <input
                    type="text"
                    name="userReview"
                    value={Review.name}
                    onChange={handleChange}
                    placeholder='Tell us what you think.'
                />
                <button type="submit">submit</button>
            </form>
            <h3>Reviews</h3>
            <div className={style.reviewContainer}>
                {reviewState.map(item => (
                    <div className={style.reviewContainer} key={review.id}>
                        <p className={reviews.selected ? style.selected : null} onClick={() => handleSelectUpdate(review.id, review.name)}>{review.name}<button onClick={() => handleDelete(item.id)}>x</button></p>
                    </div>
                ))}
            </div>
        </div>
        </div>
           
        
    
  
  
    )
  }   
    

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

    
}

export default ContactScreen;