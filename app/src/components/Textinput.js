import React, { Component } from 'react';

class Textinput extends Component {
    constructor(props) {
        super(props);
    }

    label() {
        return this.props.name[0].toUpperCase() + this.props.name.slice(1);
    }

    render() {
        return (<><label for={this.props.name}>{this.label()}</label><input type={this.props.type} className="form-control" id={this.props.name} placeholder={this.props.text} name={this.props.name}></input></>);
    }
}

export default Textinput;