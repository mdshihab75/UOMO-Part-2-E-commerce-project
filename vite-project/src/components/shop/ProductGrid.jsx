import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';


const ProductGrid = ({view}) => {
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
    <div
  className={`grid gap-7.5 mb-14 ${
    view === 2
      ? "grid-cols-2"
      : view === 3
      ? "grid-cols-3"
      : "grid-cols-4"
      }`}>
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
  
</div>
  )
}

export default ProductGrid