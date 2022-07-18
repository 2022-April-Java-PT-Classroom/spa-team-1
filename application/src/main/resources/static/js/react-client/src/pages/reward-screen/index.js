import React, { useEffect, useState } from "react";

import Axios from 'axios';
import style from './style.module.scss';
import { useParams } from "react-router-dom";

const RewardScreen = () => {
    // const { id } = useParams();
    const [rewards, setRewards] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRewardsData = async () => {
            const result = await Axios('http://localhost:8080/api/rewards');
            console.log(result.data);
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

    return (
        loading ? <h2>Loading...</h2> :
        <div>
            <section className={style.rewardsSection}>
            <div className={style.rewardsText}>
            <h3>These are the Rewards</h3>
            {rewards.map(rewards => (
                <p key={rewards.id}>
                    <h1 class="reward_name">Reward Name: {rewards.name}</h1>
                    <h2 class="reward_price">Price: {rewards.price}</h2>
                    <img id="rewards_image" alt="fake token">{rewards.urlImg}</img>
                    <h2 class="rarity">Rarity: {rewards.stars} </h2>
                    <h3 class="rewards_description">Description: {rewards.description}</h3>
                    </p>
            ))}
        </div>
        </section>
        </div>
    );
    
}

export default RewardScreen;