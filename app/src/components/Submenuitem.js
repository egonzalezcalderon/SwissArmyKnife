import React, { Component } from 'react';

class Submenuitem extends Component {

    render() {
        return (
            <li className={'list-group-item'}>
                <a href={this.props.url} className={'card-link text-dark'}><i className={this.props.icon}></i> {' '+this.props.text}</a>
            </li>  
        );
    }
}

export default Submenuitem;