import React, { Component } from 'react';

class Textareainput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<><label for={this.props.label}>{this.props.label}</label><textarea className="form-control" id={this.props.label} rows={this.props.size} placeholder={this.props.text}></textarea></>);
    }
}

export default Textareainput;