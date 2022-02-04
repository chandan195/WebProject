
import React, { useState } from "react";

const Home = (props) => {
  const myStyle = {
    margin: "10px 3px 3px 3px",

    width: " 10%",

    height: "40px",
  };

  const upperCaseConvert = () => {
    // console.log(" convert up case");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowerCaseConvert = () => {
    // console.log(" convert lower case");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log("handle on change");
  };

  const [text, setText] = useState("Enter Text here");

  return (
    <div className="container my-3">
      <h4> {props.heading} </h4>

      <div className="form-group">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          value={text}
          onChange={handleOnChange}
         
        ></textarea>
      </div>

      <div>
        <button
          type="button"
          style={myStyle}
          className="btn btn-primary"
          
          onClick={upperCaseConvert}
        >
          {" "}
          Upper case
        </button>

        <button
          type="button"
          style={myStyle}
          className="btn btn-primary"
          onClick={lowerCaseConvert}
        >
        Lower case
        </button>
      </div>

     
    </div>
  );
};

export default Home;
