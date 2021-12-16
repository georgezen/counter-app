import React,{useState} from "react";
import { PropTypes } from "prop-types";

const Textos = ({value}) => {

    const [texto,cambiarTexto] = useState(value);
    console.log(texto);

    const changeHola = () => {
        cambiarTexto("Hola");
    }

    const changePutita = () => {
        cambiarTexto("Putita");
    }

    const reset = () => {
        cambiarTexto(value);
    }
    return (
        <>
            <h1>{texto}</h1>
             <button onClick={ changeHola }>hola </button>
             <button onClick={ changePutita }>putita</button>
             <button onClick={ reset }>default</button>
        </>
    )
}

Textos.propTypes = {
    value: PropTypes.string.isRequired
}

export default Textos;