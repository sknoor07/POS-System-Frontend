import { Input } from '@/components/ui/input'
import { Button } from '@base-ui/react';
import { Barcode } from 'lucide-react';

import { Search } from 'lucide-react'

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ProductCard from './_components/ProductCard';

const ProductSection = () => {
  const [search, setSearch] = useState("");
  const products=[{
    id:1,
    name:"ROG Phone 6D Ultimate",
    price:100,
    category:"retail",
    sku:"SKU123",
    image:"https://tse2.mm.bing.net/th/id/OIP.PF0zwgW8yCSuCtP15g54vgHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },{
    id:1,
    name:"ROG Phone 6D Ultimate",
    price:100,
    category:"retail",
    sku:"SKU123",
    image:"https://tse2.mm.bing.net/th/id/OIP.PF0zwgW8yCSuCtP15g54vgHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },{
    id:1,
    name:"ROG Phone 6D Ultimate",
    price:100,
    category:"retail",
    sku:"SKU123",
    image:"https://tse2.mm.bing.net/th/id/OIP.PF0zwgW8yCSuCtP15g54vgHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },{
    id:1,
    name:"ROG Phone 6D Ultimate",
    price:100,
    category:"retail",
    sku:"SKU123",
    image:"https://tse2.mm.bing.net/th/id/OIP.PF0zwgW8yCSuCtP15g54vgHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  }];

  //Debouncing a search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim() === "") {
        setResults([]);
        return;
      }

      console.log("Searching for:", search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  }
  return (
    <div className='flex flex-col w-2/5 border-r bg-card'>
      <div className=' flex flex-col  pt-2 border-b bg-muted '>
        <div className='flex items-center space-x-2 w-full px-'>
          <Search />
          <Input type="text" placeholder="Search products..." onChange={handleSearch} value={search} />
        </div>

        <div className='flex items-center justify-between p-4 '>
          <span>{2} Product Found</span>
          <Button variant="outline" size="sm" className="text-xs">
            <Barcode>Scan</Barcode>
          </Button>
        </div>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4'>
        {
          products.map((item,index)=>
            <ProductCard key={index} product={item} />
          )
        }
      </div>
    </div>
  )
}

export default ProductSection