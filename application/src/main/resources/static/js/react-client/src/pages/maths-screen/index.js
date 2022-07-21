import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Axios } from "axios";
import ReactSwitch from "react-switch";

const MathsScreen = () => {

    const {id} = useParams();
    const [math, setMath] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMathData = async () => {
         const result = await Axios (`http://localhost:8080/math/${id}`)
         setMath(result.data)
        }

        if(math){
            setLoading(false);
        }

        const timer = setTimeout(() =>{
            !math && fetchMathData();
        }, 250);
        return ()=> clearTimeout(timer);
        // eslint-disable-next-line
    }, [math])

    
    return(
        <h2>Maths Screen</h2>
    );

}

export default MathsScreen;