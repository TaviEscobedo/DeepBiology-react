import React from 'react';
import Home from './Components/Home';
// import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import Clase from './Components/Clase';
import Registro from './Components/Registro'
import Login from './Components/Login';
import isAuthenticate from './isAuthenticate'
import Favoritos from './Components/Favoritos';
import Inicio from './Components/Inicio';

require('events').EventEmitter.prototype._maxListeners = 100;

function App() {


  const MyRoute=(props)=>(
      isAuthenticate()?  <Route  {...props}/> :  <Redirect to="/login" />
  )
  const NoRoute=(props)=>(
    isAuthenticate()? <Redirect  to="/clases" /> :<Route  {...props}/>
)
  return (
    <>
    
    <BrowserRouter>
    {/* <Navbar/> */}
    <Switch>
    <NoRoute  exact path="/" component={Inicio}></NoRoute> 
    <NoRoute  exact path="/registro" component={Registro}></NoRoute> 
    <NoRoute  exact path="/login" component={Login}></NoRoute> 
   <MyRoute  exact path="/clases" component={Home}></MyRoute> 
   <MyRoute exact path="/clases/:id" component={Clase}></MyRoute> 
   <MyRoute exact path="/favoritos" component={Favoritos}></MyRoute> 
    </Switch>
    </BrowserRouter>
    
   {/* <Home/> */}
   </>
  );
}

export default App;
