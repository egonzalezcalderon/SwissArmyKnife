import React, { Component } from 'react';

class Checkinput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="custom-control custom-checkbox"><input type="checkbox" className="custom-control-input" id={this.props.label}/><label className="custom-control-label" for={this.props.label}>{this.props.text}</label></div>);
    }
}

export default Checkinput;