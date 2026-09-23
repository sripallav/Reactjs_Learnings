import React, { useState } from "react";
import axios from "axios";

const Productdetails = () => {

    const [products, setProducts] = useState([]);
    const [showProducts, setShowProducts] = useState(false);

    const getProducts = () => {

        if (showProducts) {
            setShowProducts(false);
            return;
        }

        axios.get("https://dummyjson.com/products")
            .then(response => {

                console.log(response.data);

                setProducts(response.data.products);
                setShowProducts(true);
            })
            .catch(error => {
                console.log(error);
                window.alert("Error");
            });
    };

    return (
        <div>

            <h1>Products</h1>

            <button onClick={getProducts}>
                {showProducts ? "Hide Products" : "Get Products"}
            </button>

            {showProducts && (
                <table border="1">

                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            )}

        </div>
    );
};

export default Productdetails;