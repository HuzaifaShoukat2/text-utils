
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const upperCaseCLick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };
  const lowerCaseCLick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Write Here");
  // text = "Wrong Way to  change the state"
  // setText("correct way to change state")
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3 my-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}}
          ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={upperCaseCLick}>UpperCase</button>
      <button className="btn btn-primary" onClick={lowerCaseCLick}>LowerCase</button>
      {/* <button className="btn btn-primary" onClick={wordsOnCLick}>Words Count</button> */}
      {/* <button className="btn btn-primary" onClick={lettersOnCLick}>Letters Count</button> */}
    </div>
    <div className="container my-2"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Reading time</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
    </div>
          </>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string.isRequired, // Here we specify that `heading` is expected to be a string and is required
};
