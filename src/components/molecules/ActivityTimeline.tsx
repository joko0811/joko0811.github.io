import React from "react";
import Container from "@mui/material/Container";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Activity from "../../type/Activity";

interface Props {
  activityList: Activity[];
}

const ActivityTimeline: React.FC<Props> = ({ activityList }) => (
  <Container maxWidth="sm">
    <Timeline position="right">
      {activityList.map((activity) => (
        <TimelineItem key={activity.name}>
          <TimelineOppositeContent color="text.secondary" style={{ flex: 0.1 }}>
            {activity.day}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{activity.name}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Container>
);

export default ActivityTimeline;
