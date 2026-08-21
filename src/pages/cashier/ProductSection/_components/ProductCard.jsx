import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'



const ProductCard = ({product}) => {
    return (
        <div>
            <Card key={Math.random()} className="p-1">
                <CardContent>
                    <div className='aspect-square bg-muted rounded-md mb-2 flex items-center justify-center flex flex-col space-y-2'>
                        <img src={product.image} alt={product.name} className='h-40 w-40 object-cover' />
                        <div className='flex flex-col '>
                            <h3 className='text-sm font-medium '>{product.name}</h3>
                            <p className='text-xs text-muted-foreground'>{product.sku}</p>
                        </div>
                        
                    </div>
                    <div className='flex items-center justify-between'>
                        <span className=' font-semibold text-green-600'>
                            ${product.price}
                        </span>
                        <Badge  variant="secondary" className="text-xs">{product.category}</Badge>
                    </div>
                </CardContent>
                {/* <CardFooter>
                    <p>Card Footer</p>
                </CardFooter> */}
            </Card>
        </div>
    )
}

export default ProductCard