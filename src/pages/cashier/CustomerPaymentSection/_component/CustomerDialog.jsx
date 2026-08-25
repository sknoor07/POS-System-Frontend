import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { customers } from '@/data/customers'
import { useState } from 'react'
import CustomerForm from './CustomerForm'
import { useEffect } from 'react'

const CustomerDialog = ({ showCustomerDialog, setShowCustomerDialog, setSelectedCustomer }) => {

    const [showCustomerForm, setShowCustomerForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => { setDebouncedSearch(searchTerm); }, 300)
        return () => { clearTimeout(handler); };
    }, [searchTerm]);

    const filteredCustomers = customers.filter((customer) => {
        const lowerCaseSearch = debouncedSearch.toLowerCase();
        return (
            customer.fullName.toLowerCase().includes(lowerCaseSearch) ||
            customer.phone.includes(debouncedSearch) ||
            customer.email.toLowerCase().includes(lowerCaseSearch)
        );
    });


    const handleSelectCustomer = (customer) => {
        console.log("Select Customer:", customer);
        setSelectedCustomer(customer);
        setShowCustomerDialog(false);
        setSearchTerm("");
    }

    return (
        <Dialog open={showCustomerDialog} onOpenChange={setShowCustomerDialog} >
            <DialogContent className="w-[95vw] sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
                <DialogHeader>
                    <DialogTitle>Select Customer</DialogTitle>
                </DialogHeader>
                <div className='mb-2'>
                    <Input
                        placeholder="Search by Name, Phone, or Email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className='max-h-96 overflow-y-auto '>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px]"> Name</TableHead>
                                <TableHead className="w-[150px]"> Phone</TableHead>
                                <TableHead className="w-[150px]"> Email</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredCustomers.length > 0 ? (filteredCustomers.map((customer, index) => {
                                return <TableRow key={index}>
                                    <TableCell>{customer.fullName}</TableCell>
                                    <TableCell>{customer.phone}</TableCell>
                                    <TableCell>{customer.email}</TableCell>
                                    <TableCell>
                                        <Button variant='outline' className="w-full" onClick={() => handleSelectCustomer(customer)}> Select</Button>
                                    </TableCell>
                                </TableRow>

                            })) : (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center h-24 text-muted-foreground">
                                        No customers found matching "{debouncedSearch}".
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <DialogFooter>
                    <Button variant='secondary' className="cursor-pointer" onClick={() => {

                        setShowCustomerForm(true);

                    }}>Add New Customer</Button>
                </DialogFooter>
                <CustomerForm showCustomerForm={showCustomerForm} setShowCustomerForm={setShowCustomerForm} />
            </DialogContent>
        </Dialog>
    )
}

export default CustomerDialog