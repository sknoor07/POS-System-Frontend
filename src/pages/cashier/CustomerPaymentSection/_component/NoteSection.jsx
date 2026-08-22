import { Input } from '@base-ui/react'
import { FileText } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

const NoteSection = () => {
    const [note,setNote]= useState("");
    const handleTextAreaChange=(e)=>{
        setNote(e.target.value);
    }
  return (
    
    <div className='p-2 border-b'>
        <div className=" rounded-md border-gray-300 bg-muted dark:bg-muted-dark p-4">
        <div className=' flex flex-row item-center justify-center gap-2'>
        <FileText  className="w-5 h-5 mt-1 " />
        <h2 className="text-lg font-semibold mb-3  flex item-center ">
            Enter Note Here 
        </h2>
        </div>
        <div className="space-y-3">
            <textarea 
            className='w-full p-2 border rounder-md text-sm  resize-none'
            placeholder="Enter Note Here..." 
            type="text" 
            value={note} 
            onChange={handleTextAreaChange}
            />
        </div>
        </div>
    </div>
  )
}

export default NoteSection