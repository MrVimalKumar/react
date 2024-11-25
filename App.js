/* React.createElement() => returns Object
  <div id="parent">
    <div id="child">
      <h1> I am H1 Tag</h1>
      <h2> I am H2 Tag</h2>
    </div>
    <div id="child">
      <h1> I am H1 Tag</h1>
      <h2> I am H2 Tag</h2>
    </div>
  </div>
*/
import React from "react";
import ReactDOM from "react-dom/client";

const heading = (<h1 id="heading">I am Vimal Kumar R</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
