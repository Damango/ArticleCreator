import React from 'react';
import "./ArticleCreator.css"
import articles from "../../data/articles.json"
const ArticleCreator = (props) => {
    return (<div className="article-creator-container">

        <div className="close-button" onClick={props.closeView}>X</div>
        <h1>Article creator</h1>

        <div className="article-setup-container">


        </div>



    </div>);
}

export default ArticleCreator;