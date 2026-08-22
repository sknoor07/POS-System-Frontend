import React from 'react'
import CustomerSection from './_component/CustomerSection'
import DiscountSection from './_component/DiscountSection'
import NoteSection from './_component/NoteSection'
import PaymentSection from './_component/PaymentSection'

  const CustomerPaymentSection = () => {
    return (
    <div className='flex flex-col w-1/5'>
      <CustomerSection />
      <DiscountSection />
      <NoteSection />
      <PaymentSection />
    </div>
  )
}

export default CustomerPaymentSection