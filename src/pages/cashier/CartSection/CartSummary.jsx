import { Separator } from '@/components/ui/separator'
import React from 'react'

const CartSummary = () => {
  return (
    <div className="border-t bg-muted p-4">
      <div className="space-y-2  text-sm ">
        <div className="flex flex-col justify-between gap-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>$1,999.98</span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span>$199.99</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="font-semibold">Total:</span>
              <span className="font-bold">$2,199.97</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartSummary