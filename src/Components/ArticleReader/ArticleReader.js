import React from "react";
import articles from "../../data/articles.json";
import "./ArticleReader.css";
const ArticleReader = (props) => {
<<<<<<< HEAD


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

console.log(articles.articles[0]);
return (
    <div className="article-reader-container">
        <div className="close-button" onClick={props.closeView}>
            X
      </div>
        <h1>Article Reader</h1>

        <div className="article">
            {articles.articles.map((article) => (
                <div>{article.articleTitle}</div>
            ))}
        </div>
    </div>
);
};

export default ArticleReader;
>>>>>>> a284c60a6e9e4b129dac5f612d56b62f628d13c1
