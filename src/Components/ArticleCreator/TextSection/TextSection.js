import React, { useState } from 'react';
import "./TextSection.css"
const TextSection = (props) => {


    let [textareaHeight, setTextareaHeight] = useState(50)
    let [charactersLength, setCharacetersLength] = useState(0)
    let [counter, setCounter] = useState(0)




    function autoGrow() {

        let textareas = document.querySelector('.text-section-input');
        let areaWidth = textareas.getBoundingClientRect().width
        let characters = textareas.value;
        let theLength = characters.length;
        let max = areaWidth / 20;

        setCharacetersLength(theLength)

        if ((Math.floor(charactersLength / max)) < 1) {

            setTextareaHeight(50)

        }
        else {
            // setTextareaHeight(((Math.floor(charactersLength / max)) * 40) + 50)
            setTextareaHeight((((Math.floor(charactersLength / max)) * 40) * 0.8) + 50)
        }

    }


    return (<div className="text-section-container">

        <button className="attach-button">+</button>

        <textarea onInput={autoGrow} style={{ height: textareaHeight }} className="text-section-input" placeholder="Enter Story" />


    </div>);
}

export default TextSection;