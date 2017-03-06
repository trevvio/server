import React from "react";
import { Route, IndexRoute } from "react-router";
import Home from "./components/Home";
import Share from "./components/Share";

export default (
    <Route>
        <Route path="/" component={Home} />
        <Route path="/:id" component={Share} />
    </Route>
);
