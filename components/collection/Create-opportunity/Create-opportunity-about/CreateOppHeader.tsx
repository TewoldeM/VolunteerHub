import React from 'react'

const CreateOppHeader = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl ">Post Opportunity</h1>
          <div className="flex flex-row gap-12 p-4">
            <div className="flex flex-col justify-center items-center gap-4">
              <span className="text-4xl text-blue-400 px-6 py-4 rounded-full bg-gray-300 hover:bg-blue-400 cursor-pointer hover:text-white">
                1
              </span>
              <div className="text-xl">Aboute</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <span className="text-4xl text-blue-400 px-6 py-4 rounded-full bg-gray-300 hover:bg-blue-400 cursor-pointer hover:text-white">
                2
              </span>
              <div className="text-xl">Date/Time</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <span className="text-4xl text-blue-400 px-6 py-4 rounded-full bg-gray-300 hover:bg-blue-400 cursor-pointer hover:text-white">
                3
              </span>
              <div className="text-xl">Detial</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <span className="text-4xl text-blue-400 px-6 py-4 rounded-full bg-gray-300 hover:bg-blue-400 cursor-pointer hover:text-white">
                4
              </span>
              <div className="text-xl">Filters</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <span className="text-4xl text-blue-400 px-6 py-4 rounded-full bg-gray-300 hover:bg-blue-400 cursor-pointer hover:text-white">
                5
              </span>
              <div className="text-xl">Comms</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateOppHeader