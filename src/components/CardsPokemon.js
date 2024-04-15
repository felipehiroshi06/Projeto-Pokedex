import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { typeHandler } from '../utils/Types';

export default function CardsPokemon({name, image, types}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="300" image={image} alt="pokemons"/>
        <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom variant="h5" component="div">
            {name} 
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {typeHandler(types)}
          </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
