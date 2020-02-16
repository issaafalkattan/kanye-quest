<<<<<<< HEAD
import React from 'react';


const KimQuotedashian = ({quote}) => {

return (
    <h2 className="gradient-multiline">
    <span>"{quote}"</span></h2>

)
}

export default KimQuotedashian;
=======
import React from "react";

const KimQuotedashian = ({ quote }) => {
  return (
    <div>
      <h2 className="gradient-multiline">
        <span style={{ color: "white" }}>"{quote}"</span>
      </h2>
      <h3 style={{ color: "white", marginRight: "100px" }}>
        - Kanye West
      </h3>
    </div>
  );
};

export default KimQuotedashian;
>>>>>>> 2e7e19cb18a2d8138535acea515d5ffb3f771f74
