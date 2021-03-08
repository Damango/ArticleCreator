import React from 'react';
import ArticleReader from "../../ArticleReader/ArticleReader"
import "./Article.css"
const Article = (props) => {
    return (<div className="article-container" onClick={() => { props.viewArticle(props.data.articleID) }}>

        <div className="article-card-title">{props.data.articleTitle}</div>



    </div>);
}

export default Article;