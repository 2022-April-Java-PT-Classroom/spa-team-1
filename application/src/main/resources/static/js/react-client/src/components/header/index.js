import React, { Component } from "react";

import JaclogoD from '../../assets/logo/JAC-Game-dark.png';
import { NavLink } from "react-router-dom";
import shell from '../../assets/homepagepics/shell.gif';
import song from '../../assets/audio/theme.mp3';
import style from './style.module.scss';

class Header extends Component {

    state = {
        audio: new Audio(song), 
        isPlaying: false,
      };
      
      playPause = () => {
        let isPlaying = this.state.isPlaying;
      
        if(isPlaying) {
          this.state.audio.pause();
        } else {
          this.state.audio.play();
        }
        this.setState({isPlaying: !isPlaying});
      };
      
        render(){

    return (
        <div className={style.header}>
            <ul className={style.navList}>
                <div>
              <p>
                {this.state.isPlaying ?
                "Song is Playing" : 
                "Song is Paused"}
              </p>
              <button onClick={this.playPause}><img className={style.bowser} src={shell} alt="Bowser Shell"/>
              </button>
            </div>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <NavLink to={'/reward'}>Rewards</NavLink>
                {/* <NavLink to={'/artgallery-screen'}>Art Gallery</NavLink> */}
                <img className={style.image} src={JaclogoD} alt='JAC Logo' />
            </ul>
        </div>
    )
}

}

export default Header;