import React from 'react';
import useAuth from '../../hooks/useAuth'
import { Route, Redirect } from 'react-router-dom'
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isloading } = useAuth();
    if (isloading) {
        return <Spinner animation="border" variant="info" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/signin",
                    state: { from: location }
                }}
            ></Redirect>
            }
        ></Route>
    );
};

export default PrivateRoute;