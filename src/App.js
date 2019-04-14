import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './components/sign-in';
import TaskBoard from './pages/task-board';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/board" component={TaskBoard} />
      </Switch>
    );
  }
}

export default App;
