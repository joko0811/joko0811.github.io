import React from "react";
import IdentityShowcase from "./components/organisms/IdentityShowcase";
import Container from "@mui/material/Container";
import { StyledEngineProvider } from "@mui/material/styles";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Container maxWidth="md">
          <IdentityShowcase />
        </Container>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
