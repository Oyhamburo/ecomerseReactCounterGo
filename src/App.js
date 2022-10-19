import './App.css';
import NavBar from './components/NavBar/NavBar';
import Itemcontainer from './components/ItemContainer/ItemContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Checkout from './components/pages/Checkout';
import CartProvider from './components/context/CartContext';
import Contacto from './components/pages/Contacto';


function App() {
  return (
    <CartProvider >
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path="/" element={<Itemcontainer section="Productos A"/>}/>
          <Route path="/contacto" element={ <Contacto /> }/>
          <Route path="/productos/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Checkout />} />
          <Route path="*" element={<h2>ERROR 404 - pagina no encontrada</h2>} />
          <Route path='/category/:category' element={<Itemcontainer section="Productos A"/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
