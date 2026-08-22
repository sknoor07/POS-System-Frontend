import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React from 'react'
import { useState } from 'react'

const paymentMethods=[
    {id:1,name:"Credit Card",key:"cCard"},
    {id:2,name:"Debit Card",key:"dCard"},
    {id:3,name:"UPI",key:"upi"},
    {id:4,name:"Cash",key:"cash"},
]

const PaymentDialog = ({showPaymentDialog, setShowPaymentDialog}) => {
    const[paymentMethod, setPaymentMethod]= useState("");
  return (
    <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Select Payment Method</DialogTitle>
            </DialogHeader>
            <div className='space-y-4'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold text-gray-600 dark:text-gray-300'>{899}$<p className='text-sm text-muted-foreground'> Amount to be paid</p></h1>
                </div>
                <div className='space-y-3'>
                    {paymentMethods.map((method)=>(
                        <Button 
                        key={method.id} 
                        className="w-full text-left"
                        variant={paymentMethod===method.key?"secondary":"default"}
                        onClick={()=>setPaymentMethod(method.key)}
                        >
                            {method.name}
                        </Button>
                    ))}
                </div>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default PaymentDialog