import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    const [products, setProducts] = useState([])
    {/* Product Api Fatch Here*/}
  function getProduct() {
    axios.get("/products.json").then((res) => {
      setProducts(res.data);

    }).catch((err) => {
      throw new Error(err.message ? err.message : "something went wrong")
    })
  }
  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div className="grid grid-cols-3 gap-7.5 mb-14">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default ProductGrid