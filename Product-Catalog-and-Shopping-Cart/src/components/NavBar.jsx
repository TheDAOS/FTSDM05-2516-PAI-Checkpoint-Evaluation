import { Link } from "react-router";

function NavBar() {

    return (
        <nav>
            <Link to="/">Products</Link>
            <Link to="/cart">Cart</Link>
        </nav>
    )
}

export default NavBar;