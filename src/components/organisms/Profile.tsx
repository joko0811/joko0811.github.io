import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import jokoPic from "../images/joko.jpg";

function Profile() {
  return (
    <div className="Profile">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={jokoPic}
          alt="詳細情報"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            joko
          </Typography>
          <Typography variant="body2" color="text.secondary">
            静岡大学情報学部 情報科学科 大木研究室
            <br />
            好きなもの：馬の娘，hhkb
            <br />
            漕艇部所属
            <br />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;
