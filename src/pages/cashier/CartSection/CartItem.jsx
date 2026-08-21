import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Trash2Icon } from 'lucide-react'
import { Plus } from 'lucide-react'
import { Minus } from 'lucide-react'
import React from 'react'

const CartItem = ({ send }) => {
    return (
        <Card className='border-l-4 border-l-gray-500 '>
            <CardContent className="p-3">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <h3 className="font-medium">{send.name}</h3>
                        <p className="text-sm text-muted-foreground">
                            {send.sku}
                        </p>
                    </div>
                    <div className="flex items-center space-x-2 jsustify-between">
                        <div className=" flex items-center border rounded-md  ">
                            <Button variant="ghost" size="sm" className="cursor-pointer">
                                <Minus className="w-4 h-4" />
                            </Button>
                            <span className="px-3 text-sm font-medium min-w-[2rem] text-center">{send.quantity}</span>
                            <Button variant="ghost" size="sm" className="cursor-pointer">
                                <Plus className="w-4 h-4" />
                            </Button>
                        </div>
                        <div className="items-center text-right">
                            <p className='font-medium'>{send.sellingPrice}</p>
                            <p className='text-sm font-bold text-gray-700'>${(send.sellingPrice * send.quantity).toFixed(2)}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="cursor-pointer">
                            <Trash2Icon className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CartItem