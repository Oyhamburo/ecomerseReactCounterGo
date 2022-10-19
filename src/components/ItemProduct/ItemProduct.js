import './ItemProduct.css'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemProduct = ({ data, action }) => {
    const { title, image, price, stock, id, descrip } = data

    console.log(data)

    return (
        <Link to={`/productos/${id}`} className='cardproduct' >
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={`/assets/${image}`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {descrip}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )

}

export default ItemProduct