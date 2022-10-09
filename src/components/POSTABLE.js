import React, { useContext } from 'react'
import { AiOutlineDelete } from "react-icons/ai"
import { POSContext } from '../pages/POS'

const POSTABLE = () => {
  const { productsCart, setProductsCart } = useContext(POSContext)

  const deleteCart = (id) => {
    setProductsCart(productsCart?.filter(product => product.id !== id))
  }

  const increaseQuantity = (id) => {
    let newQuantity = productsCart.map(product => {
        return product.id === id ? {...product, quantity: product.quantity + 1, tdsc: product.discount * (product.quantity + 1) , subtotal: product.price * (product.quantity + 1) - (product.tdsc + product.discount)} : product
      })

    setProductsCart(newQuantity)
  }

  const decreaseQuantity = (id) => {
    let newQuantity = productsCart.map(product => {
      if (product.quantity > 1) {
        return product.id === id ? {...product, quantity: product.quantity - 1, tdsc: product.discount * (product.quantity - 1), subtotal: product.price * (product.quantity - 1) - (product.tdsc - product.discount)} : product
      } else {
        return product
      }
      
    })

    setProductsCart(newQuantity)
  }

  return (
    <div className='pos-table'>
      <table>
        <thead>
            <tr>
                <th>Item Name</th>
                <th>Stock</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Discount</th>
                <th>TDSC</th>
                <th>Subtotal</th>
                <th>X</th>
            </tr>
        </thead>

        <tbody>
          { productsCart?.map(product => (
            <tr key={product.id}>
              <td>{product.product_name}</td>
              <td>{product.stock}</td>
              <td>
                <div className='quantity-btn-groups'>
                  <button className='quantity-btn' onClick={() => increaseQuantity(product.id)}>+</button>
                  <p>{product.quantity}</p>
                  <button className='quantity-btn' onClick={() => decreaseQuantity(product.id)}>-</button>
                </div>
              </td>
              <td>{product.price}</td>
              <td>{product.discount}</td>
              <td>{product.tdsc}</td>
              <td>{product.subtotal}</td>
            <td style={{cursor: "pointer"}} onClick={() => deleteCart(product.id)}><AiOutlineDelete className='text-red' /></td>
          </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default POSTABLE
