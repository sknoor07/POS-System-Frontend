import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { BadgePercent } from 'lucide-react';

import React from 'react'

const DiscountSection = () => {
    const[discount,setDiscount] = React.useState({type:"percentage",value:0});
    const handleDiscountChange = (e) => {
        const value = parseFloat(e.target.value);
        setDiscount({...discount,value}); 
    }
  return (
    <div className="p-2 border-b border-gray-300">
        <div className=" rounded-md border-gray-300 bg-muted dark:bg-muted-dark p-4">
        <div className="flex items-center justify-center mb-2">
            <h2 className="text-lg font-semibold flex items-center gap-2"> <BadgePercent className="w-5 h-5 mr-2"/> Discount</h2>
        </div>
      <div className="space-y-3">
        <Input placeholder="Enter discount amount" type="number" value={discount.value} onChange={handleDiscountChange} />
        <div className="flex flex-row items-center space-x-2">
            <Button variant={discount.type==='percentage' ? 'default' : 'outline'} className="cursor-pointer w-1/2" onClick={()=>setDiscount({...discount,type:"percentage"})}>%</Button>
            <Button variant={discount.type==='fixed' ? 'default' : 'outline'} className="cursor-pointer w-1/2" onClick={()=>setDiscount({...discount,type:"fixed"})}>$</Button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DiscountSection