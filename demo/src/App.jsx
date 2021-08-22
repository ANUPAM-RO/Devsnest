// import Time from "./Components/Time";
// import UseEffect1 from"./Components/UseEffect1";
// import { useState } from "react";
// import StateArray from "./Components/StateArray";
// import UseStateobj from "./Components/UseStateobj";
// import UseEffect2 from "./Components/UseEffect2";
// import UseState1 from "./Components/UseState1";
// import Basicform from "./Components/form/Basicform";
// import unController from "./Components/form/UnController";
import React from "react";
import { Route, Switch } from 'react-router-dom';
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
const App = () =>{
  const Name = () =>{
    return(
      <>
    <h2> My name is Anupam </h2>
    </>
    )
  }
 return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' component = {Home}/>
      <Route exact path = '/contact' component = {Contact}/>
      <Route path = '/contact/name' component = {Name}/>
      <Route path = '/about' component = {About}/>
      <Route component = {Error}/>
    </Switch>
    {/* <About/>
    <Contact /> */}
    {/* <h2>Counter App Redux</h2>
    <button>+</button>
    <input type="number" value="0"/>
    <button>-</button> */}
    </>
  );
}
export default App;
