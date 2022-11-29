import React, { useRef } from 'react';

const Child = ({name, send, update}) => {

    const messageRef = useRef('')

    const nameRef = useRef('')

    function pressButton2(){
        const text = messageRef.current.value;
        console.log('Boton 2 pulsado');
        alert(`Default text ${text}`);
    }

    function pressButtonParams(texto){
        alert(`Text:${texto}`);
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
        <div style={{background: 'cyan', padding: '30px'}}>

            <p onMouseOver={() => console.log('On mouse over')}>Child Component {name}</p>
            <button onClick={() => console.log('Boton 1 pulsado')}>
                Botón 1
            </button>
            <button onClick={pressButton2}>
                Botón 2
            </button>
            <button onClick={() => pressButtonParams('Hello')}>
                Botón 3 Params
            </button>
            <input placeholder='Insert a text' onFocus={() => console.log('Input Focused')}
                onChange={(e) => console.log('Input change', e.target.value)}
                ref = {messageRef}
            ></input>
            <button onClick={() => (send(messageRef.current.value)) }>Send message</button>
            
            <div style={{marginTop:'20px'}}>
            <form onSubmit={submitName}>
                <input ref={nameRef} placeholder='New name'></input>
                <button type='submit'>Update Name</button>
            </form>
            </div>

        </div>
    );
}

export default Child;
