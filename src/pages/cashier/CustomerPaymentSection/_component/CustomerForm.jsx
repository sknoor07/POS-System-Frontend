import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { Form, Formik } from 'formik'

const CustomerForm = ({showCustomerForm,setShowCustomerForm}) => {
    const initialValues = {
        fullName: "",
        phone: "",
        email: ""
    }
    return (
        <Dialog open={showCustomerForm} onOpenChange={setShowCustomerForm} >
            <DialogContent className={"max-w-md bg-slate-50 border-2 border-slate-200 shadow-xl dark:bg-slate-900 dark:border-slate-700"}>
                <DialogHeader>
                    Add New Customer
                </DialogHeader>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => { console.log("Form Submitted:", values) }}
                >{({
                    values, 
                    handleChange,
                    handleBlur,
                    /* and other goodies */
                }) => (
                    <Form className=' flex flex-col gap-5'>
                        <input
                            type="text"
                            placeholder="Enter Full Name"
                            name="fullName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fullName}
                            className='border-2 rounded-sm'
                        />
                        <input
                            type="email"
                            placeholder=' Enter Email'
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className='border-2 rounded-sm'
                        />
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            name="phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                            className='border-2 rounded-sm'
                        />
                        <Button type="submit" className='cursor-pointer' variant="secondary" >
                            Add Customer
                        </Button>
                    </Form>
                )}

                </Formik>
            </DialogContent>
        </Dialog>
    )
}

export default CustomerForm