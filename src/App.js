import React from "react";

import "./App.scss";
import CardContainer from "./containers/CardContainer";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  return (
    <>
      <Toolbar />
      <CardContainer />
    </>
  );
}

export default App;
