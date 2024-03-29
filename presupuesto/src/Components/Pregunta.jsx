import { useState } from 'react'
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    const agregarPresupuesto = e => {
        e.preventDefault();

        if( cantidad < 1 || isNaN(cantidad) ){
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return ( 
        <>
            <h2>Introduce tu presupuesto</h2>

            { error ? <Error mensaje="El presupuesto es incorrecto" /> :  null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Tu presupuesto"
                    onChange={ e => guardarCantidad(parseInt(e.target.value, 10)) }              
                />

                <input 
                    type="submit" 
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </>
    );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;