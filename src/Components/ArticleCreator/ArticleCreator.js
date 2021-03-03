import React, { useState } from 'react';
import "./ArticleCreator.css"
import TextSection from "./TextSection/TextSection"
import articles from "../../data/articles.json"
const ArticleCreator = (props) => {

    const [article, setArticle] = useState()
    const [update, setUpdate] = useState(1)

    const [textSections, setTextSections] = useState([{
        sectionText: '',
        sectionID: 1
    }]);




    function createArticle() {

        let articleTitle = document.querySelector('.title-input').value;

        let newArticle = {
            articleTitle: articleTitle,
            articleSections: textSections,
            articleDate: "March 3rd, 2021",
            aritcleID: 1,
            articleAuthor: "Justin Kessler"
        }

        console.log(newArticle);
        setArticle(newArticle)
    }


    function articlePreview() {
        props.articlePreview(2)
        props.preview(article)
    }

    function addTextSection(text) {
        let old = textSections;
        console.log(old)
        old.push({
            sectionText: text,
            sectionID: textSections.length + 1
        });
        let newSection = old;
        setTextSections(newSection)
        setUpdate(update + 1)
    }

    function changeTextSection(text, id) {


        let sections = textSections;

        sections[id - 1].sectionText = text
        setTextSections(sections)
    }




    return (<div className="article-creator-container">

        <button className="publish-button" onClick={createArticle}>Publish</button>

        <div className="close-button" onClick={props.closeView}>X</div>


        <div className="article-setup-container">
            <div className="title-entry-container">
                <div>Title</div>
                <input className="title-input" placeholder='Enter Title' />
            </div>

            <div className="text-sections-wrapper">

                {textSections.map((section) => <TextSection changeText={changeTextSection} addSection={addTextSection} id={"text-section-" + section.sectionID} sectionID={section.sectionID} />)}


            </div>


            <button className="article-preview-button" onClick={articlePreview}>Preview Article</button>
        </div>





    </div>);
}

export default ArticleCreator;