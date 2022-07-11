import React from "react";
import gianIcon from '../../assets/gian.png'
import stephIcon from '../../assets/steph.png'
import jalynIcon from '../../assets/jalyn.png'
import adrianIcon from '../../assets/adrian.png'
import victorIcon from '../../assets/victor.png'
import gailIcon from '../../assets/about/gail.png'

const AboutScreen =() => {
    return(
        <div>
            <h2 Meet the Team/>
                /2*3 grid 
            <img src = {gianIcon} alt = ' gian pic' />
            want to add onclick or MOUSE OVE  event to flip picture to bio info
                <p lorem ipsum />
            <img src = {stephIcon} alt = ' steph pic' />
                <p lorem ipsum />
            <img src = {jalynIcon} alt = ' jalyn pic' />
                <p lorem ipsum />
            <img src = {adrianIcon} alt = ' adrian pic' />
                <p lorem ipsum />
            <img src = {victorIcon} alt = ' victor pic' />
                <p lorem ipsum /> 
            
            <div class="flip-box">
                <div class="flip-box-inner">

                    <div class="flip-box-front">
                      <img src = {gailIcon} alt = ' gail pic' />
                    </div>

                    <div class="flip-box-back">
                      <article>
                        <h2>Gail</h2>
                        <p>loremIpsum</p>
                      </article>
                    </div>
                </div>
            </div>
           




        </div>
    );



}
export  default AboutScreen;