import React, { Component } from 'react';

class Radioinput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="custom-control custom-radio"><input type="radio" id={this.props.name} name={this.props.group} className="custom-control-input"/><label className="custom-control-label" for={this.props.name}>{this.props.text}</label></div>);
    }
}

export default Radioinput;