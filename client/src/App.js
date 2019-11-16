import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Code from './components/questions/code-page.js'
import Login from './components/login/login.js'
import Home from './components/group-list/group-list.js'
import Questions from './components/questions/questions-page.js'
import Main from './components/main/main.js'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ Main } />
            <Route path="/teacher/login" exact component={ Login } />
            <Route path="/teacher" exact component={ Home } />
            <Route path="/student/login" exact component={ Code } />
            <Route path="/student" exact component={ Questions } />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
