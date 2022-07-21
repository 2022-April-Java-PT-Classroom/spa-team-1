import React, { useEffect, useState } from 'react';

import Axios from 'axios';

const randomNum = Math.floor((Math.random() * 116));

const FishPage = () => {
  
    const [fishes, setFishes] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        
        const fetchFishesData = async () => {
            const result = await Axios('https://www.fishwatch.gov/api/species');
            setFishes(result.data[randomNum]);
            console.log(result.data);
        }
        
        if(fishes){
            setLoading(false);
        }

        const timer = setTimeout(() =>{
            !fishes && fetchFishesData();
        }, 1000);
        
        return ()=> clearTimeout(timer);
        
    }, [fishes]);

return (
    loading ? <h3>loading fish...</h3> :
    <div>
        <h3>{fishes['Species Name']}</h3>
        <h3>{fishes['Scientific Name']}</h3>
        <img src={fishes['Species Illustration Photo'].src}></img>
        <h4>{fishes['Quote']}</h4>
        <div>
            <ul>NOAA Fisheries Region : {fishes['NOAA Fisheries Region']}</ul>
            <ul>Population : {fishes['Population']}</ul>
            <ul>Calories : {fishes['Calories']}</ul>
            <ul>Carbohydrate : {fishes['Carbohydrate']}</ul>
            <ul>Cholesterol : {fishes['Cholesterol']}</ul>
            <ul>FatTotal : {fishes['Fat, Total']}</ul>
            <ul>Fiber, Total Dietary : {fishes['Fiber, Total Dietary']}</ul>
            <ul>Sodium : {fishes['Sodium']}</ul>
            </div>
    </div>
    );
};

export default FishPage;