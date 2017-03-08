import React from "react";
import { Link } from "react-router";

class Home extends React.Component {
    // COMPONENT DID MOUNT
    componentDidMount() {
        var b = document.getElementsByTagName("body")[0];
        b.className += " launcher";
    }

    // RENDER
    render() {
        return (
            <div>
                Welcome to Trevvio

                <Link to={"/imprint"}>Imprint</Link>
                <Link to={"/privacy"}>Privacy Policy</Link>
            </div>
        );
    }
}

export default Home;
