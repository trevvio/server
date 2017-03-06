import React from "react";
import moment from "moment";

class TimeAgo extends React.Component {
    constructor(props) {
        super(props);
        this.interval = null;
        this.state = {
            fromNow: moment(this.props.time).fromNow()
        };
    }

    // COMPONENT DID MOUNT
    componentDidMount() {
        this.interval = window.setInterval(
            () => {
                this.setState({
                    fromNow: moment(this.props.time).fromNow()
                });
            },
            5000
        );
    }

    // COMPONENT WILL UNMOUNT
    componenWillUnmount() {
        window.clearInterval(this.interval);
    }

    // RENDER
    render() {
        return <span>{this.state.fromNow}</span>;
    }
}

export default TimeAgo;
