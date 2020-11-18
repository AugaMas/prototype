import React from 'react';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import RouteConfig from "./RouteConfig";

  function Router() {
    return (
        <Switch>
            <RouteConfig />
        </Switch>
    )
  }

  export default Router;