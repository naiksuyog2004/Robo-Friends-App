import React, { Component } from "react";

class ErrorBoundry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            HasError: false
        }
    }

    componentDidCatch() {
        this.setState({ HasError: true });
    }

    render() {
        if (this.state.HasError) {
            return <h2>Oooop!! There is an error!</h2>
        }
        return this.props.children;
    }
}
export default ErrorBoundry;


