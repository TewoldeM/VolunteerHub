
import { ChevronRight } from 'lucide-react'
import React from 'react'


const StepstoJoin = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-12'>
       <h1 className='text-6xl text-gray-500'>Join the largest volunteers network in <br /> three steps</h1> 
    <div className='flex justify-center items-center gap-2 '>
    <div className='flex justify-center items-center gap-2 '>
      <div className='text-blue-800 text-8xl'>1</div> 
      <span className='text-gray-400 text-xl'>Find/cliam <br />
       Your <br />
        Organazation 
     </span> 
     <div className="flex text-9xl px-4 text-blue-100 "> <ChevronRight size={120}  /> </div> 
     </div>
     <div className='flex justify-center items-center gap-2 '>
      <div className='text-blue-800 text-8xl'>2</div> 
      <span className='text-gray-400 text-xl'>Create <br />
       a personal <br />
       portifolio 
     </span> 
     <div className="flex text-9xl px-4 text-blue-100 "> <ChevronRight size={120}  /> </div> 
     </div>
     <div className='flex justify-center items-center gap-2 '>
      <div className='text-blue-800 text-8xl'>3</div> 
      <span className='text-gray-400 text-xl'>add <br />
       volunteer <br />
       opportunitiy 
     </span> 
     <div className="flex text-9xl px-4 text-blue-100 "> <ChevronRight size={120}  /> </div> 
     </div>
<div className='flex justify-center items-center flex-col font-bold text-lg'>
    <h1>You are <br /> ready to <br />recruit !</h1>
</div>
    </div>
    </div>
  )
}

export default StepstoJoin