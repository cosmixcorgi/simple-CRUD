
/* eslint-disable react/prop-types */
//import React from 'react'

const Product = ({product}) => {
  return (
    <div className='bg-white rounded shadow-lg overflow-hidden'>
        <img src={product.image} className="w-full h-28 object-cover" />
        <div className="px-4 pt-2 pb-4">
            <h2 className="text font-semibold">{product.name}</h2>
            <h2 className="text-sm">{product.quantity}</h2>
            <h2 className="text-sm">{product.price}</h2>
        </div>
    </div>
  )
}

export default Product