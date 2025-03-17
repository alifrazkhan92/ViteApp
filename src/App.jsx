import "./App.css";
import CounterApp from "./components/CounterApp";
import Forms from "./components/Forms";
import InlineCSS from "./components/InlineCSS";
import LearnConditional from "./components/LearnConditional";
import LearnEvent from "./components/LearnEvent";
import LearnJSX from "./components/LearnJSX";
import { LearnLiftStatUp } from "./components/LearnLiftStatUp";
import LearnMap from "./components/LearnMap";
import LearnProps from "./components/LearnProps";
import { LearnUseEffect } from "./components/LearnUseEffect";
import LearnUseMemo from "./components/LearnUseMemo";
import LearnUseState from "./components/LearnUseState";
import LoadingImages from "./components/LoadingImages";
import { LuseState } from "./components/LuseState";

function App() {
  const brand = "Brand New";
  const total = "1 + 1";
  const getStock = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>An AI project for live stocks</h1>
      {/*<LearnJSX />
      <LearnProps brand={brand} total={total} />
      <LearnEvent />
      <LearnLiftStatUp getStock={getStock} />
      <LearnUseState />
      <CounterApp />
      <LuseState />
      <LearnUseEffect />
      <LearnUseMemo />
      <LearnConditional />
      <LearnMap />
      <InlineCSS />
      <LoadingImages />*/}
      <Forms />
    </>
  );
}

export default App;
