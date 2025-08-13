"use client"
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Category } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import CategoryList from "../../CreateOrganization/CategoryList";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


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
const EditOrganizationForm2 = ({ Organization }: UpdateOrganizationProps) => {
  const formSchema = z.object({
    photo: z.string(),
    mission: z.string(),
    description: z.string(),
    categories: z.array(z.string()),
  });
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
      const organizationId = Organization.id
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
    <div className="flex justify-center items-center h-screen">
      <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-10"
          >
            <div className="flex flex-col gap-18 mt-40 px-4">
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
                Continue
              </Button>
            </div>
          </form>
      </Form>
    </div>
  );
};

export default EditOrganizationForm2;
