import { Button } from '@/components/ui/button'
import { PauseIcon } from 'lucide-react';
import { CreditCardIcon } from 'lucide-react'
import { useState } from 'react';
import PaymentDialog from './PaymentDialog';



const PaymentSection = () => {
    const cartItem=[1];
    const[showPaymentDialog, setShowPaymentDialog]=useState(false);
    return (
    <div className='flex flex-1 flex-col p-2 justify-end '>
        <div className='space-y-4'>
            <div className='text-center '>
                <h1 className='text-3xl font-bold text-gray-600 dark:text-white-200'> {899}$</h1>
                <p className='text-sm text-muted-foreground'> Total Amount</p>
            </div>
            <div className='space-y-3'>
                <Button 
                disabled={cartItem.length===0} 
                variant="secondary" 
                className="w-full text-lg py-3 font-semibold cursor-pointer "
                onClick={()=>setShowPaymentDialog(true)}
                >
                <CreditCardIcon />
                Process Payment
                </Button>

                <Button disabled={cartItem.length===0} variant="outline" className="w-full text-lg py-3 font-semibold cursor-pointer "><PauseIcon />Hold Order</Button>
                
            </div>
        </div>
        <PaymentDialog showPaymentDialog={showPaymentDialog} setShowPaymentDialog={setShowPaymentDialog}/>
    </div>
  )
}

export default PaymentSection