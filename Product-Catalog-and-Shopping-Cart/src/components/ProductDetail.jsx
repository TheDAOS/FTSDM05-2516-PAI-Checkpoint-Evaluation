import { useParams } from "react-router";
import { ProductsContext } from "../App";
import { useContext } from "react";

function ProductDetail() {

    const products = useContext(ProductsContext);
    const { id } = useParams();

    const [data] = products.filter((product) => product.id == id);

    console.log(data);

    if (!data) {
        return (
            <div className="ProductDetail">
                <h1>No Data Found!</h1>
            </div>
        )
    }

    return (
        <div className="ProductDetail">
            <div>
                <img src={data.image} />
            </div>
            <h2>Title: {data.title}</h2>
            <span><b>Category:</b> {data.category}</span>
            <h3>Price: ${data.price}</h3>
            <p><b>Description:</b> {data.description}</p>
        </div>
    )
}

export default ProductDetail;