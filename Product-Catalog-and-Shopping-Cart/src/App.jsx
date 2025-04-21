import { useEffect, createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart';
import NavBar from './components/NavBar';

const ProductsContext = createContext(null);

function App() {
  const api = 'https://fakestoreapi.com/products';

  let [products, setProductList] = useState([]);

  async function getData(api) {
    try {
      const response = await fetch(api);
      const data = await response.json();

      // console.log(data);
      setProductList(data)
    } catch (error) {
      console.log('Error', error)
    }
  }

  useEffect(() => {
    getData(api);
  }, [])

  return (
    <ProductsContext.Provider value={products}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ProductList />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </ProductsContext.Provider>
  )
}

export { ProductsContext }
export default App
