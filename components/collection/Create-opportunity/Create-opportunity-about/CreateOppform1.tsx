// EditOrganizationForm.tsx
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
import Tiptap from "../../Reuseable/Tiptap";

const formSchema = z.object({
  title: z.string().min(2, "title is required"),
  description: z.string(),
});

const CreateOppform1 = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {};
  return (
    <div className="flex flex-col items-center justify-center  p-4 ">
      <h1 className="text-gray-600 dark:text-white text-3xl p-2">
        Tell us About Your Opportunity
      </h1>
      <Form {...form}>
        <React.Fragment>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-10 dark:border-gray-500 border-2 p-6"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Title<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Opportunities title here"
                      {...field}
                      className="text-black flex-none  py-2 px-36 border dark:border-gray-500 rounded-none "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Description <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    {/* <Tiptap
                       
                    description={""} {...field}                      // className="text-black flex-none  py-2 px-36 border border-gray-900 rounded-none bg-white"
                    /> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </React.Fragment>
      </Form>
    </div>
  );
};
export default CreateOppform1;
