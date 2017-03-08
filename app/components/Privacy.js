import React from "react";
import { Link } from "react-router";

class Privacy extends React.Component {
    // RENDER
    render() {
        return (
            <div className="row">
                <div className="column column-25" />
                <div className="column column-static-text">
                    <center>
                        <Link to={"/"}>
                            <img
                                src="/img/android-chrome-512x512.png"
                                width="200"
                                style={{ marginTop: 30, marginBottom: 30 }}
                            />
                        </Link>
                        <h1>Privacy Policy</h1>
                    </center>
                    <h3>Types of Data collected</h3>
                    <h4>Website</h4>
                    <p>
                        The website does not collect any personal information of the user.
                    </p>
                    <h4>App</h4>
                    <p>
                        In order to provide the app service, the user enters a "name" (which can be virtually any text) that will be sent, alongside with the geolocation (see section
                        {" "}
                        <i>Geolocation Data</i>
                        ) of the user to the service provider. This data (name and last geolocation) is cached for 30 minutes to provide a fast user experience. After 30 minutes, this data is deleted and will not be retained in any way. We do not collect any location data or know where the hell you where last friday.
                    </p>

                    <h3>Geolocation Data</h3>
                    <h4>App</h4>
                    <p>
                        The app sends the following information to the server, which will then be passed on to the browsers of users that view a geolocation share channel. This is an example data set:
                    </p>
                    <p>
                        <table>
                            <tr>
                                <td><b>Name</b></td>
                                <td><b>Description</b></td>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>Your name, whatever you choose</td>
                            </tr><tr>
                                <td>latitude</td>
                                <td>
                                    The latitude value of your current position
                                </td>
                            </tr><tr>
                                <td>longitude</td>
                                <td>
                                    The longitude value of your current position
                                </td>
                            </tr><tr>
                                <td>id</td>
                                <td>
                                    A 4-character random string that identifies your location-share channel
                                </td>
                            </tr>
                        </table>
                        And that's it. We don't collect any device identifier or any other personal identifying data.
                    </p>
                </div>
                <div className="column column-25" />
            </div>
        );
    }
}

export default Privacy;
