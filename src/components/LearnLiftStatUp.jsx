import React from "react";

export const LearnLiftStatUp = () => {
  const handleClick = (props) => {
    let stock = "Tesla";
    props.getStock(stock);
  };

  return (
    <>
      <h1>Stock Market</h1>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};
