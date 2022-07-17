import React, { useState } from "react";

import axios from 'axios';
import style from './style.module.scss';

const RewardScreen = ({RewardScreen}) => {
    const [rewardsState, setRewardsState] = useState(rewards);

    const [rewardsState, setRewardsState] = useState({
        name: "",
        isSelected: false
    });
    return (
        <div>
            <h2>This is the reward screen</h2>
        </div>
        
    );
    
}

export default RewardScreen;