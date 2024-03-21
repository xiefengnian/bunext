import { Route, RouteProps } from "react-router-dom";
import Detail from "./pages/detail";
import Index from "./pages/index";
import React, { ReactElement, ReactNode } from "react";

export type RouteType = { path: string; component: ReactElement };

export const routes: RouteProps[] = [
  {
    path: "/",
    exact: true,
    children: <Index />,
  },
  {
    path: "/detail",
    children: <Detail />,
  },
];

export const matchRoutes = (path: string) => {
  const result = routes.find((route) => route.path === path);
  if (result) {
    return result;
  }
  return null;
};
