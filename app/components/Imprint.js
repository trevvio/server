import React from "react";
import { Link } from "react-router";

class Imprint extends React.Component {
    // RENDER
    render() {
        return (
            <div className="row">
                <div className="column column-25" />
                <div className="column">
                    <center>
                        <Link to={"/"}>
                            <img
                                src="/img/android-chrome-512x512.png"
                                width="200"
                                style={{ marginTop: 30, marginBottom: 30 }}
                            />
                        </Link>
                        <h1>Imprint</h1>
                    </center>
                    <p>
                        The following information (Imprint) is required under German law.
                    </p>

                    <p>Responsible for this site:</p>

                    <p>
                        <span className="reverse">nnameggürB samohT</span><br />
                        <span className="reverse">9 pmakrefoH</span><br />
                        <span className="reverse">nesreiV 15714</span><br />
                        <span className="reverse">
                            moc.oivvert@ih
                        </span>
                        <br />
                    </p>
                    <center><p>~</p></center>
                    <h3>Legal disclaimer</h3>
                    <p>
                        The creator of this website cannot assume liability for the timeless accuracy and completeness of the information. This website contains links to external websites. As the contents of these third-party websites are beyond my control, I cannot accept liability for them. ResponsibiIity for the contents of the linked pages is always held by the provider or operator of the pages.
                    </p>
                    <center><p>~</p></center>
                    <h3>Data protection</h3>
                    <p>
                        In general, when visiting the website of “Trevvio", no personal data are saved. No data will be passed on to third parties without your consent. We point out that in regard to unsecured data transmission in the internet (e.g. via email), security cannot be guaranteed. Such data could possibIy be accessed by third parties.
                    </p>
                    <p>
                        See the
                        {" "}
                        <Link to={"/privacy"}>Privacy Policy</Link>
                        {" "}
                        for further details on data collection and protection.
                    </p>
                    <center><p>~</p></center>
                </div>
                <div className="column column-25" />
            </div>
        );
    }
}

export default Imprint;
