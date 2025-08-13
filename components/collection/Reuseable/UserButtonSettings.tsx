import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import  Dropedoenforsettingforskill from "./Dropedoenforsetting";
import Dropedoenforsettingcauses from "./Dropedoenforsetting";
import Dropedoenforsettingforaccount from "./Dropedoenforsettingforaccount";
import { Separator } from "@/components/ui/separator";

const UserButtonSettings = () => {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Organization name is required and minimum 2 characters",
    }),
    country: z.string().min(2, {
      message: "Country is required and minimum 2 characters",
    }),
    postalcode: z.string().min(2, {
      message: "Postal code is required and minimum 2 characters",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      country: "",
      postalcode: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // console.log
  };
  return (
    <div className="">
      <h2 className="text-lg font-bold mb-4">Edit Your Profile</h2>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>My Causes</FormLabel>
                <FormControl>
                  <Dropedoenforsettingcauses />
                </FormControl>
              </FormItem>
            )}
          />
          <Separator />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>My Skills</FormLabel>
                <FormControl>
                  <Dropedoenforsettingforskill />
                </FormControl>
              </FormItem>
            )}
          />
          <Separator />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Dropedoenforsettingforaccount />
                </FormControl>
              </FormItem>
            )}
          />
          <Separator />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account</FormLabel>
                <FormControl>
                  <Dropedoenforsettingforaccount />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="flex justify-end mt-4">
        <Button
          type="button"
          variant={"secondary"}
          onClick={() => {
            form.reset();
          }}
        >
          cancel
        </Button>
        <Button onClick={form.handleSubmit(onSubmit)}>Save</Button>
      </div>
    </div>
  );
};

export default UserButtonSettings;
