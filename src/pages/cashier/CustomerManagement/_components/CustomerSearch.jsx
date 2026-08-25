import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PlusIcon } from 'lucide-react'
import { SearchIcon } from 'lucide-react'
import { useState } from 'react'
import CustomerForm from '../../CustomerPaymentSection/_component/CustomerForm'


const CustomerSearch = () => {
    const [showCustomerForm, setShowCustomerForm]= useState(false);
  return (
    <div className='p-4 border-b'>
        <div className='flex gap-2'>
            <div className='relative flex flex-row flex-1'>
                <SearchIcon className='w-8 h-8'/>
                <Input placeholder="Search Customer..." type="text" className="ml-3 " />
            </div>
            <Button 
            className=" cursor-pointer"
            onClick={()=>setShowCustomerForm(true)}
            >
                <PlusIcon className='h-4 w-4 '/>
                 Add New Customer
            </Button>

        </div>
        <CustomerForm showCustomerForm={showCustomerForm} setShowCustomerForm={setShowCustomerForm}/>
    </div>
  )
}

export default CustomerSearch