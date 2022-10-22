import './ItemProduct.css'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemProduct = ({ data, action }) => {
    const { title, image, price, stock, id, descrip } = data

    console.log(data)

    return (
        <Link to={`/productos/${id}`} className='cardproduct' >
            <Card  className='cardproduct__card'>
                <CardMedia
                    component="img"
                    height="140"
                    image={`/assets/${image}`}
                    alt="skin cs"
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