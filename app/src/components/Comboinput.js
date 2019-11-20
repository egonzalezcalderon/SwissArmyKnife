import React, { Component } from 'react';

class Comboinput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let options = [];
        let optionIndex = 0;

        for (let index in this.props.options) {
            options[optionIndex] = <option>{this.props.options[index]}</option>;
            optionIndex++;    
        }

        return (<><label for={this.props.label}>{this.props.label}</label><select className="form-control custom-select" id={this.props.label}>{options}</select></>);
    }
}

export default Comboinput;