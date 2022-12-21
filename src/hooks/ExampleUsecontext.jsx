import React, {useState, useContext} from 'react';


const miContexto = React.createContext(null)

const ExampleUsecontext = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h4>
                El token es : {state.token}
            </h4>
            {/* Pintamos el componente 2 */}
            <ExampleUsecontext2></ExampleUsecontext2>
            
        </div>
    );
}

const ExampleUsecontext2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h4>
                La sesion: { state.sesion}
            </h4>
            
        </div>
    );
}


export default function MicomponenteConContexto() {
  
  const estadoInicial = {
    token: '123456',
    sesion: 1
  }

  //Estado del componente
  const [sesionData, setSesionData] = useState(estadoInicial);
  
    function actualizarSesion(){
        setSesionData(
        {
            token: 'FDSF$SDDFGFg',
            sesion: sesionData.sesion +1
        }
    )};

    return (
    
        <miContexto.Provider value= {sesionData}>
            <h3>Ejemplo useState y useContext</h3>
            <ExampleUsecontext></ExampleUsecontext>
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
  )
}

