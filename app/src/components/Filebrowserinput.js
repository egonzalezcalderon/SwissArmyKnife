import React, { Component } from 'react';

class Filebrowserinput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="custom-file"><input type="file" className="custom-file-input" id={this.props.name} lang="es"/><label id={this.props.name+"label"} className="custom-file-label" for={this.props.name}>{this.props.text}</label></div>);
    }
}

export default Filebrowserinput;