import React from "react";
import Stack from "@mui/material/Stack";
import MediaCard from "../molecules/MediaCard";
import profileData from "../../data/profile";

function Profile() {
  return (
    <Stack direction="row" justifyContent="center" sx={{ py: 5 }}>
      <MediaCard mediaCard={profileData} />
    </Stack>
    // TODO mediacardやめる
  );
}

export default Profile;
