import React from 'react';
import articles from "../../data/articles.json"
import "./ArticleReader.css"
const ArticleReader = (props) => {


    if (props.data != null) {
        return (<div className="article-reader-container">

            <div className="close-button" onClick={props.closeView}>X</div>
            <div>Article Reader</div>

            <div className="article">
                {props.data.articleTitle}
            </div>


        </div>)
    }





    else {
        return (<div className="article-reader-container">

            <div className="close-button" onClick={props.closeView}>X</div>
            <div>Article Reader</div>

            <div className="article">
                {articles.articles.map((article) => <div>{article.articleTitle}</div>)}
            </div>


        </div>)
    }
}

export default ArticleReader;