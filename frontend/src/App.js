import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BarGraph from "./Components/BarGraph";
import LineGraph from "./Components/LineGraph";
import PieGraph from "./Components/PieGraph";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BarGraph />
        <LineGraph />
        <PieGraph />
      </header>
    </div>
  );
}

export default App;
