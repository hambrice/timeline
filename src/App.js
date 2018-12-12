import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import CreatePostPage from './containers/CreatePostPage';
import CreateClientForm from './containers/CreateClientPage';
import PostShow from './containers/PostShowPage';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path="/posts/new" component={CreatePostPage}/>
            <Route path="/posts/:postId" component={PostShow}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
