import { useState } from "react";

const LearnUseState = () => {
  const [num, setNum] = useState(5);
  console.log(num);

  const handleNum = () => {
    setNum(num + 1);
  };

  const [stockPrice, setStockPrice] = useState({ stock: "Apple", price: 100 });
  console.log(stockPrice);

  const updateStockPrice = () => {
    setStockPrice({ ...stockPrice, price: 200 });
  };

  return (
    <>
      <h2>Learn UseState</h2>
      <p>{num}</p>
      <button onClick={handleNum}>Click Me</button>
      <hr />
      <h2>
        {stockPrice.stock} : {stockPrice.price}
      </h2>
      <button onClick={updateStockPrice}>Change Stock Price</button>
    </>
  );
};

export default LearnUseState;
