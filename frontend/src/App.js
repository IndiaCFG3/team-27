import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "@material-ui/core/Container";
import Top from "./containers/Top";
import Demand from "./containers/Demand";

function App() {
  const [country, updateCountry] = useState("");
  const [year, updateYear] = useState("");

  return (
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
}

export default App;
