import React, { Component } from 'react';

import Submenu from "./Submenu";
import Submenuitem from "./Submenuitem";

import {
    Link
} from "react-router-dom";

class Menu extends Component {

    render() {
        return (
            <div id="accordion">
                <Submenu name="notas" icon="far fa-sticky-note" text="Notas">
                    <Submenuitem icon="fas fa-plus" text="Nueva Nota" url="/newNote"/>
                    <Submenuitem icon="fas fa-copy" text="Notas" url="/notes"/>
                </Submenu>
                <Submenu name="galeria" icon="far fa-sticky-note" text="Galeria">
                    <Submenuitem icon="fas fa-atom" text="Galeria" url="/galery"/>
                </Submenu>                
            </div>
        );
    }
}

export default Menu;