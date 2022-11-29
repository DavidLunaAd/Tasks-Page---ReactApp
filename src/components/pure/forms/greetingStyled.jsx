import React, { useState } from 'react';


//Definiendo estilos en constantes

//Estilo para usuario logueado
const loggedStyle= {
    color: 'white'
};

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}
const GreetingStyled = (props) => {

const [logged, setLogged] = useState(false);

const greetinUser = () => (<h4>Hola, {props.name} </h4>);
const pleaseLogin = () =>  (<p>Please Login</p>);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
        { logged ? greetinUser() : pleaseLogin() }

            <button onClick={() =>{
                console.log('Boton pulsado')
                setLogged(!logged);
            }}>
                {logged ? 'Logout' : 'Login'}
             </button>

        </div>
    );
}

export default GreetingStyled;
