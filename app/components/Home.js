import React from "react";

class Home extends React.Component {
    componentDidMount() {
        var b = document.getElementsByTagName("body")[0];
        b.className += " launcher";
    }

    render() {
        return (
            <div>
                Welcome to Trevvio

                <a href="/imprint">Imprint</a>
                <a href="/privacy">Privacy Policy</a>
            </div>
        );
    }
}

export default Home;
