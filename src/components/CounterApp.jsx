import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const deacreseCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={increaseCount}>++</button>
      <button onClick={deacreseCount}>--</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
};

export default CounterApp;
