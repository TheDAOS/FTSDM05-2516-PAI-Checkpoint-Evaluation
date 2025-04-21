import { useParams } from "react-router";
import { ProductsContext } from "../App";
import { useContext } from "react";

function ProductDetail() {

    const products = useContext(ProductsContext);
    const { id } = useParams();

    const [ data ] = products.filter((product) => product.id == id);

    console.log(data);

    return (
        <h1>{data.title}</h1>
    )
}

export default ProductDetail;