import React, { useState, useEffect, createContext } from 'react'
import Brands from '../components/Brands'
import POSNAV from '../components/POSNAV'
import SalesInvoice from '../components/SalesInvoice'
import { productsDB } from '../db'

export const POSContext = createContext()


const POS = () => {
  const [products, setProducts] = useState([])
  const [productsCart, setProductsCart] = useState([])
  const [totalPrices, setTotalPrices] = useState('')
  const [totalQuantity, setTotalQuantity] = useState("")
  const [totalDiscount, setTotalDiscount] = useState("")
  const [toggleBill, setToggleBill] = useState(false)

  useEffect(() => {
    setProducts(productsDB)
  }, [])

  useEffect(() => {
    const price = productsCart?.map(product => {
      return product.price * product.quantity
    })

    let countPriceTotal = 0
    
    setTotalPrices(price?.reduce((a, b) => a + b, countPriceTotal))
  }, [productsCart])


  useEffect(() => {
    const quan = productsCart?.map(product => {
      return product.quantity
    })

    let countQuantityTotal = 0

    setTotalQuantity(quan.reduce((a,b) => a + b, countQuantityTotal))
  }, [productsCart])

  useEffect(() => {
    const disc = productsCart?.map(product => {
      return product.tdsc
    })

    let countDiscountTotal = 0

    setTotalDiscount(disc.reduce((a, b) => a + b, countDiscountTotal))
  }, [productsCart])

  return (
    <POSContext.Provider value={{products, setProducts, productsCart, setProductsCart, totalPrices, totalQuantity, totalDiscount, toggleBill, setToggleBill}} className='POS'>
      <POSNAV />

      <div className='pos-child-wrapper'>
        <SalesInvoice />
        <Brands />
      </div>

    </POSContext.Provider>
  )
}

export default POS
