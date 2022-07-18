import React from "react";

const GalaxyImages = ({ images }) => {
  return images.map((image, index) => {
    return (
      <div key={index}>
        <p></p>
        <img src={image.links && image.links[0].href} alt="" />
        <p></p>
      </div>
    );
  });
};
export default GalaxyImages;