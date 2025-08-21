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
      const response = await axios.post(
        "/api/opportunity/create/About",
        values
      );
      if (response.status === 201) {
        toast.success("Opportunity about created successfully");
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
    <Card className="flex flex-col justify-center items-center w-full max-w-4xl mx-auto p-4 md:p-6">
      <h1 className="text-orange-600 dark:text-white text-xl md:text-3xl p-2">
        Tell us About Your Opportunity
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 mt-4 w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Top Section: Title and Description (Vertical) */}
            <div className="space-y-6">
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
                        placeholder="Ex: Washing Cloth"
                        {...field}
                        className="text-black flex-none py-6 px-4 border-2 dark:border-gray-500 rounded-md w-full"
                      />
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
                        onChange={(country) =>
                          form.setValue("country", country)
                        }
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
                        placeholder="Ex: Addis Ababa"
                        {...field}
                        className="text-black flex-none py-2 px-4 border-2 dark:border-gray-500 rounded-md w-full"
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
                        className="text-black flex-none py-2 px-4 border-2 dark:border-gray-500 rounded-md w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Location Section: Horizontal Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
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
                        className="text-black flex-none py-6 px-4 border-2 dark:border-gray-500 rounded-md w-full"
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
                        placeholder="Postalcode"
                        className="text-black dark:text-gray-200 flex-none py-6 px-4 rounded-md w-full"
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
                  <FormItem className="">
                    <FormLabel>
                      Description <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Tiptap description="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="w-full mx-auto px-2 py-2 bg-white rounded-lg shadow-md">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Direct Connect
              </h2>
              <p className="text-sm text-red-600 mt-1">
                Save time by bringing volunteers directly to your external
                registration link.{" "}
                <a href="#" className="underline">
                  Learn more
                </a>
              </p>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-gray-700 flex items-center">
                <span className="text-red-500 mr-2">❤️</span>
                You're a Pro. Your membership should be, too.{" "}
                <a href="#" className="text-red-500 underline ml-1">
                  Upgrade to Pro
                </a>{" "}
                to add a redirect link.
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                LINK
              </label>
              <input
                type="text"
                placeholder="Enter redirect link here"
                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Media
              </h2>
              <p className="text-sm text-blue-600 mb-2">
                <span className="text-blue-500 mr-1">⚡</span>
                Opportunities with an image or video attract a larger audience!
                You can also manage your photos and videos in{" "}
                <a href="#" className="underline">
                  Media Manager
                </a>
              </p>

              <div className="flex flex-col md:flex-row space-x-4">
                <div className="md:w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CHOOSE AN IMAGE
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                    <option>Select previously saved image</option>
                  </select>
                </div>
                <div className="md:w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CHOOSE A VIDEO
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                    <option>Select previously saved video</option>
                  </select>
                </div>
              </div>

              <div className="text-center mt-4">
                <span className="text-sm text-gray-500">or</span>
              </div>

              <div className="flex md:flex-row flex-col justify-between mt-4 gap-2 md:gap-0">
                <Button className="md:w-5/12 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6a6 6 0 100 12 6 6 0 000-12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  UPLOAD A PHOTO
                </Button>
                <Button className="md:w-5/12 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm10 5a1 1 0 11-2 0 1 1 0 012 0zm-4 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                  ADD A VIDEO
                </Button>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-row justify-end items-center p-6">
            <button className=" hover:text-orange-600 font-bold md:py-2 px-4 text-orange-700">
              Save Draft
            </button>
            <Link href="/VolunteerProfile/Opportunity/CreateopportunityDateTime">
              <Button
                className={cn(
                  "bg-orange-500 hover:bg-orange-400 font-bold py-6 px-8 rounded-r-full text-white"
                )}
              >
                Next
              </Button>
            </Link>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default CreateOppLocation;
