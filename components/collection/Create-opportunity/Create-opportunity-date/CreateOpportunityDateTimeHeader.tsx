"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { E164Number } from "libphonenumber-js/core";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Category } from "@prisma/client";
import Countryselector from "../../Reuseable/Countr-selector";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  country: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zipcode: z.number(),
});

const CreateOpportunityDateTimeHeader = () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        country: "",
        address: "",
        city: "",
        state: "",
        zipcode: 12,
      },
    });
    const onSubmit = async (values: z.infer<typeof formSchema>) => {};
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mt-10 bg-slate-300 py-6"
      >
        <div className="flex flex-row gap-6 items-center justify-center">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">yes</FormLabel>
                <FormControl>
                  <Checkbox {...field} className="ml-2" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">No</FormLabel>
                <FormControl>
                  <Checkbox {...field} className="ml-2" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default CreateOpportunityDateTimeHeader;
    // <div className="flex flex-col justify-center items-center">
    //   <h1 className="text-2xl font-semibold p-4">Date and Time</h1>
    //   <div className="flex flex-col p-8 bg-gray-200  mb-4">
    //     <h1>
    //       Are There Specific Dates?<span className="text-red-500">*</span>
    //     </h1>
    //     <div className="flex flex-row gap-4 items-center p-4">
    //       Yes
    //       <Checkbox />
    //       No
    //       <Checkbox />
    //     </div>

    //     <h1>
    //       Does This Opportunitys Have Shift?
    //       <span className="text-red-500">*</span>
    //     </h1>
    //     <div className="flex flex-row gap-4 items-center p-4">
    //       Yes
    //       <Checkbox />
    //       No
    //       <Checkbox />
    //     </div>
    //   </div>
    //   <div className="flex flex-col bg-gray-200 p-6 gap-6">
    //     <h1 className="text-xl border-b-2 border-blue-500 p-2">
    //       Shift schedule
    //     </h1>
    //     <div className="flex flex-col justify-between gap-6">
    //       <span className="px-52 py-6">
    //         <p>No shift schedule yet</p>
    //       </span>
    //       <Button
    //         className={cn("bg-blue-400 hover:bg-blue-700 w-40 ml-72 md:ml-96")}
    //       >
    //         Schedule a Shift
    //       </Button>
    //     </div>
    //   </div>
    // </div>