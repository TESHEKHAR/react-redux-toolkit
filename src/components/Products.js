import React, { useState, useEffect } from 'react'

const Products = () => {

    const [products, setProducts] = useState([]);
     

    //useEffect ka use hum api ko fetch karne ke kiye karte hai aur jab component first time load ho data aa jaye
    
    useEffect(() => {
         const fetchProducts = async() => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
         };
         fetchProducts();
    },[]);
  return (
    <div className='productsWrapper'>
        {
        products.map(product => (
            <div className='card' key={product.id}>
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button className='btn'>Add To Cart</button>
            </div>
        ))
        }
    </div>
  )
}

export default Products