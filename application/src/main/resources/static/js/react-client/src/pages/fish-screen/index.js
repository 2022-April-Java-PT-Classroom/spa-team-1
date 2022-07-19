import React, { useEffect, useState } from 'react';

import Axios from 'axios';

const FishPage = () => {
  
    const [fishes, setFishes] = useState(null);
    const [loading, setLoading] = useState(true);

//     useEffect(() => async () => {
//         const result = await Axios('https://www.fishwatch.gov/api/species');
//         setFishes(result.data);
//     }
//      if(fishes){
//         setLoading(false);
//      }
     
//      const timer = setTimeout(() =>{
//         !fishes && fetchFishData();
//      }, 1000);
     
//      return () =>)
// }

export default FishPage;