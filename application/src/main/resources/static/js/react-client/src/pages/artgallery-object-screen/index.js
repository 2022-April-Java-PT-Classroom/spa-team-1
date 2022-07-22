import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";

import { useParams } from "react-router-dom";

const ArtObjectPage = () => {

    const { id } = useParams();
    const [artObject,setArtObject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArtObjectData = async () => {
            const result = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/208058`);
            console.log(result.data);
            setArtObject(result.data);
        }

        if(artObject) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !artObject && fetchArtObjectData();
        }, 500);

        return () => clearTimeout(timer);

    }, [artObject]);


        return (
            loading ? <h3>Creating art...</h3> :
            <div className={style.artObjectContainer}>
            //     <h1>The Metropolitan Museum of Art</h1>
            //   <h2>{artObject.title}</h2>
            //   <h5>{artObject.accessionYear}</h5>
            //   <h3>{artObject.artistDisplayName}</h3>
            //   <img src={artObject.primaryImage} />
            //   </div>
              );
        }
        export default ArtObjectPage;
    
    

