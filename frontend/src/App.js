import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "@material-ui/core/Container";
import Top from "./containers/Top";
import Bar from "./Components/BarGraph";
import Line from "./Components/LineGraph";
import Pie from "./Components/PieGraph";

function App() {
  return (
    <Container maxWidth="lg">
      <div>
        <Top />
      </div>
      <div className="flexContainer">
        <Bar />
        <Line />
        <Pie />
        <Line />
      </div>
    </Container>
  );
}

export default App;
