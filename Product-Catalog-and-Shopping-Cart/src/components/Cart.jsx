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
                <div>
                    {item.title}  ${item.price} 
                </div>
            )}

            <h2>Total: ${cart.cartItems.reduce((a, item) => {
                a += item.price
                return a;
            }, 0)}</h2>
            <button> {cart.cartItems.length === 0 ? "Your cart is empty" : "Checkout"} </button>
        </div>
    )
}

export default Cart;