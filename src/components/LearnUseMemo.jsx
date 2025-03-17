import React from "react";
import { useState } from "react";
import { useMemo } from "react";

const LearnUseMemo = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(100000000);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const sumOfNumbers = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }, [number]);

  console.log(`Sum of number is ${number}:`, sumOfNumbers);

  return (
    <>
      <h1>Learn Memo</h1>
      <h3>Count: {count}</h3>
      <button onClick={increaseCount}>Increase Count</button>
    </>
  );
};

export default LearnUseMemo;
