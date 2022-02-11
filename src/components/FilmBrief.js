import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import {PickDate} from './PickDate';
import { ShowingTimes } from './ShowingTimes';
export const FilmBrief = ({film, showings, currentDate}) => (
    <Card sx={{ maxWidth: 345 }} style={{ margin: "10px" }} key={film.id}>
    <CardMedia
      component="img"
      height="300"
      image={film.poster_path}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {film.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {film.tagline}
      </Typography>
    </CardContent>
    <PickDate />
    <ShowingTimes currentDate={currentDate} currentFilm={film} showings={showings} />
  </Card>
)