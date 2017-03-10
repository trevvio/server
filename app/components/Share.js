import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import TimeAgo from "./TimeAgo";

class Share extends React.Component {
    // CONSTRUCTOR
    constructor(props, context) {
        super(props, context);

        if (this.context.data) {
            this.state = this.context.data;
        } else {
            this.state = {
                location: null,
                last: null,
                name: null
            };
        }
    }

    // COMPONENT DID MOUNT
    componentDidMount() {
        var socket = io.connect("/");
        socket.on("connect", () => {
            socket.emit("join", this.props.params.id);
        });

        // SOCKET: position
        socket.on("position", data => {
            this.setState({
                location: {
                    lat: data.latitude,
                    lng: data.longitude
                },
                last: data.last,
                name: data.name
            });
        });

        // SOCKET: closed
        socket.on("closed", () => {
            window.location.reload();
        });
    }

    // RENDER
    render() {
        var center = this.state.location !== null
            ? this.state.location
            : {
                  lat: 50,
                  lng: 7
              };
        var zoom = this.state.location !== null ? 12 : 1;

        return (
            <div className="row">
                <div className="column column-25" />
                <div className="column">
                    <div className="card">
                        <center>
                            <h1>
                                <i className="fa fa-user-circle-o" />
                                {" "}
                                {this.state.name}
                            </h1>
                            <p>
                                Last position:
                                {" "}
                                <TimeAgo time={this.state.last} />
                            </p>
                        </center>
                        <div className="map">
                            <GoogleMapReact
                                bootstrapURLKeys={{
                                    key: "AIzaSyBR_z5dbU0jQIW3kVC98PHGZ1Ynr744p-s",
                                    language: "en"
                                }}
                                center={center}
                                zoom={zoom}
                            >
                                {this.state.location !== null
                                    ? <Marker
                                          lat={this.state.location.lat}
                                          lng={this.state.location.lng}
                                      />
                                    : null}

                            </GoogleMapReact>
                        </div>
                    </div>
                    <center>
                        <p className="footer">
                            <small>

                                <a target="_blank" href="/imprint">Imprint</a>
                                {" "}
                                ·
                                {" "}
                                <a target="_blank" href="/privacy">
                                    Privacy Policy
                                </a>
                                {" "}
                                ·
                                {" "}
                                <a
                                    target="_blank"
                                    href="https://github.com/trevvio"
                                >
                                    Code on GitHub
                                </a>

                            </small>
                        </p>
                    </center>
                </div>
                <div className="column column-25" />
            </div>
        );
    }
}

Share.contextTypes = {
    data: React.PropTypes.object
};

export default Share;
