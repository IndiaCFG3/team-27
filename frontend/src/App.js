import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "@material-ui/core/Container";
import Top from "./containers/Top";
import Demand from "./containers/Demand";
import { Router } from "@reach/router";
import Waste from "./containers/Waste";

function App() {
  const [country, updateCountry] = useState("");
  const [year, updateYear] = useState("");
  const ContainerC = () => (
    <Container maxWidth="lg">
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
