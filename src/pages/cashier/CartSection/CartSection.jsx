
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { Pause } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import HeldOrderDialog from './HeldOrderDialog'


const CartSection = () => {
  const [showHeldOrdersDialog, setShowHeldOrdersDialog] = React.useState(false);
  
const cartItems=[
  {
    name:"ROG Phone 7D Ultimate",
    sku:"SKU123",
    sellingPrice:999.99,
    quantity:1
  },
  {
    name:"ROG Phone 6D Ultimate",
    sku:"SKU123",
    sellingPrice:999.99,
    quantity:2
  },{
    name:"ROG Phone 7D Ultimate",
    sku:"SKU123",
    sellingPrice:999.99,
    quantity:1
  },{
    name:"ROG Phone 7D Ultimate",
    sku:"SKU123",
    sellingPrice:999.99,
    quantity:1
  },{
    name:"ROG Phone 7D Ultimate",
    sku:"SKU123",
    sellingPrice:999.99,
    quantity:1
  },{
    name:"ROG Phone 7D Ultimate",
    sku:"SKU123",
    sellingPrice:999.99,
    quantity:1
  },{
    name:"ROG Phone 7D Ultimate",
    sku:"SKU123",
    sellingPrice:999.99,
    quantity:1
  },
]
  return (
    <>
    <div className=' border flex flex-col w-2/5 h-[calc(100vh-86px)] bg-card '>
        <div className='flex items-center justify-between p-4 border-b bg-muted shrink-0'>
          <h2 className='text-lg font-semibold flex items-center gap-2'>
            <ShoppingCart /> Cart ({cartItems.length} Items)
          </h2>
          <div className='flex items-center space-x-6'>
            <Button variant="outline"  className=' cursor-pointer' onClick={() => setShowHeldOrdersDialog(true)}>
              <Pause className='w-4 h-4 mr-1' /> Held
            </Button>
            <Button variant="outline"  className=' cursor-pointer'>
              <Trash2 className='w-4 h-4 mr-1' /> Clear
            </Button>
          </div>
        </div>
        <div className='flex-1 min-h-0 overflow-y-auto p-4 space-y-4'>
          {cartItems.map((item, index) => (
            <CartItem key={index} send={item} />
          ))}
        </div>
        <div className='mt-auto shrink-0'>
          <CartSummary />
        </div>
    </div>
    <HeldOrderDialog showHeldOrdersDialog={showHeldOrdersDialog} setShowHeldOrdersDialog={setShowHeldOrdersDialog} />
    </>
  )
}

export default CartSection