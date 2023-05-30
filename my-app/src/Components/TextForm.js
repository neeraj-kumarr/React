import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Uppercase was clicked", "success")

    };

    const handleLowClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Lowercase was clicked", "success")
    };

    const toggleCase = () => {
        console.log("Toggle Case was clicked" + text);
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            // If letter is uppercase, convert it into lowercase and vise versa
            newText += text[i] === text[i].toUpperCase() ? text[i].toLowerCase() : text[i].toUpperCase();
        }
        setText(newText)
        props.showAlert("Toggle was clicked", "success")

    };

    const titleCase = () => {
        const words = text.split(' ');
        const newText = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');

        setText(newText);
        props.showAlert("Title Case was clicked", "success")

    };


    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    };


    const [text, setText] = useState('')
    return (
        <div>
            <div className="container my-3">
                <h1 className="mb-4" style={{ color: props.mode === 'dark' ? 'whitesmoke' : 'black' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'whitesmoke' : 'black' }} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-success my-2 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-success my-2 mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-success my-2 mx-2" onClick={toggleCase}>ToggleCase</button>
                <button className="btn btn-success my-2 mx-2" onClick={titleCase}>Capitalize Each Word</button>
            </div>

            <div className="container" style={{ color: props.mode === 'dark' ? 'whitesmoke' : 'black' }}>
                <h2  >Your Text Summary</h2>
                <p>{text.trim().split(' ').length} words and {text.trim().length} characters</p>
                {/* if the time is less than 1 min, convert into seconds */}

                <p> {(1 / 125) * text.length} Minutes Read</p>
                <h1>Preview</h1>
                <p><i>{text}</i></p>

            </div>
        </div>
    )
}
