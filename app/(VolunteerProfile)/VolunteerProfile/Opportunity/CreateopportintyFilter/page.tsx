"use client"
import React, { useState } from 'react'
import CreateOpportunityFiltersForm from '../../../../../components/collection/Create-opportunity/Create-opportunity-Filters/CreateOpprtunityFilterForm';
import CreateOppHeader from '@/components/collection/Create-opportunity/Create-opportunity-about/CreateOppHeader';

const CreateOpportunityFilters = () => {
const [open, setOpen] = useState(false);
    return (
      <div className="flex flex-col gap-2 items-center pb-4">
        <CreateOppHeader />
        <CreateOpportunityFiltersForm open={open} setOpen={setOpen} />
      </div>
    );
}

export default CreateOpportunityFilters;