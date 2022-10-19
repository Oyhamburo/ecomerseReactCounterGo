import { Button } from "@mui/material"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import "./PriceTotal.css"
import { Link } from 'react-router-dom';

const PriceTotal = () => {
    const { cartProducts } = useContext(CartContext)
    const totalPrice = () => {
        let total = 0;
        cartProducts.map((i) => {
            total += i.price * i.cant;
        })
        return total;
    }
    totalPrice()
    return (
        <div className="priceTotal">
            <Link to="/contacto">
                <Button variant="contained" color="secondary">
                    Total
                    <span >
                        {":  $" + totalPrice()}
                    </span>
                </Button>
            </Link>
        </div>
    )
}
export default PriceTotal