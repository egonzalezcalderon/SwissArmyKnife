import React, { Component } from 'react';

import saklogo from '../images/saklogo.png';

class Header extends Component {
    render() {
        return (
            <nav className={'navbar navbar-expand-md navbar-dark bg-dark'}>
                <a className={'navbar-brand'} href="#">
                    <img src={saklogo} alt="" width="30" height="30"/><strong> Swiss Army Knife</strong>
                </a>
                <button className={'navbar-toggler'} type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={'navbar-toggler-icon'}></span>
                </button>
                <div className={'collapse navbar-collapse'} id="navbarColor01">
                    <ul className={'nav navbar-nav mx-auto'}>
                        <form className={'form-inline'}>
                            <input className={'form-control mr-sm-2'} type="search" placeholder="Buscar" aria-label="Search"/>
                            <button className={'btn btn-danger my-2 my-sm-0'} type="submit">Buscar</button>
                        </form>
                    </ul>
                    <ul className={'nav navbar-nav'}>
                        <div className={'btn-group'}>
                            <button type="button" className={'btn btn-danger my-2 my-sm-0 dropdown-toggle'} data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i className={'fas fa-wrench'}></i>
                            </button>
                            <div className={'dropdown-menu dropdown-menu-right'}>
                                <button className={'dropdown-item'} type="button">Visar Salida</button>
                                <button className={'dropdown-item'} type="button">Cerrar Sesion</button>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        );
    }
}
            
export default Header;