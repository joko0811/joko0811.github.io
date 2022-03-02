import React from "react";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import Avatar from "@mui/material/Avatar";
import { grey } from "@mui/material/colors";

function Accounts() {
  return (
    <div className="Accounts">
      <Stack direction="row" spacing={2}>
        <Avatar>
          <a
            href="https://github.com/joko0811"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: grey[900] }} />
          </a>
        </Avatar>
        <Avatar>
          <a
            href="mailto:perry_0096@docomo.ne.jp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon sx={{ color: grey[900] }} />
          </a>
        </Avatar>
        <Avatar>
          <a
            href="https://twitter.com/joko0811_memo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon sx={{ color: grey[900] }} />
          </a>
        </Avatar>
      </Stack>
    </div>
  );
}

export default Accounts;
