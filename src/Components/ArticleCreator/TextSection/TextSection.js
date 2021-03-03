import React, { useState } from 'react';
import "./TextSection.css"
const TextSection = (props) => {


    let [textareaHeight, setTextareaHeight] = useState(50)
    let [charactersLength, setCharacetersLength] = useState(0)





    function autoGrow() {

        let textareas = document.querySelector('.' + props.id);

        let areaWidth = textareas.getBoundingClientRect().width
        let characters = textareas.value;
        let theLength = characters.length;
        let max = areaWidth / 20;
        setCharacetersLength(theLength)
        if ((Math.floor(charactersLength / max)) < 1) {
            setTextareaHeight(50)
        }
        else {
            setTextareaHeight((((Math.floor(charactersLength / max)) * 40) * 0.8) + 50)
        }
        props.changeText(textareas.value, props.sectionID)
    }

    function addTextSection(e) {

        if (e.key === 'Enter') {
            let textareas = document.querySelector('.' + props.id);
            let theText = textareas.value;
            props.addSection(theText)
        }
    }


    return (<div className={"text-section-container"}>

        <button className="attach-button">+</button>

        <textarea onInput={autoGrow} onKeyDown={addTextSection} style={{ height: textareaHeight }} className={"text-section-input " + props.id} placeholder="Enter Story" />


    </div>);
}

export default TextSection;