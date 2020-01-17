import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome To FriendBook</h1>
        <ul>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/friends">Friend List</Link></li>
          <li><Link to="/addfriend">Friends A Friend</Link></li>
        </ul>
        <Switch>
          <PrivateRoute path="/friends" component={Display} />
          <PrivateRoute path="/addfriend" component={AddFriendForm} />
          <Route path="/login" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;