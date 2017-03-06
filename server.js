import express from "express";
import path from "path";
import logger from "morgan";
import bodyParser from "body-parser";
import swig from "swig";
import React from "react";
import { renderToString } from "react-dom/server";
import { match, RouterContext } from "react-router";
import routes from "./app/routes";

var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

app.set("port", process.env.PORT || 3000);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(express.static(path.join(__dirname, "public")));

// POST POSITION
app.post("/", (req, res) => {});

// REACT MIDDLEWARE
app.use((req, res) => {
    match(
        { routes: routes, location: req.url },
        (err, redirectLocation, renderProps) => {
            // error
            if (err) {
                return res.status(500).send(err.message);
            } else if (redirectLocation) {
                // redirect
                return res
                    .status(302)
                    .redirect(
                        redirectLocation.pathname + redirectLocation.search
                    );
            } else if (renderProps) {
                // `RouterContext` is what the `Router` renders. `Router` keeps these
                // `props` in its state as it listens to `browserHistory`. But on the
                // server our app is stateless, so we need to use `match` to
                // get these props before rendering.
                var html = renderToString(<RouterContext {...renderProps} />);

                // dump the HTML into a template, lots of ways to do this, but none are
                // really influenced by React Router, so we're just using a little
                // function, `renderPage`
                var page = swig.renderFile("views/index.html", { html: html });
                return res.status(200).send(page);
            } else {
                // not found
                return res.status(404).send("Page Not Found");
            }
        }
    );
});

app.listen(app.get("port"), () => {
    console.log("Express server listening on port " + app.get("port"));
});
