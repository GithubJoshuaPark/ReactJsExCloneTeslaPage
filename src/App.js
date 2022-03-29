import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  function onCloseHandler(event) {
    console.log(`🍎 ~ file: App.js ~ line 11 ~ onCloseHandler ~ imsi`, event);
  }
    
  return (
    <div className="App">
      <Header onClick={onCloseHandler}/>
      <Home/>
    </div>
  );
}

export default App;
