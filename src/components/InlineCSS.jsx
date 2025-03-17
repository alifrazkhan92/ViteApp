import React from "react";

const InlineCSS = () => {
  const container = {
    fontSize: "18px",
    fontWeight: 600,
    color: "red",
  };
  return (
    <>
      <p style={container}>Hello, this is the paragraph</p>

      <div>
        <h1 style={{ color: "blue" }}>This is a heading</h1>
        <p style={{ fontSize: "18px", fontWeight: 600, color: "red" }}></p>
        Hello, this is the paragraph
      </div>
    </>
  );
};

export default InlineCSS;
