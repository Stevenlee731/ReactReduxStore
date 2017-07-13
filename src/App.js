import React, { Component } from 'react';
import BookList from './components/books/BooksList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList/>
      </div>
    );
  }
}

export default App;
