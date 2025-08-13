// EditOrganizationForm.tsx
"use client";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { E164Number } from "libphonenumber-js/core";
import { Button } from "@/components/ui/button";
import Countryselector from "../../Reuseable/Countr-selector";
import Image from "next/image";
import RichEditor from "../../Reuseable/Tiptap";
import CategoryList from "../CreateOrganization/CategoryList";
import { Category } from "@prisma/client";
import Tiptap from "../../Reuseable/Tiptap";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface UpdateOrganizationProps {
  Organization: {
    id: string;
    name: string;
    postalcode: string;
    country: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  postalcode: z.string(),
  country: z.string(),
  city: z.string(),
  address: z.string(),
  province: z.string(),
  phone: z.string(),
  website: z.string(),
  linkedinURL: z.string(),
  facebookURL: z.string(),
  twitterURL: z.string(),
  photo: z.string(),
  mission: z.string(),
  description: z.string(),
  categories: z.array(z.string()),
});

const EditOrganizationForm = ({ Organization }: UpdateOrganizationProps) => {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: Organization.name,
      postalcode: Organization.postalcode,
      country: Organization.country,
      address: "",
      city: "",
      province: "",
      phone: "",
      website: "",
      linkedinURL: "",
      facebookURL: "",
      twitterURL: "",
      photo: "",
      mission: "",
      description: "",
      categories: [],
    },
  });
  const handleCategoryChange = (categoryValue: Category) => {
    if (selectedCategories.includes(categoryValue)) {
      setSelectedCategories((prev) => prev.filter((c) => c !== categoryValue));
    } else if (selectedCategories.length < 5) {
      setSelectedCategories((prev) => [...prev, categoryValue]);
    } else {
      alert("You can only select up to 5 categories.");
    }
  };
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const organizationId = Organization.id;
      const updatedData = {
        ...values,
        id: organizationId,
        categories: selectedCategories,
      };

      const response = await axios.patch(
        `/api/organization/${organizationId}`,
        updatedData
      );

      if (response.status === 200) {
        toast.success("Organization updated successfully");
        router.push("/VolunteerProfile/organization/organizationFinshed");
      } else {
        toast.error("Error updating organization");
      }
    } catch (error: any) {
      console.error(error.message);
      toast.error("Error updating organization");
    }
  };
  return (
    <div className="flex flex-col items-center gap-14">
      <div className="flex flex-col gap-4 mt-12 px-7">
        <h1 className="text-6xl">Update your organization's profile</h1>
        <h3 className=" text-2xl">
          Let volunteers know more about your organization's mission and primary{" "}
          <br />
          cause areas to help them connect with you.
        </h3>
      </div>
      <div>
        <Form {...form}>
          <React.Fragment>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mt-10"
            >
              <div className="flex flex-col md:flex-row gap-16 px-4">
                <div className="flex gap-4 flex-col">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex: Web Development for Beginners"
                            {...field}
                            className="py-6 border "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="address"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            placeholder="Address"
                            className="text-black  py-6 border "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="city"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            placeholder="City"
                            className="text-black border"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-center items-center  md:flex-row gap-4">
                    <FormField
                      name="province"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Province</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              value={field.value ?? ""}
                              placeholder="Province"
                              className="text-black py-6 px-2 border "
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="postalcode"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Postalcode</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              value={field.value ?? ""}
                              placeholder="postalcode"
                              className="text-black py-6 px-2  border "
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Country</FormLabel>
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <PhoneInput
                            defaultCountry="ET"
                            placeholder="Enter a phone number"
                            international
                            withCountryCallingCode
                            value={field.value as E164Number | undefined}
                            onChange={field.onChange}
                            className="mt-2 h-11 rounded-md px-3 text-sm border bg-dark-400 placeholder:text-dark-600 border-dark-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* the second form the optional forms */}
                <div className="flex gap-6 flex-col">
                  <FormField
                    name="website"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            value={field.value ?? ""}
                            placeholder="Your Organization Website URL"
                            className="text-black  py-6 px-6 border "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="linkedinURL"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>LinkedIn URL</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex:WWW.linkedin/jone.com"
                            {...field}
                            className="text-black  py-6 border "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="facebookURL"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Facebook URL</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex:WWW.facebooK/jone.com"
                            {...field}
                            className="text-black  py-6 border "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* <FormField
                    control={form.control}
                    name="twitterURL"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Twitter URL</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex:WWW.twitter/jone.com"
                            {...field}
                            className="text-black  py-6 border "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ex:Description of the organization"
                            {...field}
                            className="dark:text-gray-100   border "
                          />
                          {/* <Tiptap  onChange={field.onChange} description={field.description} /> */}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="mission"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mission Statement</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            value={field.value ?? ""}
                            placeholder="Mission Statement"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-4 flex-col">
                  <div className="flex flex-col gap-18 px-4">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-xl font-semibold">
                        Upload Your organization Logo 🔰🔰🔰
                      </h1>
                      <div className="flex flex-row gap-6">
                        <img
                          src="/Profile.jpg"
                          alt="Add Your Photo"
                          className="object-cover rounded w-50 h-50"
                          width={100}
                          height={60}
                        />
                        <div className="flex flex-col gap-4"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <CategoryList
                      selectedCategories={selectedCategories}
                      handleCategoryChange={handleCategoryChange}
                    />
                    <Button
                      type="submit"
                      className="w-16 px-10  ml-1py-2 bg-green-600 hover:bg-green-300 mb-8"
                    >
                     Create
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </React.Fragment>
        </Form>
      </div>
    </div>
  );
};

export default EditOrganizationForm;
