import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../molecules/TabPanel";
import Profile from "./Profile";
import Works from "./Works";
import ActivityColumn from "./AcvitityColumn";

export default function TabMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Profile" />
          <Tab label="Works" />
          <Tab label="Activity" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Profile />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Works />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ActivityColumn />
      </TabPanel>
    </Box>
  );
}
