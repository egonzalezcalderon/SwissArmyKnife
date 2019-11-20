import React, { Component } from 'react';

class Space extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let spa = [];

        for (let i = 0; i < this.props.size; i++) {
            spa[i] = "\u00A0";
        }

        return spa;
    }
}

export default Space;