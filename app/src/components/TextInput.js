import React, { Component } from 'react';

class TextInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<aux><label for={this.props.label}>{this.props.label}</label><input type={this.props.type} className="form-control" id={this.props.label} placeholder={this.props.text}></input></aux>);
    }
}

export default TextInput;