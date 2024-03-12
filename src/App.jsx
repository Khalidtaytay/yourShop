import {ContextProvider} from './Componentes/Context';
import './App.css';
import Nav from './Componentes/Nav';
import Home from './Componentes/Home';

export default function Web() {
  return (
    <>
      <ContextProvider>
        <Nav/>
        <Home/>
      </ContextProvider>
     
    </>
  );
}
