import React, { Component } from 'react';

class Tablerow extends Component {
    constructor(props) {
        super(props);
    }

    color() {
        if (this.props.color == 'blue') {
            return 'table-primary';
        } else if (this.props.color == 'yellow') {
            return 'table-warning';
        } else if (this.props.color == 'navy') {
            return 'table-info';
        } else if (this.props.color == 'white') {
            return 'table-light';
        } else if (this.props.color == 'green') {
            return 'table-success';
        } else if (this.props.color == 'red') {
            return 'table-danger';
        } else if (this.props.color == 'black') {
            return 'table-dark';
        } else if (this.props.color == 'gray') {      
            return 'table-secondary';
        } else {
            return this.props.color;
        }
    }

    textalign() {
        if (this.props.textalign == 'left') {
            return 'text-left';
        } else if (this.props.textalign == 'right') {
            return 'text-right';
        } else if (this.props.textalign == 'center') {
            return 'text-center';
        } else {
            return 'text-center';
        }
    }

    render() {
        let cellValues = [];
        let cellIndex = 0;

        // Agrego las columnas de contenido
        if (this.props.header) {
            for (let property in this.props.content) {
                cellValues[cellIndex] = <td className={this.textalign()}>{property}</td>;
                cellIndex++;    
            }
        } else {
            for (let property in this.props.content) {
                cellValues[cellIndex] = <td className={this.textalign()}>{this.props.content[property]}</td>;
                cellIndex++;    
            }
        }
        

        // Agrego hijos extra, por ejemplo botones
        if (this.props.children) {
            for (let i = 0; i < this.props.children.length; i++) {
                cellValues[cellIndex] = <td className={this.textalign()}>{this.props.children[i]}</td>;
                cellIndex++;
            }
        }

        return (<tr className={this.color()}>{cellValues}</tr>);
    }
}

export default Tablerow;