import './WidgetCart.css';
import ListCartWidget from '../ListCartWidget/ListCartWidget';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';


const WidgetCart = () => {
    const {cartProducts} = useContext(CartContext)

    return (
        <div className="widgetcart">
            {cartProducts.map ((e) => {
                return <ListCartWidget data={e} key={e.id}/>
                
            }) }
        </div>
    )
}

export default WidgetCart