import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const LearnUseEffect = () => {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(0);

  const handlePluse = () => {
    setCount(count + 1);
  };

  const handleRandom = () => {
    setRandom(Math.floor(Math.random() * 100));
  };

  useEffect(() => {
    console.log("UseEffect called");
    return () => {
      console.log("Clean up");
    };
  }, [count, random]);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handlePluse}>++</button>
      <hr />
      <h2>Random Number: {random}</h2>
      <button onClick={handleRandom}>Random</button>
    </>
  );
};
