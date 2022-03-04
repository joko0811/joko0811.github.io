import React from "react";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { grey } from "@mui/material/colors";

function Accounts() {
  return (
    <div className="Accounts">
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <a
          href="https://github.com/joko0811"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black" }}
        >
          <GitHubIcon />
        </a>
        <a
          href="mailto:perry_0096@docomo.ne.jp"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black" }}
        >
          <EmailIcon />
        </a>
        <a
          href="https://twitter.com/joko0811_memo"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black" }}
        >
          <TwitterIcon />
        </a>
      </Stack>
    </div>
  );
}

export default Accounts;
