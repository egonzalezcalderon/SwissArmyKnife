import React, { Component } from 'react';

class Separator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let sep = [];

        for (let i = 0; i < this.props.size; i++) {
            sep[i] = <br/>;
        }

        return (<div>{sep}</div>);
    }
}

export default Separator;