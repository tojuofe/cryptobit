import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Context Api
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/SetAuthToken';

// Component
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import Contact from './component/pages/Contact';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import UserDashboard from './component/pages/UserDashboard';
import Alert from './component/layout/Alert';
import PrivateRoute from './component/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <Alert />
            <Switch>
              <PrivateRoute exact path="/" component={UserDashboard} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
