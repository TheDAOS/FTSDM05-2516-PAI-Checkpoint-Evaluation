import { useParams } from "react-router";
import { CartContext, ProductsContext } from "../App";
import { useContext } from "react";

function ProductDetail() {

    const products = useContext(ProductsContext);
    const { id } = useParams();

    const cart = useContext(CartContext);

    const [data] = products.filter((product) => product.id == id);

    // console.log(data);

    if (!data) {
        return (
            <div className="ProductDetail">
                <h1>No Data Found!</h1>
            </div>
        )
    }

    function handleAddToCart(event) {
        event.stopPropagation();
        cart.setCartItems(list => {
            list.push(data)
            return list;
        })
        // console.log(cart.cartItems);
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

            <button onClick={(event) => {
                handleAddToCart(event)
            }}>Add to Cart</button>
        </div>
    )
}

export default ProductDetail;