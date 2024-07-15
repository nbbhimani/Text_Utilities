import React, {useState} from 'react'       // Here we import "useState" to use "state" variable


export default function TextForm(props) {
    
    const [text, setText] = useState('Enter text here');        // See below comment # 1

    // text = "sjgldhvrjsndll";        // We can not update state/value of "text" variable when it is declared using "useState" as above


    const handleOnChange = (event) =>{       // This we used below in textarea element inside the JSX
        // console.log("On Change");
        setText(event.target.value);         // Remember this -- We will use this in "handleOnChange" function again & again in future
    }
    


    const handleUpClick = () =>{        // This we used below in button element inside the JSX
        // console.log(text);        // This we can see in console section after click on the button
        let newText = text.toUpperCase();
        setText(newText);       // This will change the state/value of the "text" variable after click on button & we can see it in "textbox" on web page
        props.showAlert("Your text has been converted to uppercase", "success");
    }


    const handleLoClick = () =>{        // This we used below in button element inside the JSX
        let newText = text.toLowerCase();
        setText(newText);       // This will change the state/value of the "text" variable after click on button & we can see it in "textbox" on web page
        props.showAlert("Your text has been converted to lowercase", "success");
    }


    const handleClearClick = () =>{        // This we used below in button element inside the JSX
        let newText = "";
        setText(newText);       // This will change the state/value of the "text" variable after click on button & we can see it in "textbox" on web page
        props.showAlert("Text Cleared ", "success");
    }


    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }


    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
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
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" type="submit" onClick={speak} >Speak</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h4>Your text summary</h4>
            <p>{text.split(" ").length-1} words and {text.length} characters with spaces</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h4>Your text Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}


// Comment # 1 ----- Here we add/declare a "state" variable "text" with the function name "setText" of it - Here Initial state of the variable "text" is 'Enter text here' & it will be updated with the use of the function "setText" whenever we will update it & it will update when we type something in the "Text box"  on webpage & click on
