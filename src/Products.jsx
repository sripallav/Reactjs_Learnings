import React, { useMemo, useState } from 'react'

const Product = () => {
    const [search, setsearch] = useState("");
    const products=[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "price": 1500,
    "category": "Electronics"
  },
  {
    "id": 2,
    "name": "Bluetooth Speaker",
    "price": 2500,
    "category": "Electronics"
  },
  {
    "id": 3,
    "name": "Coffee Mug",
    "price": 500,
    "category": "Home Goods"
  },
  {
    "id": 4,
    "name": "Desk Lamp",
    "price": 1800,
    "category": "Home Goods"
  },
  {
    "id": 5,
    "name": "Running Shoes",
    "price": 3500,
    "category": "Sports"
  },
  {
    "id": 6,
    "name": "Yoga Mat",
    "price": 1200,
    "category": "Sports"
  },
  {
    "id": 7,
    "name": "Notebook",
    "price": 300,
    "category": "Stationery"
  },
  {
    "id": 8,
    "name": "Ballpoint Pen Set",
    "price": 400,
    "category": "Stationery"
  },
  {
    "id": 9,
    "name": "Water Bottle",
    "price": 900,
    "category": "Accessories"
  },
  {
    "id": 10,
    "name": "Backpack",
    "price": 2200,
    "category": "Accessories"
  }
];
const filterProducts = useMemo(()=>{
    console.log("Searching....");
    return products.filter(product=> product.name
                                            .toLowerCase()
                                            .includes(search.toLowerCase()))
},[search]);

  return (
    <div style={{height:'100vh',padding:'30px', backgroundColor:'black', color:'white'}}>
        <h2>Enter Product to search</h2>
        <input type="text" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
        <ul>
            {filterProducts.map(product=>{
                return <li key={product.id}>{product.name} - {product.price} - {product.category}</li>
            })}
        </ul>
    </div>
  )
}

export default Product;