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
        this.subir = this.subir.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.addRow = this.addRow.bind(this);
        this.state = {
            rows: [],
            usuario: null,
            password: null,
            mail: null,
            provincia: null,
            casado: null,
            recibido: null,
            hombre: null,
            mujer: null,
            foto: null,
            nacionalidades: null,
            edad: null,
            nota: null
        };
        this.state.rows[this.state.rows.length] = {"Usuario": "Mariana","Mail": "mariana.priano.uba@gmail.com","Provincia": "CABA"};
        this.state.rows[this.state.rows.length] = {"Usuario": "Eduardo","Mail": "ing.egonzalezcalderon@gmail.com","Provincia": "Buenos Aires"};
    }

    subir(event) {
        event.preventDefault();
        this.setState({
            usuario: event.target.usuario.value,
            password: event.target.password.value,
            mail: event.target.mail.value,
            provincia: event.target.provincia.value,
            casado: event.target.casado.checked,
            recibido: event.target.recibido.checked,
            hombre: event.target.hombre.checked,
            mujer: event.target.mujer.checked,
            foto: event.target.foto.value,
            nacionalidades: event.target.nacionalidades.value,
            edad: event.target.edad.value,
            nota: event.target.nota.value 
        });
        this.addRow(event);
    }

    addRow(event) {
        let row = {};

        row.Usuario = event.target.usuario.value;
        row.Mail = event.target.mail.value;
        row.Provincia = event.target.provincia.value;
        
        console.log(row);

        this.state.rows[this.state.rows.length] = row;
    }

    removeRow(event, index) {
        event.preventDefault();
        let rows = [...this.state.rows];
        rows.splice(index, 1);
        this.setState({rows: rows});
    }

    render() {

        let renderRows = null;

        for (let i = 0; i < this.state.rows.length; i++) {
            renderRows = [renderRows,
            <Tablerow color="light" content={this.state.rows[i]}>
                <Button color="navy" icon="fas fa-edit"/>
                <Button color="red" icon="fas fa-trash-alt" click={(event) => this.removeRow(event, i)}/>
            </Tablerow>];
        }

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
                        <Tablerow color="navy" header content={this.state.rows[0]}/>
                        {renderRows}
                    </Table>
                </Card>  
                <Separator size="1"/>
                <Card text="Formularios">
                    <Form submit={this.subir}>
                        <Formgrid device="desktop" phone="2" tablet="3" smalldesktop="4" desktop="4" spacing="2">
                            <Textinput type="text" name="usuario" text="Ingresar Usuario"/>
                            <Textinput type="password" name="password" text="Ingresar Contraseña"/>
                            <Textinput type="email" name="mail" text="Ingresar Mail"/>
                            <Comboinput name="provincia" options={["CABA", "Cordoba", "Santa Fe", "Mendoza"]}/>
                            <Checkinput name="casado" text="Estoy Casado"/>
                            <Checkinput name="recibido" text="Estoy Recibido"/>
                            <Radioinput name="hombre" group="sexo" text="Soy Hombre"/>
                            <Radioinput name="mujer"  group="sexo" text="Soy Mujer"/>
                            <Filebrowserinput name="foto" text="Elegir Foto"/>
                            <Listinput name="nacionalidades" options={["Argentina", "Estados Unidos", "Italia", "España", "Francia"]} size="2"/>
                            <Rangeinput name="edad" min="1" max="100" step="1"/> 
                        </Formgrid>
                        <Formgrid device="desktop" phone="1" tablet="1" smalldesktop="1" desktop="1">
                            <Textareainput name="nota" text="Ingresar Cuerpo de la Nota" size="5" value={this.state.inputs}/>
                        </Formgrid>
                        <Formgrid device="desktop" phone="1" tablet="1" smalldesktop="1" desktop="1">
                            <Button text="Subir" color="red" icon="fas fa-caret-square-right" />   
                        </Formgrid>
                    </Form>
                </Card>     
                <Separator size="10"/>      
            </div>
        );
    }
}

export default Galery;