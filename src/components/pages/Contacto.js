import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import PriceTotal from "../PriceTotal/PriceTotal"
import db from '../../firebaseConfig.js'
import { collection, addDoc } from "firebase/firestore"
import { TextField, Button } from "@mui/material"
import './Contacto.css'
const Contacto = () => {

    const totalPrice = () => {
        let total = 0;
        cartProducts.map((i) => {
            total += i.price * i.cant;
        })
        return total;
    }


    const { cartProducts } = useContext(CartContext)
    const [success, setSuccess] = useState()
    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return {
                id: product.id,
                title: product.title,
                price: product.price
            }
        }),
        buyer: {},
        total: totalPrice()
    })

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitData = (e) => {
        e.preventDefault()
        console.log("orden para enviar:", { ...order, buyer: formData })
        pushData({ ...order, buyer: formData })
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        console.log("orden generada ", orderDoc)
    }

    return (
        <div>
            <div className="contacto">
                <div className="contactoCard">
                    <h2 className="contacto__titulo">Datos de contacto</h2>

                    {success ? (
                        <div className='contacto2'>
                            <h3>Su orden se genero con exito!</h3>
                            <p><span>Nombre:</span> {formData.name}</p>
                            <p><span>Telefono:</span> {formData.phone}</p>
                            <p><span>Email: </span>{formData.email}</p>
                            <p><span>ID de compra :</span> {success}</p>
                        </div>
                    ) : (

                        <form onSubmit={submitData} className='contacto__form '>
                            <TextField
                                className="contacto__form__input"
                                label="Name"
                                variant="outlined"
                                name='name'
                                onChange={handleChange}
                                value={formData.name}
                            />
                            <TextField
                                className="contacto__form__input"
                                label="Phone"
                                variant="outlined"
                                name='phone'
                                onChange={handleChange}
                                value={formData.phone}
                            />
                            <TextField
                                className="contacto__form__input"
                                label="Email"
                                variant="outlined"
                                name='email'
                                onChange={handleChange}
                                value={formData.email}
                            />
                            <Button type="submit" variant="outlined">Enviar</Button>
                        </form>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Contacto