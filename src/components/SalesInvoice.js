import React, { useState, useContext } from 'react'
import { IoIosCart } from "react-icons/io"
import { HiUser, HiUserAdd } from 'react-icons/hi'
import {AiFillCaretDown} from 'react-icons/ai'
import { FaBarcode } from 'react-icons/fa'
import POSTABLE from './POSTABLE'
import SITOTAL from './SITOTAL'
import Bills from './Bills'
import { POSContext } from '../pages/POS'

const SalesInvoice = () => {

  const [toggleCustomer, setToggleCustomer] = useState(false)
  const { toggleBill } = useContext(POSContext)

  return (
    <div className='pos-sales-invoice'>
      <div className='sales-invoice-header'>
        <IoIosCart className='si-cart-icon' />
        <p>
            Sales Invoice
        </p>
      </div>

      <div className='sales-invoice-options'>

        <div className='si-customers'>
            <div className='si-user'>
                <HiUser  />
            </div>
            <div className='text'>
                <div className='inner-text' onClick={() => {
                    setToggleCustomer(!toggleCustomer)  
                }}>
                    <p>Walk-in customers</p>
                    <div className='icon'><AiFillCaretDown className={toggleCustomer && "rotate"} /></div>
                </div>
                <div className='inner' style={{display: toggleCustomer ? "block": "none"}} >
                    <input type="text" placeholder='Search for customer' />
                    <div className='text-inner'>
                        <p className='walk'>Walk-in customer</p>
                        <ul>
                            <li>John P</li>
                            <li>Moin</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='si-user'>
                <HiUserAdd />
            </div>
        </div>

        <div className='si-qrcode'>
            <div className='si-barcode-icon'>
                <FaBarcode />
            </div>
            <input type="text" placeholder='item name/Barcode/Itemcode'  />
        </div>
      </div>

      <POSTABLE />

      <div className='si-other'>

        <div className='si-sms'>
            <input type='checkbox' />
            <p>Send SMS to customer?</p>
        </div>

        <div className='si-other-charges'>
            <p>Other Charges <span style={{color: "brown"}}>*</span></p>
            <input type="text" placeholder='0.00' />
        </div>

      </div>

      <SITOTAL />
      
      {toggleBill && <Bills />}

    </div>
  )
}

export default SalesInvoice
