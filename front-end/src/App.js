import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';


import { Home } from './components/homeComponent.js';
import { Tetris } from './components/tetrisComponent.js';
import { SignUp } from './components/signUpComponent.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route path="/" exact={true} component={ Home } />
        <Route path="/tetris" component={ Tetris } />
        <Route path="/signup" component={ SignUp } />

      </div>


    </BrowserRouter>

  );
}

export default App;
