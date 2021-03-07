import React, { useState, useEffect, useRef } from 'react';
import image1 from "../../../images/image1.jpg"
import "./TextSection.css"
const TextSection = (props) => {


    let [textareaHeight, setTextareaHeight] = useState(50)
    let [charactersLength, setCharacetersLength] = useState(0)
    const [menuState, setMenuState] = useState(0);
    const [imageBrowser, setImageBrowser] = useState(0);
    const [imageState, setImageState] = useState(0)


    const textFocus = useRef(null)
    useEffect(() => {

        setTimeout(() => {
            textFocus.current.focus()
        }, 10)
    }, [])


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
            props.addSection(theText, props.id)
            console.log(theText.length)
        }
    }


    function openInsertMenu() {
        if (menuState === 1) {
            setMenuState(0)
        }
        else {
            setMenuState(1)
        }
    }

    function renderInsertMenu() {
        if (menuState === 1) {
            return <div className="insert-menu-container">
                {renderImageBrowser()}
                <button className="insert-selection" onClick={openImageBrowser}>Image</button>
                <button className="insert-selection">List</button>
                <button className="insert-selection">Code Snippet</button>
            </div>
        }
    }


    function openImageBrowser() {

        if (imageBrowser === 0) {
            setImageBrowser(1)
        }
        else {
            setImageBrowser(0)
        }


    }

    function renderImageBrowser() {
        if (imageBrowser === 1) {
            return (<div className="image-browser-container">
                <div className="image1" onClick={insertImage}></div>
            </div>)
        }
    }

    function insertImage() {

        setImageState(1)

    }
    if (imageState === 1) {
        return (<div>IMAGE</div>)
    }


    return (<div className={"text-section-container"}>
        {renderInsertMenu()}
        <div className="attach-button" onClick={openInsertMenu}><span>+</span></div>
        <textarea ref={textFocus} onInput={autoGrow} onKeyDown={addTextSection} style={{ height: textareaHeight }} className={"text-section-input " + props.id} placeholder="Enter Story" />
    </div>);
}

export default TextSection;