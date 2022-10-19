import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import Badge from '@mui/material/Badge';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';


const ListCartWidget = ({ data }) => {
    const { price, image, title, descrip, cant, id } = data
    const { removeProduct } = useContext(CartContext)
    console.log({ data })
    return (
        <>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Badge badgeContent={cant} color="secondary">
                                <InboxIcon />
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary={title} />
                        <ListItemText primary={`price: $${price}`} />
                    </ListItemButton>
                    <Button onClick={() => removeProduct(id)}>
                        <DeleteIcon />
                    </Button>
                </ListItem>
            </List>
            <Divider />
        </>
    )
}

export default ListCartWidget