import React from "react";

const LearnProps = ({ brand, total }) => {
  return (
    <>
      <h2>Condition: {brand}</h2>
      <h3>The total is {total}</h3>
    </>
  );
};

export default LearnProps;
