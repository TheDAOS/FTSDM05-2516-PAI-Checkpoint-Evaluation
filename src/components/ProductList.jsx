import { useContext } from "react";
import { ProductsContext } from "../App";
import Card from "./Card";

function ProductList() {

    const products = useContext(ProductsContext)

    // console.log(products);

    return (
        <div className="products">
            {products.map((product) =>
                <Card product={product}></Card>
            )}
        </div>
    )
}

export default ProductList;