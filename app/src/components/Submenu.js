import React, { Component } from 'react';

class Submenu extends Component {

    render() {
        return (
            <div className={'card'}>
                <div className={'card-header bg-danger'}>
                    <a className={'collapsed card-link text-white'} data-toggle="collapse"
                        href={'#'+this.props.name}>
                        <i className={this.props.icon}></i>{' '+this.props.text}
                            </a>
                </div>
                <div id={this.props.name} className={'collapse'} data-parent="#accordion">
                    <div className={'card-body'}>
                        <ul className={'list-group list-group-flush'}>
                            {this.props.children}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Submenu;