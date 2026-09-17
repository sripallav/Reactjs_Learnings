function Product({ name, price, brand, category }) {

    var discount = 1000;

    return (
        <div>
            <h2>{name}</h2>
            <p>Brand: {brand}</p>
            <p>Category: {category}</p>
            <p>Price: ₹{price}</p>
            <p>Final Price: ₹{price - discount}</p>
        </div>
    );
}

export default Product;