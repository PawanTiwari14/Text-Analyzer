import React, { useState } from "react";
// import Button from "./Button";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter your text here");
  return (
    <>
      <div
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="m-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="6"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
                color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleUpClick}
        >
          To UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleLowClick}
        >
          To LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <div className="container m-3">
          <h3>Text Summary</h3>
          <p>
            {text.split(" ").length} words and {text.length} Charaters
          </p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

{
  /* // TextForm.defaultProps = {
//     name: 'Stranger'
//   }; */
}
