import { useState, useContext } from "react";
import './ItemCount.css'
import { CartContext } from "../context/CartContext";

const ItemCount = ({stock, data, setQuantitySelected}) => {
    const {addProductToCart} = useContext(CartContext)
    const [contador, setContador] = useState(0);

    const addNumber = () => {
        if(contador<stock){
            setContador(contador + 1)
        }
    }

    const deleteNumber = () => {
        if(contador>0) {
            setContador(contador - 1)
        }
    }

    const onAdd = () => {
        for (let index =0; index < contador; index++) {
            data.cant = contador;
            addProductToCart(data)

        } 
        setQuantitySelected(contador)
    }


    return(
        <div>
            <div className="count">
                <button onClick={deleteNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <button onClick={onAdd}>Comprar</button>
        </div>
    )
}

export default ItemCount