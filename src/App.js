
import './App.css';
import React, { useState } from 'react';
import ArticleCreator from "./Components/ArticleCreator/ArticleCreator"
import ArticleReader from "./Components/ArticleReader/ArticleReader"
function App() {

  const [appState, setAppState] = useState(0);


  function changeAppView() {
    if (appState === 1) {

    }
  }


  function closeView() {
    setAppState(0)
  }

  function renderNewState() {
    if (appState === 1) {
      return (<ArticleCreator closeView={closeView} />)
    }
    else if (appState === 2) { return (<ArticleReader closeView={closeView} />) }


    else {
      return (<div className="button-container">
        <button className="landing-page-button create" onClick={() => { setAppState(1) }}>Create Article</button>
        <button className="landing-page-button view" onClick={() => { setAppState(2) }}>View Article</button>
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
