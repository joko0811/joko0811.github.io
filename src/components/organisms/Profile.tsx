import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import overviewPic from "../images/joko.jpg";

function Profile() {
  return (
    <Stack direction="row" justifyContent="center" sx={{ py: 5 }}>
      <Card sx={{ width: 600 }}>
        <CardMedia
          component="img"
          height="300"
          image={overviewPic}
          alt="詳細情報"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" align="left">
            Profile
          </Typography>
          <Typography
            variant="body2"
            component="span"
            color="text.secondary"
            align="left"
          >
            静岡大学情報学部 情報科学科 大木研究室
            <br />
            好きなもの：馬の娘，hhkb
            <br />
            漕艇部所属
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default Profile;
