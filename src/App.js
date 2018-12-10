import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import CreatePostForm from './containers/CreatePostPage';
import CreateClientForm from './containers/CreateClientPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/posts/new" component={CreatePostForm}/>
        </div>
      </Router>
    );
  }
}

export default App;
