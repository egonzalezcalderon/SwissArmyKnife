import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<form onSubmit={this.props.submit}>{this.props.children}</form>);
    }
}

export default Form;