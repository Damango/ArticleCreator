import React from "react";
import articles from "../../data/articles.json";
import "./ArticleReader.css";
const ArticleReader = (props) => {
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
