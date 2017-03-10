import React from "react";
import { Link } from "react-router";

class Home extends React.Component {
    // COMPONENT DID MOUNT
    componentDidMount() {
        var b = document.getElementsByTagName("body")[0];
        b.className = "launcher";
    }

    // COMPONENT WILL UNMOUNT
    componentWillUnmount() {
        var b = document.getElementsByTagName("body")[0];
        b.className = "";
    }

    // RENDER
    render() {
        return (
            <div className="row">
                <div className="column">
                    <img src="/img/iphone.png" height="750px" />
                </div>
                <div className="column column-hero-text">

                    <div className="hero-text">
                        <center>
                            <img
                                src="/img/android-chrome-512x512.png"
                                width="175"
                            />
                            <h1>Trevvio</h1>

                            <p>
                                Share your position with your friends instantly.
                            </p>

                            <Link to={"/imprint"}>Imprint</Link>
                            {" "}
                            ·
                            {" "}
                            <Link to={"/privacy"}>Privacy Policy</Link>
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
