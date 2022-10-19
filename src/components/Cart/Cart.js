import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {
    const {cartProducts} = useContext(CartContext)
    return (
        <>
        <div>
            Carrito de Checkout
        </div>
        {console.log("Producto desde cart",cartProducts)}
        </>
    )
}

export default Cart