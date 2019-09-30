import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AdminContext from '../../context/adminauth/AdminContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const adminContext = useContext(AdminContext);

  const { isAuthenticated, loading } = adminContext;

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect to="/loginadmin" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
