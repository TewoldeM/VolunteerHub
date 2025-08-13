import CreateOppHeader from '@/components/collection/Create-opportunity/Create-opportunity-about/CreateOppHeader';
import CreateOppLocation from '@/components/collection/Create-opportunity/Create-opportunity-about/CreateOppLocation';
import React from 'react'

const CreateOpportunitypage = () => {
  return (
    <div className='flex flex-col gap-2 items-center pb-4'>
    <CreateOppHeader />
    <CreateOppLocation />
    </div>
  );
}

export default CreateOpportunitypage