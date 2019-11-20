import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);
    }

    title() {
        if (this.props.size == 'big') {
            return <h1>{this.props.text}</h1>;
        } else if (this.props.size == 'medium') {
            return <h2>{this.props.text}</h2>;
        } else if (this.props.size == 'small') {
            return <h3>{this.props.text}</h3>;
        }
    }

    render() {
        return (this.title());
    }
}

export default Title;