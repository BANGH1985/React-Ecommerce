import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/CartContainer/CartContainer';

import NavBar from './components/NavBar/NavBar';
import ProductListcontainer from './components/ItemListContainer/ItemListContainer';



import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './components/NavBar/NavBar.css'
import './components/ItemListContainer/ItemListContainer.css'

function App() {

  return (
    <>
    <BrowserRouter>
        <NavBar />
          <Routes>  
            <Route path='/' element={<ProductListcontainer greeting='BIENVENIDOS'/>} />
            <Route path='/category/:cid' element={<ProductListcontainer/>} />
            <Route path='/detail/:pid' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<CartContainer/>} />
            <Route path='*' element={<Navigate to='/'/> }/>
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App 