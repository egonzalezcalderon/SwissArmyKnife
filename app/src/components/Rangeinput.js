import React, { Component } from 'react';

class Rangeinput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<><label for={this.props.label}>{this.props.text}</label><input type="range" class="custom-range" min={this.props.min} max={this.props.max} step={this.props.step} id={this.props.label}></input></>);
    }
}

export default Rangeinput;