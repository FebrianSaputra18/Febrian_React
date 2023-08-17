import React from 'react'
import ProductCard from './ProductCard'
import Shop from '../../pages/Shop'

const ProductList = ({data}) => {
  return (
    <>
        {
          data?.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
        }
    </>
  )
}

export default ProductList
