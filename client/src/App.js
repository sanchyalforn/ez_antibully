import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Code from './components/questions/code-page.js'
import Login from './components/login/login.js'
import Home from './components/group-list/group-list.js'
import Main from './components/main/main.js'
import Relations from './components/questions/questions-relations.js'
import Feelings from './components/questions/questions-feelings.js'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ Main } />
            <Route path="/teacher/login" exact component={ Login } />
            <Route path="/teacher" exact component={ Home } />
            <Route path="/student/login" exact component={ Code } />
            <Route path="/student/1" exact component={ Relations } />
            <Route path="/student/2" exact component={ Feelings } />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
