import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleLowClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)

    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }





    const [text, setText] = useState('')
    return (
        <div>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-success my-2 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-success my-2 mx-2" onClick={handleLowClick}>Convert to UpperCase</button>
            </div>

            <div className="container">
                <h2 >Your Text Summary</h2>
                <p>{text.trim().split(' ').length} words and {text.trim().length} characters</p>
                {/* if the time is less than 1 min, convert into seconds */}
                {((1 / 125) * text.length) < 1 ?
                    <p> {(1 / 125) * text.length * 60} Seconds Read</p> :
                    <p> {(1 / 125) * text.length} Minutes Read</p>
                }

                <h1>Preview</h1>
                <p><i>{text}</i></p>

            </div>
        </div>
    )
}
