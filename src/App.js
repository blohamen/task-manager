import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './pages/sign-in';
import TaskBoard from './pages/task-board';
import BoardsList from './pages/boards-list';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/list" component={BoardsList} />
            <Route path="/board" component={TaskBoard} />
        </Switch>
    );
}

export default App;
