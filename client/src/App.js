import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Users from './components/Users';
import Register from './components/Register';
import Login from './components/Login';

function App() {
    return (
      <Router>
          <div className="App">
            <header className="App-header">
              <ul>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                {/* <li>
                  <Link to="/users">Users</Link>
                </li> */}
              </ul>
            </header>
  
            <Switch>
              <Route exact path="/users" component={Users}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
              <Route component={Login}/>
            </Switch>
          </div>
      </Router>
    );
}

export default App;
