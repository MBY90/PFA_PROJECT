import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      render={(props) => {
        return currentUser ? (
          <Route component={Component} {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
