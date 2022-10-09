import React, { useContext } from 'react'
import { FaRegHandPaper } from 'react-icons/fa'
import { BsCash } from 'react-icons/bs'
import { POSContext } from '../pages/POS'

const SITOTAL = () => {
  const { totalPrices, totalQuantity, totalDiscount, toggleBill, setToggleBill } = useContext(POSContext)

  return (
    <div className='si-total-wrapper'>
        <div className='si-total'>
            <div>
                <p className='si-total-header'>Quantity:</p>
                <p className='si-total-amount'>{totalQuantity}<span style={{fontSize: "0.8rem"}}>Items</span></p>
            </div>
            <div>
                <p className='si-total-header'>Total Amount:</p>
                <p className='si-total-amount'>{ totalPrices }<span style={{fontSize: "0.8rem"}}>Kyats</span></p>
            </div>
            <div>
                <p className='si-total-header'>Total Discount:</p>
                <p className='si-total-amount'>{ totalDiscount }<span style={{fontSize: "0.8rem"}}>Kyats</span></p>
            </div>
            <div>
                <p className='si-total-header'>Grand Total:</p>
                <p className='si-total-amount'>{ totalPrices - totalDiscount}<span style={{fontSize: "0.8rem"}}>Kyats</span></p>
            </div>
        </div>

        <div className='si-btn-group'>
            <button className='si-btn bg-red'><FaRegHandPaper /> Hold</button>
            <button className='si-btn bg-green'><BsCash />Multiple</button>
            <button className='si-btn bg-blue'><BsCash /> Cash</button>
            <button onClick={() => setToggleBill(!toggleBill)} className='si-btn bg-orange'><BsCash /> Pay All</button>
        </div>
    </div>
  )
}

export default SITOTAL
