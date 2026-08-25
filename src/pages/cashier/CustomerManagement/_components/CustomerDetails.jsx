import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from "lucide-react"
import { CuboidIcon } from "lucide-react"

import { Sparkles } from "lucide-react"
import { PlusIcon } from "lucide-react"


const CustomerDetails = ({selectedCustomer}) => {

  
  return (
    <div className="p-4">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2>{selectedCustomer.fullName}</h2>
          <p className="text-sm text-muted-foreground">{selectedCustomer.phone}</p>
          <p className="text-sm text-muted-foreground">{selectedCustomer.email}</p>
        </div>
        <Button className={"cursor-pointer"}>
          <PlusIcon className="h-4 w-4 mr-1"/> Add Points
        </Button>
      </div>
      <div className=" grid grid-cols-1 gap-4 mb-6 md:grid-cols-3  ">
        <Card>
          <CardHeader>
            <CardTitle>Loyalty Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" flex flex-row  items-center gap-3">
              <Sparkles  className=" text-yellow-500"/>
              {selectedCustomer!=null?<span className="text-xl">{selectedCustomer.loyaltyPoint}</span>:<h3 className="text-xl">{0}</h3>}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" flex flex-row  items-center gap-3">
              <CuboidIcon  className=" text-yellow-500"/>
              {selectedCustomer!=null?<p className="text-xl">{selectedCustomer.totalOrders}</p>:<h3  className="text-xl">{0}</h3>}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Spend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" flex flex-row  items-center gap-3">
              <DollarSign  className=" text-yellow-500"/>
              {selectedCustomer!=null?<p className="text-xl">{selectedCustomer.totalSpend}</p>:<h3   className="text-xl">{0}</h3>}
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Average Order Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" flex flex-row  items-center gap-3">
              <DollarSign  className=" text-yellow-500"/>
              {selectedCustomer!=null?<p className="text-xl font-bold">{selectedCustomer.averageOrderValue}</p>:<h3 className="text-xl">{0}</h3>}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CustomerDetails