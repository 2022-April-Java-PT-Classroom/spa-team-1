import React, { useEffect, useState } from "react";

import Axios from "axios";
import GalaxyImages from "./GalaxyImages";

const AstronomyScreen = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios('https://images-api.nasa.gov/search?q=galaxy');
      console.log(result.data);
      setImages(result.data.collection.items);
    };
    if (images) {
      setLoading(false);
    }
    const timer = setTimeout(() => {
      !images && fetchData();
    }, 1000);
    return () => clearTimeout(timer);
  }, [images]);
  return (
    <div>
      <h2>Galaxies</h2>
      <section>
        {loading ? <h3>Loading ...</h3> : <GalaxyImages images={images} />}
      </section>
    </div>
  );
};
export default AstronomyScreen;