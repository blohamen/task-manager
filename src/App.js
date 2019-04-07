import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './components/sign-in';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Route path='/board' render={() => (
                    <div style={{width: 300, height: 300, backgroundColor: 'red'}} />
                )} />
            </Switch>
        );
    }
}

export default App;
