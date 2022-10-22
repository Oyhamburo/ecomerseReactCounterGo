import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const ItemDetail = ({data,}) => {
    const [quantitySelected, setQuantitySelected] = useState(0)
    const {title,price,stock, image,descrip} = data;
    
    return(
        <article className="productDetail">
            <div className="itemContainer">
            <img src={`/assets/${image}`} />
            <h2 className="titleDetail">{title}</h2>
            <p className="infoDetail">{descrip}</p>
            <p className="infoDetail">${price}</p>
            {
                quantitySelected > 0 ?  <Link to="/cart" className="link"><Button variant="contained" >TERMINAR COMPRA</Button></Link>  : <ItemCount stock={stock} setQuantitySelected={setQuantitySelected} data={data}/>
            }
        </div>
        </article>
    )
}

export default ItemDetail;