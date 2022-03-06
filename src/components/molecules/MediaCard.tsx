import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import MediaCardProps from "../../type/MediaCardProps";

interface Props {
  mediaCard: MediaCardProps;
}

const MediaCard: React.FC<Props> = ({ mediaCard }) => (
  <Card sx={{ width: mediaCard.cardWidth }}>
    <CardMedia
      component="img"
      height={mediaCard.imageHeight}
      image={require(`../../img/${mediaCard.imagePath}`)}
      alt={mediaCard.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h1" align="left">
        {mediaCard.title}
      </Typography>
      <Typography
        variant="body2"
        component="span"
        color="text.secondary"
        align="left"
      >
        {mediaCard.description}
      </Typography>
    </CardContent>
    <Grid container spacing={1} sx={{ padding: 1 }}>
      {mediaCard.tips.map((tips) => (
        <Grid item key={tips}>
          <Chip label={tips} variant="outlined" />
        </Grid>
      ))}
    </Grid>
  </Card>
);

export default MediaCard;
