import React from "react";

class Marker extends React.Component {
    render() {
        return (
            <div className="marker">
                <div className="pin" />
                <div className="pulse" />
            </div>
        );
    }
}

export default Marker;
