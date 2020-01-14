
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, user: user, ...rest }) => {
    console.log(...rest);
    console.log("rest");
    console.log(user);

    return (
        <Route
            {...rest}
            render={props => {
                console.log(props),

                    !user ? (
                        <Redirect to='/ss' />
                    ) : (
                            <Component {...props} />
                        )
            }}
        />
    );
};

export default PrivateRoute;