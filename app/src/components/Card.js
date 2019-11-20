import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="card">
                <div class="card-header">
                    {this.props.text}
                </div>
                <div class="card-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;