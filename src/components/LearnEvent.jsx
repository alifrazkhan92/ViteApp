import React from "react";

const LearnEvent = () => {
  const handleClick = () => {
    console.log("Button Clicked");
  };

  const handleClickAgain = (props) => {
    console.log(props);
  };
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <br />
      <br />
      <button onClick={() => handleClickAgain("Clicked Again")}>
        Click Again
      </button>
    </>
  );
};

export default LearnEvent;
