import React from 'react';
import articles from "../../data/articles.json"
import "./ArticleReader.css"
const ArticleReader = (props) => {

    if (props.data != null) {
        return (<div className="article-reader-container">

            <div className="close-button" onClick={props.closeView}>X</div>

            <div className="article">
                <div className="article-title">{props.data.articleTitle}</div>
                <div className="article-info-container">
                    <div className="article-author">{props.data.articleAuthor}</div>
                    <div className="article-date-published">{props.data.articleDate}</div>
                </div>
                <div className="article-sections-container">
                    {props.data.articleSections.map((section) => <div className="article-section-view" key={section.sectionID}>{section.sectionText}</div>)}
                </div>
            </div>
        </div>)
    }





    else {
        return (<div className="article-reader-container">
            <div className="close-button" onClick={props.closeView}>X</div>
            <div className="article">
                {articles.articles.map((article) => <div>{article.articleTitle}</div>)}
            </div>
        </div>)
    }
}

export default ArticleReader;