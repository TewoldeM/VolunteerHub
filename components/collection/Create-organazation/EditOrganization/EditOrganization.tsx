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
  showOnGoogleMaps: z.boolean().optional(),
});

const EditOrganizationForm = ({ Organization }: UpdateOrganizationProps) => {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
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
      showOnGoogleMaps: false,
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
      console.log("Submitting data:", values); // Debug log
      const organizationId = Organization.id;
      const updatedData = {
        ...values,
        id: organizationId,
        categories: selectedCategories, // Use the string values directly
      };

      const response = await axios.patch(
        `/api/organization/${organizationId}`,
        updatedData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        toast.success("Organization updated successfully");
        router.push("/VolunteerProfile/organization/organizationFinished");
      } else {
        toast.error("Error updating organization");
      }
    } catch (error: any) {
      console.error("Error updating organization:", error);
      toast.error("Error updating organization");
    }
  };

  const handleContinue = () => {
    router.push("/create-opportunity"); // Adjust the path as needed for the creation page
  };

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen md:mt-6">
      <h1 className=" text-2xl md:text-5xl font-bold text-orange-600 mb-4">
        Update your organization's profile
      </h1>
      <p className="text-gray-600 md:text-lg mb-6">
        Let volunteers know more about your organization's mission and primary
        cause areas to help them connect with you.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: New Academy"
                        {...field}
                        className="w-full py-6 border rounded"
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
                    <FormLabel>Address Line 1 *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        placeholder="Address"
                        className="w-full py-6 border rounded"
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
                    <FormLabel>City *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        placeholder="Atlanta"
                        className="w-full py-6 border rounded"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="province"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        placeholder="GA"
                        className="w-full py-6 border rounded"
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
                    <FormLabel>Zip Code *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        placeholder="30301"
                        className="w-full py-6 border rounded"
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
                  <FormItem>
                    <FormLabel>Country *</FormLabel>
                    <FormControl>
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
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone *</FormLabel>
                    <FormControl>
                      <PhoneInput
                        defaultCountry="ET"
                        placeholder="Enter a phone number"
                        international
                        withCountryCallingCode
                        value={field.value as E164Number | undefined}
                        onChange={field.onChange}
                        className="w-full py-6 border rounded"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                name="website"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        placeholder="https://example.com"
                        className="w-full py-6 border rounded"
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
                  <FormItem>
                    <FormLabel>LinkedIn URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://linkedin.com/company/example"
                        {...field}
                        className="w-full py-6 border rounded"
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
                  <FormItem>
                    <FormLabel>Facebook URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://facebook.com/example"
                        {...field}
                        className="w-full py-6 border rounded"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="twitterURL"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Twitter URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://twitter.com/example"
                        {...field}
                        className="w-full py-6 border rounded"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="md:flex items-center space-y-4 md:space-y-0 md:space-x-4 mt-2">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="photo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization Photo or Logo</FormLabel>
                        <FormControl>
                          <div className="border-2 border-dashed border-gray-300 p-4 text-center">
                            <p className="text-gray-500">
                              A good photo helps distinguish your nonprofit and
                              generates more potential volunteers
                            </p>
                            <input type="file" {...field} className="mt-2" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="bg-orange-600 text-white px-12 py-4 mt-2 max-w-24 rounded hover:bg-orange-700"
                  >
                    Upload
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FormField
              control={form.control}
              name="showOnGoogleMaps"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={field.value || false}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
                        className="mr-2"
                      />
                      Don't show my organization on Google maps
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ex: Description of the organization"
                    {...field}
                    className="w-full py-6 border rounded"
                  />
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
                    className="w-full py-6 border rounded"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categories"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categories</FormLabel>
                <FormControl>
                  <CategoryList
                    selectedCategories={selectedCategories}
                    handleCategoryChange={handleCategoryChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-6">
            <Button
              onClick={handleContinue}
              className="bg-orange-600 text-white px-12 py-4 rounded hover:bg-orange-700"
            >
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditOrganizationForm;
