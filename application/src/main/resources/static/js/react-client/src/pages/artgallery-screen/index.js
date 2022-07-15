import React, { useEffect, useState } from "react";

import Axios from "axios";

const ArtgalleryScreen = () => {

    const [art, setArt] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArtData = async () => {
            const result = await Axios('http://collectionapi.metmuseum.org/public/collection/v1/objects');
            setArt(result.data);
        }

        if(art) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !art && fetchArtData();
        }, 500);

        return () => clearTimeout(timer);
        }, [art]);



    return (
        <div>
            <h2>This is the art Gallery</h2>
            {loading ? <h3>Creating art...</h3> : art.map(art => (
            <p>{art.objectName}</p>
            ))}

        </div>
        
    );
    

};
export default ArtgalleryScreen;