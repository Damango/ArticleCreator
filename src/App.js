
import './App.css';
import React, { useState } from 'react';
import ArticleCreator from "./Components/ArticleCreator/ArticleCreator"
import ArticleReader from "./Components/ArticleReader/ArticleReader"
import ArticleList from "./Components/ArticleList/ArticleList"
function App() {

  const [appState, setAppState] = useState(0);
  const [tempArticle, setTempArticle] = useState()


  if (localStorage.getItem("articles") === null) {
    localStorage.setItem('articles', JSON.stringify([{
      articleID: 0,
      articleTitle: "First Article",
      articleAuthor: "Justin Kessler",
      articleDate: "March 8th 2021",
      articleSections: [
        {
          sectionID: 1,
          sectionText: "First of the texts"
        }
      ]
    }]))
  }


  function changeAppView() {
    if (appState === 1) {

    }
  }


  function closeView() {
    setAppState(0)
  }


  function tempSetArticleState(article) {
    setTempArticle(article)
    console.log(tempArticle)
  }


  function viewArticle(article) {
    let articles = JSON.parse(localStorage.getItem('articles'))
    let articlesLength = JSON.parse(localStorage.getItem('articles').length)
    let i;
    for (i = 0; i < articles.length; i++) {


      if (articles[i].articleID === article) {
        setTempArticle(articles[i])
        setAppState(2)
      }



    }

  }

  function renderNewState() {
    if (appState === 1) {
      return (<ArticleCreator closeView={closeView} articlePreview={setAppState} preview={tempSetArticleState} viewArticle={viewArticle} />)
    }
    else if (appState === 2) { return (<ArticleReader closeView={closeView} data={tempArticle} />) }

    else if (appState === 3) {
      return <ArticleList changeView={() => { setAppState(2) }} viewArticle={viewArticle} closeView={closeView} />
    }

    else {
      return (<div className="button-container">
        <button className="landing-page-button create" onClick={() => { setAppState(1) }}>Create Article</button>
        <button className="landing-page-button view" onClick={() => { setAppState(3) }}>View Article</button>
      </div>)


    }
  }


  return (
    <div className="App">


      {renderNewState()}


    </div>
  );
}

export default App;
