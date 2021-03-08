import React from 'react';
import "./ArticleSection.css"

const ArticleSection = (props) => {


    if (props.data.image === true) {
        return (<img className="reader-image" src={props.data.sectionText} />)
    }




    return (<div className="article-section-view">{props.data.sectionText}</div>);
}

export default ArticleSection;