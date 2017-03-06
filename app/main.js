import React from "react";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import DataWrapper from "./components/DataWrapper";

var data = JSON.parse(document.getElementById("data").innerHTML);

render(
    <DataWrapper data={data}>
        <Router history={browserHistory}>{routes}</Router>
    </DataWrapper>,
    document.getElementById("app")
);
