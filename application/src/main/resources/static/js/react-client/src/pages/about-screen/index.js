import React, {useState} from "react";

import ReactDom from'react-dom';
import adrianIcon from '../../assets/about/adrian.png'
import gailIcon from '../../assets/about/gail.png';
import gianIcon from '../../assets/about/gian.png';

import stephIcon from '../../assets/about/steph.png';
import style from './style.module.scss';


// import jalynIcon from '../../assets/jalyn.png'
//  <img src = {gailIcon} alt = ' gail pic' />
// import victorIcon from '../../assets/victor.png'

const AboutScreen =() => {
    return(

        <div class='container'>
            <h2> Meet the Team</h2>
            <div class ="Card1" id= '1'style={{ backgroundImage: `url(${stephIcon})`}}  >
                  <h4>Stephanie</h4>
                  <p>lorem Ipsum</p>

            </div>
            <div class ="Card2 " id= '2'style={{ backgroundImage: `url(${gianIcon})`}} >
                  <h4>Gian</h4>
                  <p>lorem Ipsum</p>
            </div>
        <div class ="Card3" id='3'style={{ backgroundImage: `url(${gailIcon})`}} >
              <h4>Gail</h4>
              <p>lorem Ipsum</p>
        </div>
        <div class ="Card4" id='4'style={{ backgroundImage: `url(${gailIcon})`}} >
              <h5>Victor</h5>
              <p>lorem Ipsum</p>
        </div>
        <div class ="Card5" id='5'style={{ backgroundImage: `url(${adrianIcon})`}} >
              <h2>Adrian</h2>
              <p>lorem Ipsum</p>
        </div>
        <div class ="Card6" id='6'style={{ backgroundImage: `url(${gailIcon})`}} >
              <h2>Jalyn</h2>
              <p>lorem Ipsum</p>
        </div>
    </div>
    );
}
export default AboutScreen;

 
