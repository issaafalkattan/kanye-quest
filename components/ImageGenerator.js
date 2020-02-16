import React, { Children } from "react";

const ImageGenerator = ({ imageUrl, children }) => {
  return (
    <img
      src={imageUrl}
      style={{
        position: "fixed",
        objectFit: "cover",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: -1
      }}
    />
  );
};

export default ImageGenerator;
