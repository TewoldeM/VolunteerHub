import { Button } from '@/components/ui/button'
import React from 'react'
import Dashboard from '../../../../app/dashboard/page';
import { cn } from '@/lib/utils';
import organization from '../../../../app/(VolunteerProfile)/VolunteerProfile/organization/page';

const OrganizationFinshed = () => {
  return (
      <div className='flex flex-col justify-center items-center h-screen gap-6'>
          <h1 className='text-blue-400 text-4xl'>You have created the organization Successfully </h1>
          <h2 className='text-blue-300 text-lg'>You have to wait 72hr for Autherazation of your organization ,we will send you an email</h2>
          <Button className={cn("bg-blue-500 text-yellow-50 hover:bg-blue-300")}>Go to Dashboard</Button>
    </div>
  )
}

export default OrganizationFinshed