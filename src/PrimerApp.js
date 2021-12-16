/* PropTypes es una libreria que nos permite definir las propiedades de un componente al cual se le aplicaran reglas de validacion para que funcione correctamente*/
import { PropTypes } from "prop-types";

const PrimerApp = ({cadena ,segunda}) => {
    let putita = 'te pones bien cachonda';
    
    let arra = [1, 2, 3, 4, 5];
    let obj = {
        name: 'juan',
        lastName: 'perez',
    }

    
    return (
        // el codigo <> y el </> es una manera de abreviar un componente
        //llamado fragment, es una manera de agrupar componentes
        
        <>
            <strong>hola pinche putita 2</strong>
            <h1>{ putita }</h1>
            <h2>hija de tu puta { arra}</h2>
            <h2> { cadena}</h2>
            <h2> { JSON.stringify(obj)}</h2>
            <h2> { segunda}</h2>
        
        </>
    );
};

/* definicion de las reglas del componente al estilo de objeto para el manejo de las propiedades */
PrimerApp.propTypes = {
    cadena: PropTypes.string.isRequired
}

PrimerApp.defaultProps = {
    segunda: 'soy la segundona'
}

export { PrimerApp };
