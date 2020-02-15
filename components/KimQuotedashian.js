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
