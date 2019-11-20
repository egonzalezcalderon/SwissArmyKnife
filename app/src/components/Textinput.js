import React, { Component } from 'react';

class Textinput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<><label for={this.props.label}>{this.props.label}</label><input type={this.props.type} className="form-control" id={this.props.label} placeholder={this.props.text}></input></>);
    }
}

export default Textinput;