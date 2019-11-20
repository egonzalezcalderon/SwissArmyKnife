import React, { Component } from 'react';
import Separator from "./Separator";
import Card from "./Card";
import Button from "./Button";
import Table from "./Table";
import Tablerow from "./Tablerow";
import Grid from "./Grid";
import Form from "./Form";
import TextInput from "./TextInput";

class Galery extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>   
                <Separator size="1"/>
                <Card text="Botones">
                    <Grid device="desktop" phone="2" tablet="3" smalldesktop="4" desktop="6" spacing="2">
                        <Button text="Boton" color="blue" icon="fas fa-caret-square-right" />
                        <Button text="Boton" color="yellow" icon="fas fa-caret-square-right" />
                        <Button text="Boton" color="navy" icon="fas fa-caret-square-right" />
                        <Button text="Boton" color="white" icon="fas fa-caret-square-right" />
                        <Button text="Boton" color="green" icon="fas fa-caret-square-right" />
                        <Button text="Boton" color="red" icon="fas fa-caret-square-right" />    
                        <Button text="Boton" color="black" icon="fas fa-caret-square-right" />  
                        <Button text="Boton" color="gray" icon="fas fa-caret-square-right" />                           
                        <Button text="Boton" color="blue" outlined icon="fas fa-caret-square-right" />
                        <Button text="Boton" color="yellow" outlined icon="fas fa-caret-square-right" />
                        <Button text="Boton" color="navy" outlined icon="fas fa-caret-square-right" />
                        <Button text="Boton" color="white" outlined icon="fas fa-caret-square-right" />
                        <Button text="Boton" color="green" outlined icon="fas fa-caret-square-right" />    
                        <Button text="Boton" color="red" outlined icon="fas fa-caret-square-right" />                        
                        <Button text="Boton" color="black" outlined icon="fas fa-caret-square-right" />                                  
                        <Button text="Boton" color="gray" outlined icon="fas fa-caret-square-right" />                                                                             
                    </Grid>
                </Card>
                <Separator size="1"/>
                <Card text="Tablas">
                    <Table>
                        <Tablerow color="gray" header content={{"Nombre": "Mariana","Apellido": "Priano","DNI": 35142062, "Modificar": "", "Eliminar": ""}}/>
                        <Tablerow color="red" content={{"Nombre": "Mariana","Apellido": "Priano","DNI": 35142062}}>
                            <Button color="navy" icon="fas fa-edit" />
                            <Button color="red" icon="fas fa-trash-alt" />
                        </Tablerow>
                        <Tablerow color="blue" content={{"Nombre": "Eduardo","Apellido": "Gonzalez Calderon","DNI": 34674495}}>
                            <Button color="navy" icon="fas fa-edit" />
                            <Button color="red" icon="fas fa-trash-alt" />                            
                        </Tablerow>
                    </Table>
                </Card>  
                <Separator size="1"/>
                <Card text="Formularios">
                    <Form device="desktop" phone="2" tablet="3" smalldesktop="4" desktop="6" spacing="2">
                        <TextInput type="text" label="Nombre" text="Ingresar Nombre"/>
                        <TextInput type="text" label="Nombre" text="Ingresar Nombre"/>
                        <TextInput type="text" label="Nombre" text="Ingresar Nombre"/>
                        <TextInput type="text" label="Nombre" text="Ingresar Nombre"/>
                        <TextInput type="text" label="Nombre" text="Ingresar Nombre"/>
                        <TextInput type="text" label="Nombre" text="Ingresar Nombre"/>
                        <TextInput type="text" label="Nombre" text="Ingresar Nombre"/>
                        <TextInput type="text" label="Nombre" text="Ingresar Nombre"/>
                        <TextInput type="text" label="Nombre" text="Ingresar Nombre"/>
                        <TextInput type="text" label="Nombre" text="Ingresar Nombre"/>
                        <TextInput type="text" label="Nombre" text="Ingresar Nombre"/>
                        <TextInput type="text" label="Nombre" text="Ingresar Nombre"/>
                    </Form>
                </Card>           
            </div>
        );
    }
}

export default Galery;