import React from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { title } from "process";
import { useForm } from "react-hook-form";
import CreateOppform1 from "./Create-opportunity-about/CreateOppform1";
import CreateOppLocation from "./Create-opportunity-about/CreateOppLocation";
import CreateOppHeader from "./Create-opportunity-about/CreateOppHeader";
const CreateOpportunityform = () => {
  return (
    <div>
      <CreateOppHeader />
      <CreateOppform1 />
      <CreateOppLocation />
    </div>
  );
};

export default CreateOpportunityform;
