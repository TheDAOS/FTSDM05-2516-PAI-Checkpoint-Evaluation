import { useNavigate } from "react-router";
import { CartContext } from "../App";
import { useContext } from "react";

function Card({ product }) {

    let navigate = useNavigate();
    let cart = useContext(CartContext);

    function handleAddToCart(event) {
        event.stopPropagation();
        cart.setCartItems(list => {
            list.push(product)
            return list;
        })
        console.log(cart.cartItems);
    }

    return (
        <div className="card" onClick={() => {
            navigate(`/product/${product.id}`)
        }}>
            <img src={product.image} />
            <h2>Title: {product.title}</h2>
            <h3>Price: ${product.price}</h3>

            <button onClick={(event) => {
                handleAddToCart(event)
            }}>Add to Cart</button>
        </div>
    )
}

export default Card;