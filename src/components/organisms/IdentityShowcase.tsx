import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
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