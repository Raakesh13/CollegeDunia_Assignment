import React from "react";
import College from "./College";
import "../styles/styles.css";

const CollegeList = (props) => {
  return (
    <div className="Colleges">
      <p>Colleges in North India</p>
      <div className="College-List">
        {props.collegeList.map((college) => {
          return <College key={college["college_name"]} college={college} />;
        })}
      </div>
    </div>
  );
};

export default CollegeList;
