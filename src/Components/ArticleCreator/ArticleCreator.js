import React from 'react';
import "./ArticleCreator.css"
const ArticleCreator = (props) => {
    return (<div className="article-creator-container">

        <div className="close-button" onClick={props.closeView}>X</div>
        <h1>Article creator</h1>



    </div>);
}

export default ArticleCreator;