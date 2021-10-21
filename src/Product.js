import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function BasicChips(props) {
    return (
        <Stack direction="row" spacing={1}>
            {props.stock>0 ? <Chip label="In stock" />
            : <Chip label="Out of stock" variant="outlined" /> }
        </Stack>
    );
}

export default function ActionAreaCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardActionArea href={props.det ? "/ecommerce" : `/prod/${props.prod.UPC}`}>
                <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/200/300"
                alt="product"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.prod.name}
                    <BasicChips stock={props.prod.availability.stock} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    €{props.prod.price.current.value}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}