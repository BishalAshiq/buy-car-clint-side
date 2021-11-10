import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './Reviews.css';
import image1 from '../../../images/reviews/reviewer-1.png'
import image3 from '../../../images/reviews/reviewer-3.jpg'
import image4 from '../../../images/reviews/reviewer-4.jpg'
import image5 from '../../../images/reviews/reviewer-5.jpg'
import image2 from '../../../images/reviews/reviewer-2.jpg'
import image6 from '../../../images/reviews/reviewer-6.jpg'



export default function MediaCard() {
     const [value, setValue] = React.useState(2);
  return (
    
   <div>
     <h1>CUSTOMERS REVIEW</h1>
      <div className='reviews'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={image1}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard Mathew
        </Typography>
        <Typography variant="body2" color="text.secondary">
        With a reputation for delivering concise and reliable information on vehicle quality, safety, and performance, Consumer Reports provides thorough reviews on all types of cars.
        </Typography>
      </CardContent>
      <CardActions>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </CardActions>
    </Card>
   
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={image2}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ibrahim Khalil
        </Typography>
        <Typography variant="body2" color="text.secondary">
        With a reputation for delivering concise and reliable information on vehicle quality, safety, and performance, Consumer Reports provides thorough reviews on all types of cars.
        </Typography>
      </CardContent>
      <CardActions>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={image3}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bura dadu
        </Typography>
        <Typography variant="body2" color="text.secondary">
        With a reputation for delivering concise and reliable information on vehicle quality, safety, and performance, Consumer Reports provides thorough reviews on all types of cars.
        </Typography>
      </CardContent>
      <CardActions>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={image4}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mashal Barek
        </Typography>
        <Typography variant="body2" color="text.secondary">
        With a reputation for delivering concise and reliable information on vehicle quality, safety, and performance, Consumer Reports provides thorough reviews on all types of cars.
        </Typography>
      </CardContent>
      <CardActions>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={image5}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ayeman Simran
        </Typography>
        <Typography variant="body2" color="text.secondary">
        With a reputation for delivering concise and reliable information on vehicle quality, safety, and performance, Consumer Reports provides thorough reviews on all types of cars.
        </Typography>
      </CardContent>
      <CardActions>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={image6}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Pritha Haque
        </Typography>
        <Typography variant="body2" color="text.secondary">
        With a reputation for delivering concise and reliable information on vehicle quality, safety, and performance, Consumer Reports provides thorough reviews on all types of cars.
        </Typography>
      </CardContent>
      <CardActions>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </CardActions>
    </Card>
    </div>
   </div>
   
    
  );
}