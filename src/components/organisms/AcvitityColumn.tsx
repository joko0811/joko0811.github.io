import React from "react";
import Box from "@mui/material/Box";
import ActivityTimeline from "../molecules/ActivityTimeline";
import activityList from "../../data/activityList";

const ActivityColumn = () => (
  <Box>
    <ActivityTimeline activityList={activityList} />
  </Box>
);

export default ActivityColumn;
