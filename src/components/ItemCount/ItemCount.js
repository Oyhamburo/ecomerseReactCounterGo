import { useState, useContext } from "react";
import './ItemCount.css'
import { CartContext } from "../context/CartContext";
import { ButtonGroup,Button } from "@mui/material";

const ItemCount = ({ stock, data, setQuantitySelected }) => {
    const { addProductToCart } = useContext(CartContext)
    const [contador, setContador] = useState(0);

    const addNumber = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const deleteNumber = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const onAdd = () => {
        for (let index = 0; index < contador; index++) {
            data.cant = contador;
            addProductToCart(data)

        }
        setQuantitySelected(contador)
    }


    return (
        <div>
            <ButtonGroup className="comprar" variant="contained" aria-label="outlined primary button group">
                <Button onClick={deleteNumber}>-</Button>
                <Button dissabled>{contador}</Button>
                <Button onClick={addNumber}>+</Button>
            </ButtonGroup>
            <div className="comprar">
                <Button onClick={onAdd} variant="outlined">Comprar</Button>
            </div>
        </div>
    )
}

export default ItemCount