import React, {useState} from "react";

import ReactDom from'react-dom';
import adrianIcon from '../../assets/about/adrian.png'
import gailIcon from '../../assets/about/gail.png';
import gianIcon from '../../assets/about/gian.png';
import stephIcon from '../../assets/about/steph.png';
import style from './style.module.scss';
import victorIcon from '../../assets/about/victor.png'

// import jalynIcon from '../../assets/jalyn.png'
//  <img src = {gailIcon} alt = ' gail pic' />


const AboutScreen =() => {
    return(

        <div class='container'>
            <h4 className="aboutHF"> Meet the Team</h4>
            <div className="Card1" id= '1'>
                  <h2 className="aboutH2">Stephanie</h2>
                  <img src={stephIcon} alt="Stephanie Pic" /> 
                  <p>lorem Ipsum</p>

            </div>
            <div className="Card2 " id= '2'>
                  <h2 className="aboutH2">Gian</h2>
                  <img src={gianIcon} alt="Gian Pic" />
                        <p>lorem Ipsum</p>
            </div>
        <div className="Card3" id='3'>
              <h2 className="aboutH2">Gail</h2>
              <img src={gailIcon} alt="Gail Pic" />
              <p>lorem Ipsum</p>
        </div>
        <div className="Card4" id='4'>
              <h2 className="aboutH2">Victor</h2>
              <img src={victorIcon} alt="Vic pic" />
              <p>lorem Ipsum</p>
        </div>
        <div className="Card5" id='5'>
              <h2 className="aboutH2">Adrian</h2>
              <img src={adrianIcon} alt="Adrian Pic" />
              <p>lorem Ipsum</p>
        </div>
        <div className="Card6" id='6'>
              <h2 className="aboutH2">Jalyn</h2>
              <img src={gailIcon} alt="Jalyn Pic" />
              <p>lorem Ipsum</p>
        </div>
    </div>
    );
}
export default AboutScreen;

 
