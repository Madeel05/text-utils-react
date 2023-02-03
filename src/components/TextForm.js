import React, { useState } from 'react';

export default function TextForm(props) {

    document.title = "TextUtils - Home"

    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text in Upper case" , "success");
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text in Lower case" , "success");
    }

    const handleText = (e) => {
        setText(e.target.value);
    }

    const handleClearText = () => {
        setText('');
        props.showAlert("Text cleared" , "success");
    }

    const copyText =  () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Clipboad" , "success");
     }

     const removeSpaces = () => {
        let nText = text.split(/[ ]+/);
        setText(nText.join(" "));
        props.showAlert("Extra spaces Remove" , "success");
     }
    return (
        <>
            <div className="container my-5" style={{
                color: props.mode === 'light' ? 'black' : '#ffffff'
            }}>
                <h2>Enter Text To Aanalyz</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" style={{
                        backgroundColor: props.mode === 'light' ? '#ffffff' : 'rgb(33 34 36)',
                        color: props.mode === 'light' ? 'black' : '#ffffff'
                    }} onChange={handleText} value={text} rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={copyText}>Copy text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={removeSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container mt-1 my-3" style={{
                color: props.mode === 'light' ? 'black' : '#ffffff'
            }}>
                <h2>Your Text Summary</h2>
                <p>{text.trim().length === 0 ? 0 : text.trim().split(" ").length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something to above box to preview"}</p>
            </div>
        </>
    )
}
