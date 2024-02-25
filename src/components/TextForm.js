import React, { useState } from "react";
// import { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("Enter text here ");
  // setText("text has been replaced");
  // setText("set text");

  return (
    <>
      <div className="mb-3">
        <h1 className="text-start">{props.heading}</h1>
        {/* <label htmlFor="textform" className="form-label "> */}
        {/* Enter text
        </label> */}
        <textarea className="form-control" id="textform" rows="6">
          {text}
        </textarea>
        <button className="btn btn-primary">convert to uppercase</button>
      </div>
    </>
  );
}
