import React, { Component } from 'react';

class Listinput extends Component {
    constructor(props) {
        super(props);
    }

    label() {
        return this.props.name[0].toUpperCase() + this.props.name.slice(1);
    }

    render() {
        let options = [];
        let optionIndex = 0;

        for (let index in this.props.options) {
            options[optionIndex] = <option>{this.props.options[index]}</option>;
            optionIndex++;    
        }

        return (<><label for={this.props.name}>{this.label()}</label><select multiple size={this.props.size} className="form-control custom-select" id={this.props.name}>{options}</select></>);
    }
}

export default Listinput;