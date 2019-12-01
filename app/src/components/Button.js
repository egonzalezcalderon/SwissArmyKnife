import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    outline() {
        return (this.props.outlined) ? 'outline-':'';
    }

    color() {
        if (this.props.color == 'blue') {
            return 'btn-'+this.outline()+'primary';
        } else if (this.props.color == 'yellow') {
            return 'btn-'+this.outline()+'warning';
        } else if (this.props.color == 'navy') {
            return 'btn-'+this.outline()+'info';
        } else if (this.props.color == 'white') {
            return 'btn-'+this.outline()+'light';
        } else if (this.props.color == 'green') {
            return 'btn-'+this.outline()+'success';
        } else if (this.props.color == 'red') {
            return 'btn-'+this.outline()+'danger';
        } else if (this.props.color == 'black') {
            return 'btn-'+this.outline()+'dark';
        } else if (this.props.color == 'gray') {      
            return 'btn-'+this.outline()+'secondary';
        } else {
            return this.props.color;
        }
    }

    render() {
        return (<button type="submit" onClick={this.props.click} className={"btn "+this.color()}><i className={this.props.icon}></i>{(this.props.text)?" "+this.props.text:""}</button>);
    }
}

export default Button;