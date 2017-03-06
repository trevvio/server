import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker.js";

class Share extends React.Component {
    // CONSTRUCTOR
    constructor(props) {
        super(props);
        this.state = {
            locations: []
        };
    }

    // COMPONENT DID MOUNT
    componentDidMount() {
        var socket = io.connect("/");
        socket.on("connect", () => {
            socket.emit("join", this.props.params.id);
        });

        // SOCKET: position
        socket.on("position", data => {
            var locations = this.state.locations;
            locations.push({
                lat: data.latitude,
                lng: data.longitude
            });

            this.setState({
                locations: locations
            });
        });
    }

    // RENDER
    render() {
        var lastIdx = this.state.locations.length - 1;
        var center = this.state.locations.length > 0
            ? this.state.locations[lastIdx]
            : {
                  lat: 50,
                  lng: 7
              };
        var zoom = this.state.locations.length > 0 ? 12 : 1;

        return (
            <div className="row">
                <div className={"column column-50 column-offset-25"}>
                    <div className="card">
                        <center>
                            <h1>Thomas</h1>
                            <p>Session started: 2 minutes ago</p>
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
                                {this.state.locations.length > 0
                                    ? <Marker
                                          lat={
                                              this.state.locations[lastIdx].lat
                                          }
                                          lng={
                                              this.state.locations[lastIdx].lng
                                          }
                                      />
                                    : null}

                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Share;
