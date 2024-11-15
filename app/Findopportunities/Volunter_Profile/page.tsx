import VolunteersDetial from '@/components/collection/Create-organazation/Volunteers-Indvidual/VolunteersDetial'
import Volunter_profile from '@/components/collection/Create-organazation/Volunteers-Indvidual/Volunter_profile'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-52 md:gap-4 justify-center items-center '>
     <Volunter_profile />
     <VolunteersDetial />
    </div>
  )
}

export default page