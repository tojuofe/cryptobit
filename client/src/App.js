import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Component
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import Contact from './component/pages/Contact';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import UserDashboard from './component/pages/UserDashboard';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={UserDashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
