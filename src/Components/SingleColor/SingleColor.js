import React from "react";
import "./SingleColor.css";

export const SingleColor = ({ color }) => {
  return (
    <div className="single-color col-md-2 border border-white border-5 rounded p-0">
      <div style={{ backgroundColor: color }} className="color w-auto"></div>
      <p className="fs-6 m-0 pt-1 text-center bg-white">{color}</p>
    </div>
  );
};
