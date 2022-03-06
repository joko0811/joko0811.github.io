import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface Production {
  imagePath: string;
  imageHeight: number;
  title: string;
  description: string;
  usedSkil: string[];
}

export default function MediaCard(props: Production) {
  const { imagePath, imageHeight, title, description, usedSkil, ...other } =
    props;

  return (
    <Card sx={{ width: 600 }}>
      <CardMedia
        component="img"
        height={imageHeight}
        image={require(imagePath)}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h1" align="left">
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="span"
          color="text.secondary"
          align="left"
        >
          {description}
        </Typography>
      </CardContent>
      <Stack direction="row">
        {usedSkil.map((usedSkil) => (
          <Chip label={usedSkil} variant="outlined" />
        ))}
      </Stack>
    </Card>
  );
}
