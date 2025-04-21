import { useEffect, createContext, useState } from 'react';
import './App.css'
import ProductList from './components/ProductList'

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
      <ProductList />
    </ProductsContext.Provider>
  )
}

export { ProductsContext }
export default App
