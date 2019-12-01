import React, { Component } from 'react';

class Rangeinput extends Component {
    constructor(props) {
        super(props);
        this.valueChange = this.valueChange.bind(this);
        this.state = {
            value: (parseInt(this.props.max) + parseInt(this.props.min))/2
        }
    }

    valueChange(event) {
        this.setState({value: event.target.value});
    }

    label() {
        return this.props.name[0].toUpperCase() + this.props.name.slice(1) + " - " + this.state.value;
    }

    render() {
        return (<><label for={this.props.name}>{this.label()}</label><input type="range" class="custom-range" min={this.props.min} max={this.props.max} step={this.props.step} id={this.props.name} onChange={this.valueChange}></input></>);
    }
}

export default Rangeinput;