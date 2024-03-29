import React from "react";
import MediaCard from "../molecules/MediaCard";
import Grid from "@mui/material/Grid";
import workList from "../../data/workList";

const Works = () => (
  <Grid container spacing={2} sx={{ py: 5 }}>
    {workList.reverse().map((work) => (
      <Grid item key={work.title}>
        <MediaCard mediaCard={work} />
      </Grid>
    ))}
  </Grid>
);
export default Works;
