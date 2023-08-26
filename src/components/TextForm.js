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
          <h1 className="mb-2">{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="exampleFormControlTextarea1"
              rows="8"
              style={{
                backgroundColor:
                  props.mode === 'light' ? 'white' : 'rgb(185 188 218)',
                color: props.mode === 'light' ? 'black' : 'white',
              }}
            ></textarea>
          </div>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleDownClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>
        <div className="container my-2">
          <h2>Your Text Summary</h2>
          <p>
            {
              text.split(' ').filter((elem) => {
                return elem.length !== 0;
              }).length
            }{' '}
            words and {text.length} characters
          </p>
          <p>
            {0.008 *
              text.split(' ').filter((elem) => {
                return elem.length !== 0;
              }).length}{' '}
            minutes read
          </p>
          <h3>Preview</h3>
          <p>{text.length > 0 ? text : `Nothing to preview`}</p>
        </div>
      </div>
    </>
  );
}
