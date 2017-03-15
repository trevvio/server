import React from "react";
import { Link } from "react-router";

class Home extends React.Component {
    // RENDER
    render() {
        return (
            <div>
                <div className="row">
                    <div className="column">

                        <div className="hero-text">
                            <center>
                                <img
                                    src="/img/android-chrome-512x512.png"
                                    width="175"
                                />
                                <h1>Trevvio</h1>

                                <h4>
                                    Share your location, instantly. On your way to a meeting or maybe visiting friends?
                                </h4>

                                <div className="border-line" />

                                <ul>
                                    <li>
                                        <i className="fa fa-users" />
                                        {" "}
                                        You decice who you share your location with
                                    </li>
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        {" "}
                                        You can stop sharing at any time
                                    </li>
                                    <li>
                                        <i className="fa fa-lock" />
                                        {" "}
                                        We
                                        {" "}
                                        <u>don't</u>
                                        {" "}
                                        collect or store any of your data and we're particularly proud of that!
                                    </li>
                                </ul>

                                <div className="border-line" />
                            </center>

                            <div className="row">
                                <div className="column">
                                    <a href="https://apple.com" target="_blank">
                                        <img
                                            src="/img/appstore.svg"
                                            height="80"
                                        />
                                    </a>
                                </div>
                                <div className="column">
                                    <a
                                        href="https://google.com"
                                        target="_blank"
                                    >
                                        <img
                                            src="/img/playstore.svg"
                                            height="80"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="marvel-device iphone6 silver">
                            <div className="top-bar" />
                            <div className="sleep" />
                            <div className="volume" />
                            <div className="camera" />
                            <div className="sensor" />
                            <div className="speaker" />
                            <div className="screen">
                                <img src="/img/screen.png" />
                            </div>
                            <div className="home" />
                            <div className="bottom-bar" />
                        </div>
                    </div>
                </div>
                <div className="row footer-row">
                    <div className="column footer-column">
                        <a href="/imprint">Imprint</a>
                        {" "}
                        ·
                        {" "}
                        <a href="/privacy">Privacy Policy</a> · © Trevvio
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
