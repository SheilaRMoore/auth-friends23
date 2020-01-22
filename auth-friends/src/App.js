import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Display from './components/Display';
import AddFriendForm from './components/AddFriendForm';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1 style={{color: "Blue"}}> Welcome To FriendBook</h1>
        <ul style={{backgroundColor: "lightgreen"}}>
      
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/friends">Friend List</Link></li>
          <li><Link to="/addfriend">Add A Friend</Link></li>
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