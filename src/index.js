import React from "react";
import ReactDOM from "react-dom";
import DDSearch from "./DDSearch.js";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <DDSearch />
      </MuiThemeProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
