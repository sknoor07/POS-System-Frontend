import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CircleUserIcon } from 'lucide-react';
import { User2 } from 'lucide-react'
import React from 'react'
import { useState } from 'react';
import CustomerDialog from './CustomerDialog';

const CustomerSection = () => {
    const[showCustomerDialog,setShowCustomerDialog]= useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);


  return (
    <div className="p-4 border-b border-gray-300 ">
        <h2 className="text-lg font-semibold flex items-center gap-2"> <User2 className="w-5 h-5 mr-2"/> Customer</h2>
        {selectedCustomer ? 
        <Card className="border-gray-300 bg-muted dark:bg-muted-dark p-4 mt-2">
            <CardContent className="p-3  flex flex-row gap-3">
                <div className="flex flex-col gap-1">
                <h3 className="font-medium text-gray-900 dark:text-gray-300"> {selectedCustomer.fullName}</h3>
                <p className="text-sm text-muted-foreground dark:text-gray-300"> {selectedCustomer.phone}</p>
                <p className="text-sm text-muted-foreground dark:text-gray-300"> {selectedCustomer.email}</p>
                </div>
                <div className="ml-auto flex items-center justify-center w-18 h-18 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 sm:hide md:flex">
                <CircleUserIcon />
                </div>
            </CardContent>
            <Button variant="outline" className="mt-2 cursor-pointer w-full " onClick={() => setShowCustomerDialog(true)}>Change Customer</Button>
        </Card> : 
        (
            <div className='flex flex-col text-center item-center justify-center m-7 gap-4'>
                <p className="text-sm text-muted-foreground">No customer selected</p>
                <Button className="cursor-pointer" onClick={() => setShowCustomerDialog(true)}>Select Customer</Button>
                
            </div>
        )}
        <CustomerDialog 
                setSelectedCustomer={setSelectedCustomer}
                showCustomerDialog={showCustomerDialog} 
                setShowCustomerDialog={setShowCustomerDialog} />
    </div>
  )
}

export default CustomerSection