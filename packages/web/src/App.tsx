import React from "react";
import { Routes } from "./routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 style={{ color: "red", textAlign: "center" }}>Airbnb</h1>
      <Routes />
    </div>
  );
};

export default App;
