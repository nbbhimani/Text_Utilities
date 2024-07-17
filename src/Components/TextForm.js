import React, {useState} from 'react'


export default function TextForm(props) {
    
    const [text, setText] = useState("");


    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Your text has been converted to uppercase", "success");
    }


    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Your text has been converted to lowercase", "success");
    }


    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared ", "success");
    }


    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }


    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been Copied to Clipboard", "success");
    }


    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed from the text", "success");
    }



    return (
        <>
        <div>
            <h4 className={`my-3 text-${props.mode==='light'?'dark':'light'}`}> {props.heading}</h4>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here' style={{backgroundColor: props.mode === 'dark' ? '#c7cccf' : 'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} type="submit" onClick={speak} >Listen Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h4>Your text summary</h4>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters with spaces</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h4>Your text Preview</h4>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}