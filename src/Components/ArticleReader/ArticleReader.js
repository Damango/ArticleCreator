import React from 'react';

const ArticleReader = (props) => {
    return (<div className="article-reader-container">

        <div className="close-button" onClick={props.closeView}>X</div>
        <h1>Article Reader</h1>


    </div>);
}

export default ArticleReader;