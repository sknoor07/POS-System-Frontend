import { customers } from "@/data/customers"
import CustomerCard from "./CustomerCard"


const CustomerList = ({setSelectedCustomer}) => {
  return (
    <div className=" flex-1 overflow-y-auto">
        <div className="divide-y divide-dashed hover:divide-solid">
            {customers.map((c)=>(
                    <CustomerCard 
                    key={c.id} 
                    customer={c}
                    setSelectedCustomer={setSelectedCustomer}
                    />
            ))}
        </div>

    </div>
  )
}

export default CustomerList