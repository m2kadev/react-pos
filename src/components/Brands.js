import React, { useContext } from 'react'
import { POSContext } from '../pages/POS'
import { IoIosSearch } from 'react-icons/io'
import { productsDB } from '../db'


const Brands = () => {

  const { products, setProducts, productsCart, setProductsCart } = useContext(POSContext)

  const addProductToCart = (id) => {
    let newProduct = products.filter(product => product.id === id).map(p => {
      return {...p, tdsc: p.discount * p.quantity ,subtotal: p.price * p.quantity}
    })

    console.log(newProduct)

    if (productsCart.length === 0) {
      setProductsCart([...newProduct])
    } else {
      let test = []
      productsCart.map(p => {
        return newProduct.map(np => {
          return test = (p.id === np.id) ? [...productsCart] : [...productsCart, ...newProduct]
        })
      })
      setProductsCart([...test])
    }

    /* if (newProduct.length !== 0) {
      setProductsCart(productsCart?.map(p => {
        return p.id === id ? [...productsCart, {...p, quantity: p.quantity + 1, tdsc: p.discount * p.quantity ,subtotal: p.price * p.quantity}] : [...productsCart, ...newProduct]
      }))
    } else {
      setProductsCart([...productsCart, ...newProduct])
    }

    console.log(productsCart) */
  }

  const handleSearch = (e) => {
    console.log(e.target.value)
    //setProducts(products.filter(p => p.product_name.includes(e.target.value)))
    if(e.target.value === "") {
      return setProducts(productsDB)
    } else {
      let searchProduct = productsDB.filter(p => p.product_name.includes(e.target.value))
      setProducts(searchProduct)
    }
  }


  return (
    <div className='brands-container'>

      <div className='search-brands'>
        <div className='search-icon'>
           <IoIosSearch />
        </div>
        <input type="text" placeholder='Search Brands' onChange={handleSearch} />
      </div>

      <div className='brands-wrapper'>
        {products.map(product => (
          <div key={product.id} className='brands' onClick={() => addProductToCart(product.id)}>
              <p className='b-name'>{product.product_name}</p>
              <p className='b-price'>{product.price}Kyats</p>
              <span className='b-disc'>{product.discount} discount</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brands
