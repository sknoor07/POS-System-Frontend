import React from 'react'
import ProductSection from './ProductSection/ProductSection'
import CartSection from './CartSection/CartSection'
import CustomerPaymentSection from './_components/CustomerPaymentSection'
import POSHeader from './Header.jsx/POSHeader'

const CreateOrder = () => {
  return (
    <div className='flex flex-col h-full bg-background'>
        <POSHeader />
        <div className='flex'>
            <ProductSection />
            <CartSection />
            <CustomerPaymentSection />
        </div>
    </div>
  )
}

export default CreateOrder