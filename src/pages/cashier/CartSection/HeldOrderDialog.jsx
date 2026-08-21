
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { Play } from 'lucide-react'
import React from 'react'

const HeldOrderDialog = ({showHeldOrdersDialog, setShowHeldOrdersDialog}) => {

  const heldOrders=[
    {
      id:"96798",
      items:[1,1,1,1],
      timeStamp:"2023-08-15T10:30:00Z",
    },
    {
      id:"8755",
      items:[1,1,1,1],
      timeStamp:"2023-07-05T11:30:00Z",
    }
  ]


  const handleResumeOrder = (order) => {
    console.log("Resuming order:", order);
    setShowHeldOrdersDialog(false);
  }

  return (
    <Dialog open={showHeldOrdersDialog} onOpenChange={setShowHeldOrdersDialog}>
      <DialogContent>
        <DialogHeader>Held Orders</DialogHeader>
        <div className="space-y-3">
          {heldOrders.map((order, index) => (
            <Card key={order.id} className="border p-3">
              <CardContent className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 ">
                <h3 className="font-medium">Order ID: #{order.id}</h3>
                <p className="text-sm text-muted-foreground">
                  Items: {order.items.join(', ')}
                </p>
                <p className="text-sm text-muted-foreground">
                  {order.items.length} Items
                  Time: {new Date(order.timeStamp).toLocaleString()}
                </p>
                </div>
                <Button size="sm" variant="outline"  onClick={()=>handleResumeOrder(order)} className="cursor-pointer">
                  <Play className="w-4 h-4 mr-2" />Resume Order
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default HeldOrderDialog