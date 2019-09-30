import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Context Api
import AuthState from './context/auth/AuthState';
import AdminState from './context/adminauth/AdminState';
import DashboardState from './context/dashboard/DashboardState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/SetAuthToken';

// Component
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import Contact from './component/pages/Contact';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import LoginAdmin from './component/auth/LoginAdmin';
import Deposit from './component/layout/Deposit';
import WithDraw from './component/layout/WithDraw';
import Ticket from './component/layout/Ticket';
import Profile from './component/layout/Profile';
import UserDashboard from './component/pages/UserDashboard';
import AdminDashboard from './component/pages/AdminDashboard';
import Alert from './component/layout/Alert';
import PrivateRoute from './component/routing/PrivateRoute';
import AdminPrivateRoute from './component/routing/AdminPrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AdminState>
      <AuthState>
        <DashboardState>
          <AlertState>
            <Router>
              <div>
                <Navbar />
                <Alert />
                <Deposit />
                <WithDraw />
                <Ticket />
                <Profile />
                <Switch>
                  <PrivateRoute exact path="/" component={UserDashboard} />
                  <AdminPrivateRoute
                    exact
                    path="/admindashboard"
                    component={AdminDashboard}
                  />
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/loginadmin" component={LoginAdmin} />
                </Switch>
              </div>
            </Router>
          </AlertState>
        </DashboardState>
      </AuthState>
    </AdminState>
  );
};

export default App;
