import React from "react";
import { useState } from "react";

const LearnConditional = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [status, setStatus] = useState(true);
  return (
    <>
      <h1>Conditional Rendering</h1>
      {isLoggedIn ? <h2>Welcome, User</h2> : <h2>Welcome, Guest</h2>}

      {status && <h3>Show data</h3>}
    </>
  );
};

export default LearnConditional;
