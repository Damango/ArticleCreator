import React, { useState } from 'react';
import Article from "./Article/Article"
import "./ArticleList.css"
const ArticleList = (props) => {

    const [articles, setArticles] = useState(JSON.parse(localStorage.getItem('articles')))



    return (<div className="article-list-container">

        <div className="close-button" onClick={() => { props.closeView() }}>X</div>

        {articles.map((article) => <Article data={article} viewArticle={props.viewArticle} />)}


    </div>);
}

export default ArticleList;