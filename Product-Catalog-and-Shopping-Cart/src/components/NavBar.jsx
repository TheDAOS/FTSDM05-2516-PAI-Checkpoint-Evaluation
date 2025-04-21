import { Link } from "react-router";

function NavBar() {

    return (
        <header>
            <span>Fake Store</span>
            
            <nav>
                <Link to="/">Products</Link>
                <Link to="/cart">Cart</Link>
            </nav>

            <button> Cart </button>
        </header>
    )
}

export default NavBar;