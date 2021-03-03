import React, { useState } from 'react';
import "./ArticleCreator.css"
import TextSection from "./TextSection/TextSection"
import articles from "../../data/articles.json"
const ArticleCreator = (props) => {

    const [article, setArticle] = useState()




    function createArticle() {

        let textareaText = document.querySelector('.text-section-input').value;
        let articleTitle = document.querySelector('.title-input').value;



        let newArticle = {
            articleTitle: articleTitle,
            articleSections: [
                { sectionText: textareaText }
            ],
            articleDate: "",
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




    return (<div className="article-creator-container">

        <button className="publish-button" onClick={createArticle}>Publish</button>

        <div className="close-button" onClick={props.closeView}>X</div>


        <div className="article-setup-container">
            <div className="title-entry-container">
                <div>Title</div>
                <input className="title-input" placeholder='Enter Title' />
            </div>

            <div className="text-sections-wrapper">
                <TextSection />

            </div>


            <button className="article-preview-button" onClick={articlePreview}>Preview Article</button>
        </div>





    </div>);
}

export default ArticleCreator;