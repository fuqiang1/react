import React, { Component } from 'react';
import About from './components/About';
import Input from './components/Input';
// import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './styles/App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <About />
        <Input />
      </div>
    );
  }
}

export default App;
