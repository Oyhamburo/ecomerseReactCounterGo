import './NavBar.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import WidgetCart from '../WidgetCart/WidgetCart';

const NavBar = () => {
    const { cartProducts } = useContext(CartContext)
    const totalNumber = () => {
        let count = 0
        cartProducts.forEach(element => {
            count = count + element.cant
        });
        return count
    };

    const [state, setState] = useState(false)

    const handleClick = () => {
        state ? setState(false) : setState(true)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" className='link__navbar'> <ul>Home</ul></Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/cart" className='link__navbar' > <ul>Cart</ul></Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/contacto" className='link__navbar'> <ul>Contacto</ul></Link>
                    </Typography>
                    <Button onClick={handleClick} color="inherit">
                        <Badge badgeContent={totalNumber()} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </Button>
                    {state ? <WidgetCart /> : ""}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;