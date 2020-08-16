import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "@material-ui/core/Container";
import Top from "./containers/Top";
import Demand from "./containers/Demand";
import { Router } from "@reach/router";
import Waste from "./containers/Waste";
import Egg from './assets/egg.jpg';
import Sight from './assets/sight.jpg'

function App() {
  const [country, updateCountry] = useState("");
  const [year, updateYear] = useState("");
  const ContainerC = () => (
  return (
    <Container maxWidth="lg" style={{paddingBottom:"100px"}}>
      <div style={{justifyContent:"space-around", display:"flex", padding:"20px"}}>
        <a href ="https://egghub.org/" target="_blank">
        <img src={Egg} style={{height:"10vh"}}></img>
        </a>
        <a href="https://sightandlife.org/" target="_blank">
        <img src={Sight} style={{height:"10vh"}}></img>
        </a>
      </div>

      <div>
        <Top
          country={country}
          updateCountry={updateCountry}
          year={year}
          updateYear={updateYear}
        />
        <Demand
          country={country}
          updateCountry={updateCountry}
          year={year}
          updateYear={updateYear}
        />
      </div>
    </Container>
  );
  return (
    <Router>
      <ContainerC path="/" default />
      <Waste path="/width" />
    </Router>
  );
}

export default App;
