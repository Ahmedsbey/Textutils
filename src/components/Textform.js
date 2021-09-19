import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log('handleUpClick')
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowClick = ()=>{
        console.log('handleUpClick')
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleReset = ()=>{
        console.log('handleUpClick')
        let newText = ''
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log('handleOnChange')
        setText(event.target.value)
    }
    const handleCopy = ()=>{
        var text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text,setText] = useState('Enter your text');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
  <textarea className="form-control" id="myBox" value={text} rows="10" onChange={handleOnChange}></textarea>
</div>
<button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-3 my-3" onClick={handleReset}>Reset</button>
<button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy</button>
<button className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
