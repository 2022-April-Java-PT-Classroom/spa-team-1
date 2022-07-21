import React, { createContext, useEffect, useState } from "react";

import Axios from 'axios';
import ReactSwitch from "react-switch";
import style from './style.module.scss';
import { useParams } from "react-router-dom";

export const ThemeContext = createContext(null);

const RewardScreen = () => {
// light/dark mode
    const [ theme, setTheme ] = useState("dark");
    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
// light/dark mode
    
    // const { id } = useParams();
    const [rewards, setRewards] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRewardsData = async () => {
            const result = await Axios('http://localhost:8080/api/rewards');
            setRewards(result.data);
        }

        if (rewards) {
            setLoading(false);
        }
        
        const timer = setTimeout(() => {
            !rewards && fetchRewardsData();

        }, 250);
        return () => clearTimeout(timer);
        //eslint-disable-next-line
    }, [rewards]);
    
    // useEffect(() => {
    //     const fetchRewardsData = async () => {
    //         const result = await Axios('http://localhost:8080/api/rewards');
    //         setRewards(result.data);
    //     }
    //     if (rewards) {
    //         setLoading(false);
    //     }
    //     const timer = setTimeout(() =>{
    //         !rewards && fetchRewardsData();
    //     }
    // }

    return (
        loading ? <h2>Loading...</h2> :
// light/dark mode
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="Contact" id={theme} >   
      <div className={theme=== 'dark' ? style.dark : style.light}>
      <div className="switch">
          {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
{/* light/dark mode */}

        <div>
            <section className={style.rewardsSection}>
            <div className={style.rewardsText}>
            <h3>These are the Rewards</h3>
            {rewards.map(rewards => (
                <p key={rewards.id}>
                    <h1 className="reward_name">Reward Name: {rewards.name}</h1>
                    <h2 className="reward_price">Price: {rewards.price}</h2>
                    <img id="rewards_image" alt="fake token">{rewards.urlImg}</img>
                    <h2 className="rarity">Rarity: {rewards.stars} </h2>
                    <h3 className="rewards_description">Description: {rewards.description}</h3>
                    </p>
            ))}
        </div>
        </section>
        </div>

     </div>
     </div>   
     </ThemeContext.Provider>      
    );
    
}

export default RewardScreen;