import { useNavigate } from "react-router";

function Card({ product }) {

    let navigate = useNavigate();

    return (
        <div className="card" onClick={() => {
            navigate(`/product/${product.id}`)
        }}>
            <img src={product.image} />
            <h2>Title: {product.title}</h2>
            <h3>Price: ${product.price}</h3>
        </div>
    )
}

export default Card;