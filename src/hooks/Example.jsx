import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

const Example = () => {

    //Valor inicial contador
    const valorInicial = 0;

    //Valor inicial persona
    const personaInicial = {
        nombre: "Juana",
        email: 'jaua@email.com'
    }

    const [contador, setcontador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Actualiza estado deo contador
     */
    function incrementarContador(){
        setcontador(contador + 1);
    };

    function cambiarPersona(){
        setPersona({
            nombre: "Kiayd",
        email: 'jsdf@eliudl.uy'
        });
    }

    const miRef = useRef();

    useEffect(() => {
        console.log('Cambio de estado del componente');
        console.log(miRef);
    },[contador]);

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h3 ref={miRef}>Contador: {contador}</h3>
            <h3>Persona: {persona.nombre}</h3>
            <h3>Persona: {persona.email}</h3>

            <button onClick={incrementarContador}>Contador</button>
            <button onClick={cambiarPersona}>Persona</button>
            <div>
                <h4>ejemplo useEfect useRef</h4>
                <h5>Contador: { contador }</h5>
                {/* Elemento referenciado */}
                <h5>
                    Ejemplo de elemento referenciado
                </h5>
                <div>
                <button onClick={incrementarContador}>Contador</button>
                </div>
            </div>
            
        </div>
    );
}

export default Example;
