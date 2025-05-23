import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../App";

function NavBar() {

    const { cartItems } = useContext(CartContext)

    return (
        <header>
            <span>Fake Store</span>

            <nav>
                <Link to="/">Products</Link>
                <Link to="/cart">Cart</Link>
            </nav>
            <button> {cartItems.length > 0 ? "Checkout" : "Your cart is empty"} </button>
        </header>
    )
}

export default NavBar;