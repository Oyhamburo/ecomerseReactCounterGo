import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
// firebase
import db from '../../firebaseConfig'
import { doc, getDoc, getDocs } from "firebase/firestore"
import { async } from '@firebase/util'



const ItemDetailContainer = () => {
    const [productData, setProductData] = useState({})
    const { id } = useParams()
    
    useEffect( () => {
        // products.some((product) => {
        //     if(product.id == id) {
        //         setProductData (product)
        //     }
        // })
        getProducts()
        .then((res) => {
            setProductData(res)
        })
    }, [id])

    // const filterById = () => {
    //     products.some( (product) => {
    //         if(product.id == id) {
    //             setProductData(product)
    //         }
    //     })
    // }

    // const [listProducts, setListProducts] = useState([])

    // const getProducts = new Promise ( ( resolve, reject ) => {
    //     setTimeout( () => {
    //         resolve (products.find(item => item.id === 2 ))
    //     }, 2000)
        
    // } )

    // useEffect(() => {
    //     getProducts
    //         .then((res) => {
    //             setListProducts(res)
    //         })
    //         .catch((error) => {
    //             console.log("error")
                
    //         })
    //         .finally( () => {
        
    //         })   
    // }, [])

    const getProducts = async () => {
        const docRef = doc(db, 'productos', id)
        const docSnapshot = await getDoc(docRef)
        console.log('docSnapshot',docSnapshot)

        let product = docSnapshot.data()
        product.id = docSnapshot.id
        console.log('data con id', product)
        return product
    }
    

    return(
        <div className='listproduct'>
            <h2>Detalles</h2>
            <ItemDetail data={productData}/>
            
            
        </div>
    )
}

export default ItemDetailContainer;