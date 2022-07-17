import React from "react";
import gailIcon from '../../assets/about/gail.png';
import gianIcon from '../../assets/about/gian.png';
import style from './style.module.scss';

// import adrianIcon from '../../assets/adrian.png'

// import jalynIcon from '../../assets/jalyn.png'

// import stephIcon from '../../assets/steph.png'

// import victorIcon from '../../assets/victor.png'

const AboutScreen =() => {
    return(
        <div className={style.Aboutscreen}>
            <h2 Meet the Team/>
                {/* /2*3 grid 
            want to add onclick or MOUSE OVE  event to flip picture to bio info */}
                <p lorem ipsum />
            {/* <img src = {stephIcon} alt = ' steph pic' /> */}
                <p lorem ipsum />
            {/* <img src = {jalynIcon} alt = ' jalyn pic' /> */}
                <p lorem ipsum />
            {/* <img src = {adrianIcon} alt = ' adrian pic' /> */}
                <p lorem ipsum />
            {/* <img src = {victorIcon} alt = ' victor pic' /> */}
                <p lorem ipsum /> 
            
            <div class="flip-box">
                <div class="flip-box-inner">

                    <div class="flip-box-front">
                      <img className={style.aboutImg} src = {gailIcon} alt = ' gail pic' />
                      <img className={style.aboutImg} src = {gianIcon} alt = ' gian pic' />
                    </div>

                    <div class="flip-box-back">
                      <article>
                        <h2>Gail</h2>
                        <p>loremIpsum </p>
                        
                        
                      </article>
                    </div>
                </div>
            </div>
           




        </div>
    );



}
export  default AboutScreen;

 
