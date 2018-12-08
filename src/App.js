import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import CreatePostForm from './containers/CreatePostPage';
import CreateClientForm from './containers/CreateClientPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreatePostForm/>
        <CreateClientForm/>
      </div>
    );
  }
}

export default App;
