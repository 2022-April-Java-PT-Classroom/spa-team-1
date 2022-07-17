import ReactDom from'react-dom';
import React, {useState} from "react";
import style from '../..about-screen/style.module.scss'
import gailIcon from '../../assets/about/gail.png';
import gianIcon from '../../assets/about/gian.png';
import stephIcon from '../../assets/about/steph.png';
// import adrianIcon from '../../assets/adrian.png'
// import jalynIcon from '../../assets/jalyn.png'
//  <img src = {gailIcon} alt = ' gail pic' />

// import victorIcon from '../../assets/victor.png'

const AboutScreen =() => {
    return(
        
        <div class='container'>
            <h1> Meet the Team</h1>

            <div class ="Card" id= '1'style={{ backgroundImage: `url(${stephIcon})`}} >
                <div class="devInfo">
                  <h2>Stephanie</h2>
                  <p>lorem Ipsum</p>
                </div>
            </div>
           
            <div class ="Card " id= '2'style={{ backgroundImage: `url(${gianIcon})`}} >
                <div class="devInfo">
                  <h2>Gian</h2>
                  <p>lorem Ipsum</p>
                </div>
            </div>
       
        <div class ="Card" id='3'style={{ backgroundImage: `url(${gailIcon})`}} >
            <div class="devInfo">
              <h2>Gail</h2>
              <p>lorem Ipsum</p>
            </div>
        </div>
        <div class ="Card" id='4'style={{ backgroundImage: `url(${gailIcon})`}} >
            <div class="devInfo">
              <h2>Victor</h2>
              <p>lorem Ipsum</p>
            </div>
        </div>
        <div class ="Card" id='5'style={{ backgroundImage: `url(${gailIcon})`}} >
            <div class="devInfo">
              <h2>Adrian</h2>
              <p>lorem Ipsum</p>
            </div>
        </div>
        <div class ="Card" id='6'style={{ backgroundImage: `url(${gailIcon})`}} >
            <div class="devInfo">
              <h2>Jalyn</h2>
              <p>lorem Ipsum</p>
            </div>
        </div>
    </div>
            
    );
                     
           
           







}
export  default AboutScreen;

 
