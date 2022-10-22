import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import ListCartWidget from "../ListCartWidget/ListCartWidget"
import PriceTotal from "../PriceTotal/PriceTotal"
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import './Contacto.css'

const Checkout = () => {
    const {cartProducts} = useContext(CartContext)
    return(
        <>
        <br/>
        {cartProducts.length == 0 ? <Link to="/" className="volverHome"> <Button variant="contained" className="test" >Carrito vacio - ir al HOME para comprar productos</Button></Link> : ""}
        
        <div>
            {cartProducts.map( (data) => {
                return <ListCartWidget data={data} />
                
            })}
        </div>
        <PriceTotal />
        </>
    )
}

export default Checkout