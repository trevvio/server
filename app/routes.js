import React from "react";
import { Route, IndexRoute } from "react-router";
import Home from "./components/Home";
import Share from "./components/Share";
import Imprint from "./components/Imprint";
import Privacy from "./components/Privacy";

export default (
    <Route>
        <Route path="/" component={Home} />
        <Route path="/imprint" component={Imprint} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/:id" component={Share} />
    </Route>
);
