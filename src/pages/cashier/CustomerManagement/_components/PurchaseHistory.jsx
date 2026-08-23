import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { orders } from "@/data/Orders"
import { DollarSignIcon } from "lucide-react"

import { CalendarDaysIcon } from "lucide-react"


export const PurchaseHistory = () => {
  return (
    <div className="p-4 border-t-2 overflow-y-auto ">
      <Card>
        <CardHeader>
          <CardTitle> Purchase History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className=" space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4 flex flex-col">
                <div className=" flex flex-row justify-between">
                  <div className=" flex flex-col justify-between items-start ">
                    <h3 className="font-medium mb-4"> ORder #{order.id}</h3>
                    <div className="flex flex-row gap-2"><CalendarDaysIcon className="h-4 w-4 mr-1 text-muted-foreground" /> {order.createdAt}</div>
                  </div>
                  <div className=" text-right flex flex-col">
                    <div className="flex item-center gap-2 mb-4">
                      <DollarSignIcon className="h-4 w-4  text-muted-foreground" />{order.totalAmount}
                    </div>
                    <Badge> {order.status}</Badge>
                  </div>
                </div>
                <div className=" text-sm text-muted-foreground mt-2">
                  Payment:{order.paymentMethod}
                </div>
                <div className=" border-t pt-3">
                  <h4 className="text-sm font-medium mb-2"> Items: </h4>
                  <div className="space-y-1">
                    {order.items.map((item)=>(
                      <div key={item.id} className="flex justify-between">
                        <span className="text-muted-foreground">{item.product.name}</span>
                        <span>{item.quantity||1}*{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
