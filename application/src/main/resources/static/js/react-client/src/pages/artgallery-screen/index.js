import React, { useEffect, useState } from "react";

import ArtImages from "./ArtImages";
import Axios from "axios";

const ArtgalleryScreen = () => {

    const [art, setArt] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArtData = async () => {
            const result = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/437`);
            console.log(result.data);

            setArt(result.data);
        };

        if(art) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !art && fetchArtData();
        }, 500);

        return () => clearTimeout(timer);
        }, [art]);



    return (
        loading ? <h3>Creating art...</h3> :
        <div>
            <h2>This is the art Gallery</h2>
          <h4>Art</h4>
          <h5>{art.objectID}</h5>
          <h5>{art.objectName}</h5>
          <img src={art.primaryImage} />

        </div>
        
    );
    

};
export default ArtgalleryScreen;