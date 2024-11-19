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

const formSchema = z.object({
  country: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zipcode: z.number(),
});

const CreateOppLocation = () => {
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
    <div className="flex flex-col items-center justify-center shadow-lg p-4 ">
      <h1 className="text-xl mt-8 font-semibold">Fill location Detils</h1>
      <Form {...form}>
        <React.Fragment>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-10 bg-slate-200 p-6"
          >
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>
                    Country <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
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
                      className="text-black flex-none  py-2 px-10 border border-gray-900 rounded-none bg-white"
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
                      className="text-black flex-none  py-2 px-10 border border-gray-900 rounded-none bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-center  md:flex-row gap-4">
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
                        className="text-black flex-none  py-2 px-10 border border-gray-900 rounded-none bg-white"
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
                        className="text-black flex-none  py-2 px-10 border border-gray-900 rounded-none bg-white"
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
      <div className=" flex flex-row justify-center items-center ml-56 md:ml-96 mt-4">
        <span className="text-blue-800 hover:text-blue-500 cursor-pointer text-xl">
          Save Draft
        </span>
        <Button
          type="submit"
          className=" ml-4 mb-2 px-6 bg-blue-600 hover:bg-blue-300 "
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default CreateOppLocation;
