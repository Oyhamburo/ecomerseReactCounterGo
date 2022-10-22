import { useEffect, useState } from 'react'
import './ItemContainer.css'
import ItemList from '../ItemList/ItemList'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../firebaseConfig'
import { useParams } from 'react-router-dom'
import CategoryBtn from '../category/CategoryBtn'
import { CircularProgress } from '@mui/material'


const Itemcontainer = ({ section }) => {

    const [listProducts, setListProducts] = useState([])
    const { category } = useParams();
    const [loading, setLoading] = useState(true)



    const getProducts = async () => {
        const productCollection = collection(db, 'productos')
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    useEffect(() => {
        setListProducts([])
        setLoading(true)
        getProducts().then((res) => {
            setLoading(false)
            category ? filterProductByCategory(res, category) : setListProducts(res)
        })
    }, [category])

    const filterProductByCategory = ((array, category) => {
        return array.map((res, i) => {
            if (res.category == category) {
                return setListProducts(listProducts => [...listProducts, res])
            }
        })
    })


    return (
        <div className='listproduct'>
            <h2>{section}</h2>
            <div><CategoryBtn /></div>
            {loading ?
                (<div className='container-progress centrar'><CircularProgress /></div>)
                :
                (<> <ItemList dataProducts={listProducts}  /> </>)
            }
        </div>
    )
}

export default Itemcontainer