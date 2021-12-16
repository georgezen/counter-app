/* el useState es una palabra para un hook */
import React,{useState} from "react";
import { PropTypes } from "prop-types";

/* codigo para el componente CounterApp*/
const CounterApp = ({ value }) => {
    const [count,setCounter] = useState(value); //retorna en una desesctructuracion el valor de la variable en el primer parametro,el segundo retorna una funcion
    

    const incremento = () => {
       setCounter(count + 1);
    };

    const decremento = () => {
        if (count > 0) {
            setCounter(count - 1);
        }else {
            alert("No se puede restar mas");    
        }
        
    };

    const reset = () => {
        setCounter(value);
    };
    

    return (
        <>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            {/* de esta manera en los eventos se pasa funciones que requieren parametro,como el boton con el texto "+1" */}
            <button onClick={(e) => incremento(e)}>+1</button>
            {/* de esta manera en los eventos se pasa funciones que no requieren parametro,como el boton con el texto "-1" */}
            <button
                onClick={decremento}
            >
                -1
            </button>
            <button
                onClick={reset}
            >
                Reset
            </button>
            
        </>
    );
};
/*fin codigo para el componente CounterApp*/

/* validaciones de paso de parametros de propiedades hacia el componente */
CounterApp.propTypes = {
    value: PropTypes.number,
};
/*fin validaciones de paso de parametros de propiedades hacia el componente */

export default CounterApp;

//funciones del componente



