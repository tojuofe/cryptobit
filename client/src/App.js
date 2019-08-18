import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Context Api
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

// Component
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import Contact from './component/pages/Contact';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import UserDashboard from './component/pages/UserDashboard';
import Alert from './component/layout/Alert';
import PrivateRoute from './component/routing/PrivateRoute';
const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={UserDashboard} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
