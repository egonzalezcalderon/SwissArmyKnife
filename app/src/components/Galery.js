import React, { Component } from 'react';
import Separator from "./Separator";
import Card from "./Card";
import Button from "./Button";
import Table from "./Table";
import Tablerow from "./Tablerow";
import Grid from "./Grid";
import Form from "./Form";
import Formgrid from "./Formgrid";
import Textinput from "./Textinput";
import Comboinput from "./Comboinput";
import Checkinput from "./Checkinput";
import Radioinput from "./Radioinput";
import Textareainput from "./Textareainput";
import Listinput from './Listinput';
import Filebrowserinput from './Filebrowserinput';
import Rangeinput from './Rangeinput';

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
                    <Form>
                        <Formgrid device="desktop" phone="2" tablet="3" smalldesktop="4" desktop="4" spacing="2">
                            <Textinput type="text" label="Usuario" text="Ingresar Usuario"/>
                            <Textinput type="password" label="Contraseña" text="Ingresar Contraseña"/>
                            <Textinput type="email" label="Mail" text="Ingresar Mail"/>
                            <Comboinput label="Provincia" options={["CABA", "Cordoba", "Santa Fe", "Mendoza"]}/>
                            <Checkinput label="Casado" text="Estoy Casado"/>
                            <Checkinput label="Recibido" text="Estoy Recibido"/>
                            <Radioinput label="Hombre" group="Sexo" text="Soy Hombre"/>
                            <Radioinput label="Mujer"  group="Sexo" text="Soy Mujer"/>
                            <Filebrowserinput label="foto" text="Elegir Foto"/>
                            <Listinput label="Nacionalidades" options={["Argentina", "Estados Unidos", "Italia", "España", "Francia"]} size="2"/>
                            <Rangeinput label="Edad" text="Edad" min="1" max="100" step="1"/> 
                        </Formgrid>
                        <Formgrid device="desktop" phone="1" tablet="1" smalldesktop="1" desktop="1">
                            <Textareainput label="Nota" text="Ingresar Cuerpo de la Nota" size="5"/>
                        </Formgrid>
                        <Formgrid device="desktop" phone="1" tablet="1" smalldesktop="1" desktop="1">
                            <Button text="Subir" color="red" icon="fas fa-caret-square-right" />   
                        </Formgrid>
                    </Form>
                </Card>           
            </div>
        );
    }
}

export default Galery;