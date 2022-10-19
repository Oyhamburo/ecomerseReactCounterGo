import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import PriceTotal from "../PriceTotal/PriceTotal"
import db from '../../firebaseConfig.js'
import { collection, addDoc } from "firebase/firestore"

const Contacto = () => {

    const totalPrice = () => {
        let total = 0;
        cartProducts.map((i) => {
            total += i.price * i.cant;
        })
        return total;
    }
    

    const { cartProducts } = useContext(CartContext)
    const [ success, setSuccess ] = useState()
    const [order, setOrder] = useState({
        items: cartProducts.map( (product) => {
            return {
                id: product.id,
                title: product.title,
                price: product.price
            }
        } ),
        buyer: {},
        total: totalPrice()
    })

    const [formData, setFormData] = useState ({
        name: '',
        phone: '',
        email: ''
    })


    const handleChange = (e) => {
        setFormData({...formData,[e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        console.log("orden para enviar:", {...order, buyer: formData})
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        console.log("orden generada ", orderDoc)
    }
    
    return (
        <div>
        <h2>Datos de contacto</h2>
        
        {success ? (
            <>
                <h3>Su orden se genero con exito!</h3>
                <p>ID de compra : {success}</p>
            </>
        ) : (
            <form onSubmit={submitData}>
            <input 
                type='text'
                name='name' 
                placeholder="Ingrese su nombre"
                onChange={handleChange}
                value={formData.name} 
            />
            <input 
                type='number' 
                name='phone' 
                placeholder="Ingrese su telefono"
                value={formData.phone}
                onChange={handleChange} 
            />
            <input 
                type='email' 
                name='email' 
                placeholder="Correo electronico"
                value={formData.email}
                onChange={handleChange} 
            />
            <button type="submit">Enviar</button>
        </form>
        )}
        </div>
        
        
        
    )
}

export default Contacto