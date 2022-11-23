import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    const [age, setage] = useState(22);

    const birthday = () => {
        setage(age +1)
    }
    return (
        <div>
             <p>Saludos!! { props.name } desde componente funcional</p>
                <p>Tienes { age } años</p>
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string

};


export default GreetingF;
