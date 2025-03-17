import React from "react";
import { useState } from "react";

export const LuseState = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>Use State</h1>
      <h2>{count}</h2>
      <button onClick={handleClick}>+ +</button>
      <button onClick={handleMinus}>- -</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
