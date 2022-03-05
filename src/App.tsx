import React from "react";
import Portfolio from "./components/pages/Portfolio";
import { StyledEngineProvider } from "@mui/material/styles";
import "./App.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Portfolio />
    </StyledEngineProvider>
  );
}

export default App;
