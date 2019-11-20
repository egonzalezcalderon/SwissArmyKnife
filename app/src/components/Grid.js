import React, { Component } from 'react';

class Grid extends Component {
    constructor(props) {
        super(props);
    }

    size() {
        if (this.props.device == "phone") {
            return this.props.phone;
        } else if (this.props.device == "tablet") {
            return this.props.tablet;
        } else if (this.props.device == "smalldesktop") {
            return this.props.smalldesktop;
        } else if (this.props.device == "desktop") {
            return this.props.desktop;
        } 
    }

    devices() {
        let sizes = "";
        
        if (this.props.phone) {
            sizes += "col-"+Math.floor(12/this.props.phone).toString()+" "+
                     "col-sm-"+Math.floor(12/this.props.phone).toString()+" ";
        }

        if (this.props.tablet) {
            sizes += "col-md-"+Math.floor(12/this.props.tablet).toString()+" ";
        }

        if (this.props.smalldesktop) {
            sizes += "col-lg-"+Math.floor(12/this.props.smalldesktop).toString()+" ";
        }
        
        if (this.props.desktop) {
            sizes += "col-xl-"+Math.floor(12/this.props.desktop).toString()+" ";
        }

        return sizes;
    }

    arrange() {
        if (Array.isArray(this.props.children)) {
            let grid = null;
            let columns = null;

            for (let i in this.props.children) {
                    
                columns = [columns,<div className={this.devices()+" mt-"+this.props.spacing}>{this.props.children[i]}</div>];
                
                if ((i+1) % this.size() == 0) {
                    grid = [grid,<div className={"row"}>{columns}</div>];    
                    columns = null;
                }
            }

            if (columns) {
                grid = [grid,<div className={"row"}>{columns}</div>];    
                columns = null;
            }
    
            return <div className="container-fluid">{grid}</div>;
        } else {
            return <div className="container-fluid"><div className={"form-row"}><div className={"form-group "+this.devices()+" mt-"+this.props.spacing}>{this.props.children}</div></div></div>
        }
    }

    render() {
        return this.arrange();
    }
}

export default Grid;