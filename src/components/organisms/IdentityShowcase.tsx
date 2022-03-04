import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Accounts from "../molecules/Accounts";

export default function ComplexGrid() {
  return (
    <Stack direction="row" justifyContent="center" spacing={2} sx={{ py: 5 }}>
      <Avatar
        alt="logo"
        src={`${process.env.PUBLIC_URL}/hoku.png`}
        sx={{ width: 128, height: 128, boxShadow: 1 }}
      />
      <Stack spacing={2}>
        <Typography gutterBottom variant="h3" component="div">
          joko
        </Typography>
        <Accounts />
      </Stack>
    </Stack>
  );
}
