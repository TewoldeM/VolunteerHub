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
import Countryselector from "../../Reuseable/Countr-selector";
import Link from "next/link";
import Tiptap from "../../Reuseable/Tiptap";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  title: z.string().min(2, "title is required"),
  description: z.string(),
  country: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zipcode: z.number(),
});

const CreateOppLocation = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      country: "",
      address: "",
      city: "",
      state: "",
      zipcode: 12,
    },
  });
const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {
    const response = await axios.post("/api/opportunity/create/About", values);
    if (response.status === 201) {
      toast.success("Opportunity about created successfully");
      // Redirect to the next step
      router.push("/VolunteerProfile/Opportunity/CreateopportunityDetials");
    } else {
      toast.error("Failed to create opportunity about");
    }
  } catch (error) {
    console.error(error);
    toast.error("Error creating opportunity about");
  }
};
  return (
    <Card className="flex flex-col justify-center items-center md:w-1/2 pb-2 ">
      <h1 className="text-gray-600 dark:text-white text-xl md:text-3xl p-2 ">
        Tell us About Your Opportunity
      </h1>
      <Form {...form}>
        <React.Fragment>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-4 p-6"
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
                      placeholder="Ex:Washing Cloth"
                      {...field}
                      className="text-black flex-none  py-2 px-10 border-2 dark:border-gray-500 rounded-none "
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
                <FormItem className=" mb-4">
                  <FormLabel>
                    Description <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Tiptap description={""} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>
                    Country <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl className="dark:border-gray-500 border-2 dark:bg-slate-800 dark:text-white">
                    <Countryselector
                      value={field.value}
                      onChange={(country) => {
                        form.setValue("country", country);
                      }}
                    />
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
                  <FormLabel>
                    City<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: Addis ababa"
                      {...field}
                      className="text-black flex-none  py-2 px-10 border-2 dark:border-gray-500 rounded-none "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Address <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Bole, woreda 12"
                      {...field}
                      className="text-black flex-none  py-2 px-10 border-2 drak:border-gray-900 rounded-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col justify-center items-center md:flex-row gap-4">
              <FormField
                name="state"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      State <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        placeholder="Province"
                        className="text-black flex-none  py-2 px-10 border-2 dark:border-gray-500 rounded-md"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="zipcode"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zipcode</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        placeholder="postalcode"
                        className="text-black dark:text-gray-200 flex-none  py-2 px-10 border-2 dark:border-gray-500 rounded-md"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </React.Fragment>
      </Form>
      <div className=" flex flex-row justify-start items-center gap-4 md:-ml-80">
        <button className=" hover:text-green-600 font-bold md:py-2 px-4 ">
          Save Draft
        </button>
        <Link href="/VolunteerProfile/Opportunity/CreateopportunityDateTime">
          <Button
            className={cn(
              "bg-green-500 hover:bg-green-400  font-bold py-2 px-4 rounded-r-full text-white"
            )}
          >
            Next
          </Button>
        </Link>
      </div>
    </Card>
  );
};
export default CreateOppLocation;
