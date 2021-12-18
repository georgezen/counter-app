import React from 'react';
import ReactDOM from 'react-dom';
import {PrimerApp} from './PrimerApp';
//import CounterApp from './CounterApp';
//import Textos from './componentes/textos';

//cuando se importe un archivo css se ocupa especificar el .css
import './PrimerApp.css';
//declaracion de constantes para mostrar en el index.js

const roote = document.getElementById('root');

// el metodo render de ReactDOM es el que se encarga de renderizar el componente pasandome 2 parametros el componente hijo y el contenedor o elemento html donde se va a renderizar
ReactDOM.render(<PrimerApp cadena={"2"}  />, roote);

/* <HolaPutita hoja="property de componente" />
    la palabra hoja con el string es una propiedad que sirve para comunicarse con el codigo de su componente correspondiente
*/
