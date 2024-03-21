import { Route, RouteProps, Switch } from "react-router-dom";
import React from "react";

export const App: React.FC<{ routes: RouteProps[] }> = ({ routes }) => {
  return (
    <Switch>
      {routes.map((item) => (
        <Route key={item.path as string} {...item}></Route>
      ))}
    </Switch>
  );
};
