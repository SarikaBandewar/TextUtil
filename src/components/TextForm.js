import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log('Upper clicked');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase ', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase ', 'success');
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Text Cleared', 'success');
  };

  const [text, setText] = useState('Enter Text Here');
  //   setText('new text');

  return (
    <>
      <div
        style={{
          backgroundColor: props.mode === 'light' ? 'white' : '#12195c',
          color: props.mode === 'light' ? 'black' : 'white',
        }}
      >
        <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="exampleFormControlTextarea1"
              rows="8"
              style={{
                backgroundColor: props.mode === 'light' ? 'white' : '#12195c',
                color: props.mode === 'light' ? 'black' : 'white',
              }}
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleDownClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear Text
          </button>
        </div>
        <div className="container my-2">
          <h2>Your Text Summary</h2>
          <p>
            {text.split(' ').length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(' ').length} minutes read</p>
          <h3>Preview</h3>
          <p>
            {text.length > 0
              ? text
              : `Enter something in textbox to see preview`}
          </p>
        </div>
      </div>
    </>
  );
}
