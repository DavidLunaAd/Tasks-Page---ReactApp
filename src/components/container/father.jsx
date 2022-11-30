import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('N');

        function showMessage (text){
            alert(`message received: ${text}`)
        }

        function updateName (newName){
            setName(newName)
        }


    return (
        <div style={{background: 'tomato', padding:'10px'}}>
            <p><Child name={name} send={showMessage} update={updateName}></Child></p>
        </div>
    );
}

export default Father;
