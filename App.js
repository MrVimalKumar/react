import React from "react";
import ReactDOM from "react-dom/client";

const heading = (<h1 id="heading">I am Vimal Kumar R</h1>);

const Heading1 = () => <h1>I have Completed 3 Epdisode of Javascript in Namaste React Course</h1>

const Heading2 = () =>(
  <div>
    {heading}
    <h1 className="heading">I am Studying React JS from Namaste React course</h1>
    <Heading1/>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading2/>);
