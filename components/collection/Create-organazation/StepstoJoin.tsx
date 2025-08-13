
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react'
import React from 'react'


const StepstoJoin = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-12">
      <h1 className="md:text-6xl font-semibold  text-gray-600 dark:text-gray-100 text-3xl px-14 py-2">
        Join the largest volunteers network in <br /> three steps
      </h1>
      <div className="flex justify-center items-center md:flex-row p-4 md:gap-8">
        <div className="flex justify-center items-center gap:0 md:gap-2 ">
          <span className="text-gray-600 dark:text-gray-100 text-sm md:text-2xl">
            Find/cliam 
            Your 
            Organazation
          </span>
          <div className="flex text-sm md:text-9xl md:px-4 text-blue-300 ">
            <ChevronRight className="w-4 h-4 md:h-8 md:w-8"  />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <span className="text-gray-600 dark:text-gray-100 text-sm md:text-2xl">
            Create 
            a personal 
            portifolio
          </span>
          <div className="flex md:text-9xl text-3xl md:px-4 text-blue-300 ">
            <ChevronRight className="w-4 h-4 md:h-8 md:w-8" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <span className="text-gray-600 dark:text-gray-100 text-sm md:text-2xl">
            add 
            volunteer 
            opportunitiy
          </span>
          <div className="flex md:text-9xl text-3xl md:px-4 text-blue-300 ">
            <ChevronRight className="w-4 h-4 md:h-8 md:w-8" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col font-bold text-sm md:text-lg">
          <h1>
            Ready to 
            recruit!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default StepstoJoin