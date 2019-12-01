import React, { Component } from 'react';
import styles from "./Body.css"

import Menu from "./Menu";
import Home from "./Home";
import SearchNote from "./SearchNote";
import SaveNote from "./SaveNote";
import Galery from "./Galery";
import Button from "./Button";
import Title from "./Title";


import {
    Switch,
    Route
  } from "react-router-dom";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {menuVisible: true};
        this.showOrHideMenu = this.showOrHideMenu.bind(this);
    }

    showOrHideMenu() {
        const mv = !this.state.menuVisible;
        this.setState({menuVisible : mv});
    }

    render() {
        const router = 
            <Switch>
                <Route path="/newNote">
                    <SaveNote/>
                </Route>
                <Route path="/notes">
                    <SearchNote/>
                </Route>
                <Route path="/galery">
                    <Galery/>
                </Route>                
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>;

        return (
            <div className="container-fluid">
                {this.state.menuVisible ? (
                    <div className="row fillScreen">
                        <div className="col-3 bg-secondary">
                            <div className="sticky-top">
                                <div className="row">
                                    <div className="col-10">
                                        <Menu/>   
                                    </div>
                                    <div className="col-2">
                                        <Button click={this.showOrHideMenu} text="" color="red" icon="fas fa-caret-square-left" />   
                                    </div>
                                </div>
                            </div>
                        </div>   
                        <div className="col-9">
                            {router}              
                        </div>  
                    </div>
                ):(
                    <div className="row fillScreen">
                        <div className="col-xs-1">
                            <div className="sticky-top">
                                <Button click={this.showOrHideMenu} text="" color="red" icon="fas fa-caret-square-left" />       
                            </div>
                        </div> 
                        <div className="col-11">
                            {router}                      
                        </div>  
                    </div>
                )}
            </div>
        );
    }
}

export default Body;