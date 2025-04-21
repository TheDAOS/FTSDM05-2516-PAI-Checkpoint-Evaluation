import { useContext } from "react";
import { CartContext } from "../App";

function Cart() {

    const cart = useContext(CartContext)

    if (cart.cartItems.length == 0) {
        return (
            <div className="cart">
                <h1> Your cart is empty </h1>
            </div>

        )
    }

    return (
        <div className="cart">
            {/* {typeof cart.cartItems} */}
            {cart.cartItems.map(item =>
                <h1>{item.title}</h1>
            )}
        </div>
    )
}

export default Cart;