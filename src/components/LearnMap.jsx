import React from "react";

const LearnMap = () => {
  const names = ["John", "Doe", "Jane", "Doe"];
  return (
    <>
      <h1>Learn Map</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default LearnMap;
