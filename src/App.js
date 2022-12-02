import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/forms/greetingStyled';
import Father from './components/container/father';
import LoginFormik from './components/pure/forms/loginFormik';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Greeting name= "Juanito"></Greeting> */}
        {/* <GreetingF name= "Carlos"></GreetingF> */}
        <TaskListComponent></TaskListComponent>
        {/* <Father></Father> */}
        <GreetingStyled name="LucosJes"></GreetingStyled>

        {/* Ejemplo uso Formik */}
        <LoginFormik></LoginFormik>
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
        </a>*/}
      {/* </header> */}
    </div>
  );
}

export default App;
