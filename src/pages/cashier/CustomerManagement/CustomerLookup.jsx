
import CustomerSearch from './_components/CustomerSearch'
import CustomerList from './_components/CustomerList'
import CustomerDetails from './_components/CustomerDetails'
import { PurchaseHistory } from './_components/PurchaseHistory'
import { useState } from 'react'
import { UserIcon } from 'lucide-react'

const CustomerLookup = () => {
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    return (
        <div className='h-screen flex flex-col'>
            <div className='p-4 bg-card border-b'>
                <h1 className=' text-2xl font-bold'>Customer Management</h1>
            </div>
            <div className=' flex-1 flex overflow-hidden'>
                <div className='w-1/3 border-r flex flex-col'>
                    <CustomerSearch />
                    <CustomerList setSelectedCustomer={setSelectedCustomer} />
                </div>
                <div className=' w-2/3 flex flex-col overflow-y-auto'>
                    {selectedCustomer != null ? 
                    <div>
                        <CustomerDetails selectedCustomer={selectedCustomer} />
                        <PurchaseHistory selectedCustomer={selectedCustomer} />
                    </div> 
                    : 
                    <div className=" h-full flex justify-center items-center  ">
                        <UserIcon className="mr-3" /> Please Select a Customer to view details
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default CustomerLookup