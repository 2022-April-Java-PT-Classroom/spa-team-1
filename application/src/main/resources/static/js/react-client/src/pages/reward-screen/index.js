import React, { useEffect, useState } from "react";

import Axios from 'axios';
import style from './style.module.scss';
import { useParams } from "react-router-dom";

const RewardScreen = () => {
    const { id } = useParams();
    const [rewards, setRewards] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRewardsData = async () => {
            const result = await Axios(`http://localhost:8080/api/reward/${id}`)
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
    }, [rewards])

    return (
        loading ? <h2>Loading...</h2> :
        <div>
            <h3>These are the Rewards</h3>
            {rewards.map(rewards => (
                <p key={rewards.id}>{rewards.name}{rewards.price} {rewards.urlImg} {rewards.stars} {rewards.description}</p>
            ))}
        </div>
    );
    
}

export default RewardScreen;