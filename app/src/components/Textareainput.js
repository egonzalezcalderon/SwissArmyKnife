import React, { Component } from 'react';

class Textareainput extends Component {
    constructor(props) {
        super(props);
    }

    label() {
        return this.props.name[0].toUpperCase() + this.props.name.slice(1);
    }

    render() {
        return (<><label for={this.props.name}>{this.label()}</label><textarea className="form-control" id={this.props.name} rows={this.props.size} placeholder={this.props.text}></textarea></>);
    }
}

export default Textareainput;