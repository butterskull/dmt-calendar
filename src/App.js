import React from "react";
import Masthead from "./Masthead";
import Month from "./Month";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Masthead />
      <main>
        <Month />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
