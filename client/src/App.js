import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Context Api
import AuthState from './context/auth/AuthState';
import AdminState from './context/adminauth/AdminState';
import DashboardState from './context/dashboard/DashboardState';
import AlertState from './context/alert/AlertState';
import ContactState from './context/contact/ContactState';
import ForgetPasswordState from './context/forgetpassword/ForgetPasswordState';
import setAuthToken from './utils/SetAuthToken';

// Component
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';
import Contact from './component/pages/Contact';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import ForgotPassword from './component/pages/ForgotPassword';
import ResetPassword from './component/pages/ResetPassword';
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
          <ContactState>
            <ForgetPasswordState>
              <AlertState>
                <Router>
                  <Fragment>
                    <Navbar />
                    <Alert />
                    <Deposit />
                    <WithDraw />
                    <Ticket />
                    <Profile />
                    <Switch>
                      <PrivateRoute
                        exact
                        path="/userdashboard"
                        component={UserDashboard}
                      />
                      <Route
                        exact
                        path="/resetpassword/:token"
                        component={ResetPassword}
                      />
                      <AdminPrivateRoute
                        exact
                        path="/admindashboard"
                        component={AdminDashboard}
                      />
                      <Route exact path="/" component={Home} />
                      <Route exact path="/contact" component={Contact} />
                      <Route exact path="/register" component={Register} />
                      <Route exact path="/login" component={Login} />
                      <Route
                        exact
                        path="/forgotpassword"
                        component={ForgotPassword}
                      />
                      <Route exact path="/loginadmin" component={LoginAdmin} />
                    </Switch>
                  </Fragment>
                </Router>
              </AlertState>
            </ForgetPasswordState>
          </ContactState>
        </DashboardState>
      </AuthState>
    </AdminState>
  );
};

export default App;
