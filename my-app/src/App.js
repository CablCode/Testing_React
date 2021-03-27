import logo from './logo.svg';
import './App.css';

function Helloworld(props) {
    return(
        <div>
            {props.mytext}
    </div>
    )
}



function App() {
  return (
    <div>
        Este es un componente: <Helloworld mytext='Hola a todos'/>
    </div>
  );
}

export default App;
