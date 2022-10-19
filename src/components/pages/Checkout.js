import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import ListCartWidget from "../ListCartWidget/ListCartWidget"
import PriceTotal from "../PriceTotal/PriceTotal"
import { Link } from 'react-router-dom';


const Checkout = () => {
    const {cartProducts} = useContext(CartContext)
    return(
        <>
        {cartProducts.length == 0 ? <Link to="/"> <ul>Carrito vacio - ir al HOME para comprar productos</ul></Link> : ""}
        
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