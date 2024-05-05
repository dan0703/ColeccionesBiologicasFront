import React from 'react';
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Home from "./pages/Home";
import Us from "./pages/Us";
import Contact from "./pages/Contact";
import Consult from './pages/About';
import Tag from './Componentes/Specimens/Tag/Tag'; 




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={ props => ( <Home { ...props} />)}></Route>
          <Route path="/Consult" exact element={<Consult/>}></Route>
          <Route path="/Us" exact element={<Us/>}></Route>
          <Route path="/Contact" exact element={<Contact/>}></Route>
          <Route path="/About" exact element={<Contact/>}></Route>
          <Route path="/Tag" exact element={<Tag/>}></Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;