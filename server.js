import express from "express";
import compression from "compression";
import path from "path";
import logger from "morgan";
import bodyParser from "body-parser";
import swig from "swig";
import React from "react";
import { renderToString } from "react-dom/server";
import { match, RouterContext } from "react-router";
import routes from "./app/routes";
import storage from "node-persist";
import moment from "moment";

storage.initSync();

// APP
var app = express();
app.set("port", process.env.PORT || 3000);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(compression());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(express.static(path.join(__dirname, "public")));

// POST POSITION
app.post("/", (req, res) => {
    if ("id" in req.body) {
        // store the request
        storage.setItemSync(
            req.body.id,
            JSON.stringify({
                last: new Date().getTime(),
                name: req.body.name,
                location: {
                    lat: req.body.latitude,
                    lng: req.body.longitude
                }
            })
        );

        // broadcast via socketio
        io.sockets.in(req.body.id).emit("position", req.body);
    }

    // push the viewer count back
    return res.status(200).send({
        viewers: io.sockets.adapter.rooms[req.body.id]
            ? io.sockets.adapter.rooms[req.body.id].length
            : 0
    });
});

// DELETE CHANNEL
app.delete("/", (req, res) => {
    if ("id" in req.body) {
        storage.removeItemSync(req.body.id);
        io.sockets.in(req.body.id).emit("closed", req.body);
    }

    return res.status(204).send();
});

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
                var title = "Trevvio";
                var data = {};
                var nope = false;

                // check if this is a share route and an id exists
                if ("id" in renderProps.params) {
                    // try to fetch the storage
                    var info = storage.getItemSync(renderProps.params.id);
                    if (info) {
                        // parse JSON
                        data = JSON.parse(info);
                        title = data.name + " // Trevvio";

                        if (
                            moment(data.last).isBefore(
                                moment().subtract("30", "minutes")
                            )
                        ) {
                            nope = true;
                        }
                    } else {
                        nope = true;
                    }
                }

                if (nope === true) {
                    var page = swig.renderFile("views/nope.html", {
                        html: html
                    });
                    return res.status(200).send(page);
                }

                // `RouterContext` is what the `Router` renders. `Router` keeps these
                // `props` in its state as it listens to `browserHistory`. But on the
                // server our app is stateless, so we need to use `match` to
                // get these props before rendering.
                var html = renderToString(<RouterContext {...renderProps} />);

                // dump the HTML into a template, lots of ways to do this, but none are
                // really influenced by React Router, so we're just using a little
                // function, `renderPage`
                var page = swig.renderFile("views/index.html", {
                    html: html,
                    title: title,
                    data: JSON.stringify(data)
                });
                return res.status(200).send(page);
            } else {
                // not found
                return res.status(404).send("Page Not Found");
            }
        }
    );
});

// EXPRESS
var server = app.listen(app.get("port"), () => {
    console.log("Express server listening on port " + app.get("port"));
});

// SOCKET.IO
var io = require("socket.io")(server);
io.sockets.on("connection", function(socket) {
    // ON: join
    socket.on("join", function(room) {
        socket.join(room);

        // on every new join, emit the connection count to the app user
        socket.in(room).emit("viewers", io.sockets.adapter.rooms[room].length);
    });

    // ON: disconnect
    socket.on("disconnecting", reason => {
        Object.keys(socket.rooms).forEach(r => {
            socket
                .in(r)
                .emit(
                    "viewers",
                    Math.max(0, io.sockets.adapter.rooms[r].length - 1)
                );
        });
    });
});
