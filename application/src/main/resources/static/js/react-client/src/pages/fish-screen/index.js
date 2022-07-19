import React, { useEffect, useState } from 'react';

import Axios from 'axios';

const FishPage = () => {
  
    const [fishes, setFishes] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFishesData = async () => {
            const result = await Axios('https://www.fishwatch.gov/api/species');
            setFishes(result.data);
        }
        
        if(fishes){
            setLoading(false);
        }

        const timer = setTimeout(() =>{
            !fishes && fetchFishesData();
        }, 1000);
        
        return ()=> clearTimeout(timer);
        
    }, [fishes]);

}

export default FishPage;