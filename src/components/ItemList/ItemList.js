import ItemProduct from "../ItemProduct/ItemProduct"



const ItemList = ({dataProducts}) => {
    return(
        <section className='grid__card'>
        {dataProducts.map( (product) => {
            return  <ItemProduct key={product.id} data={product}/>
        })}
        </section>
    )
}

export default ItemList