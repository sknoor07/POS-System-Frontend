import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@base-ui/react'
import { AlignCenter } from 'lucide-react'
import React from 'react'

const POSHeader = () => {
    return (
        <div className='bg-card border-b px-6 py-4'>
            <div className='flex items-center justify-between'>
                <div>
                    <Button aria-label="Toggle menu">
                        <AlignCenter className='cursor-pointer' aria-hidden="true" />
                    </Button>
                </div>
                <div >
                    <h1 className='text-2xl font-bold text-foreground'>POS Terminal</h1>
                    <p className='text-sm text-muted-foreground'>Create New Order</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <Avatar className='cursor-pointer'>
                        <AvatarImage
                            src="https://tse2.mm.bing.net/th/id/OIP.PF0zwgW8yCSuCtP15g54vgHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="@shadcn"
                            className="grayscale"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}

export default POSHeader