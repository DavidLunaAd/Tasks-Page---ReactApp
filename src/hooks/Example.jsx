import React, { useState } from 'react';

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
    }

    return (
        <div>
            
        </div>
    );
}

export default Example;
