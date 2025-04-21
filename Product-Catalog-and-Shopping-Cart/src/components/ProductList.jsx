import { useContext } from "react";
import { ProductsContext } from "../App";

function ProductList() {

    const products = useContext(ProductsContext)

    console.log(products);

    return (
        <h1>ProductList </h1>
    )
}

export default ProductList;