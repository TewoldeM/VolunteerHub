
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react'
import React from 'react'


const StepstoJoin = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-12">
      <h1 className="md:text-6xl font-semibold  text-gray-900 text-3xl px-14 py-2">
        Join the largest volunteers network in <br /> three steps
      </h1>
      <div className="flex justify-center items-center md:flex-row p-4 md:gap-8">
        <div className="flex justify-center items-center gap-2 ">
          <div className="text-blue-800 md:text-6xl text-2xl">1</div>
          <span className="text-gray-500 text-sm md:text-2xl">
            Find/cliam <br />
            Your <br />
            Organazation
          </span>
          <div className="flex text-sm md:text-9xl px-4 text-blue-100 ">
            <ChevronRight size={60} />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <div className="text-blue-800 md:text-6xl text-2xl">2</div>
          <span className="text-gray-500 text-sm md:text-2xl">
            Create <br />
            a personal <br />
            portifolio
          </span>
          <div className="flex md:text-9xl text-3xl px-4 text-blue-100 ">
            {" "}
            <ChevronRight size={60} />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <div className="text-blue-800 md:text-6xl text-2xl">3</div>
          <span className="text-gray-500 text-sm md:text-2xl">
            add <br />
            volunteer <br />
            opportunitiy
          </span>
          <div className="flex md:text-9xl text-3xl px-4 text-blue-100 ">
            {" "}
            <ChevronRight size={60} />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col font-bold text-lg">
          <h1>
            You are <br /> ready to <br />
            recruit !
          </h1>
        </div>
      </div>
    </div>
  );
}

export default StepstoJoin