import React from "react";
import Portfolio from "./components/pages/Portfolio";
import Container from "@mui/material/Container";
import { StyledEngineProvider } from "@mui/material/styles";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Container maxWidth="lg">
          <Portfolio />
        </Container>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
