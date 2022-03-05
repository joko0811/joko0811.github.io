import React from "react";
import Container from "@mui/material/Container";
import IdentityShowcase from "../organisms/IdentityShowcase";
import TabMenu from "../organisms/TabMenu";

function Portfolio() {
  return (
    <Container maxWidth="lg">
      <IdentityShowcase />
      <TabMenu />
    </Container>
  );
}

export default Portfolio;
