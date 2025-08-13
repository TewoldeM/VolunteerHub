import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const SearchBox = () => {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Organization name is required and minimum 2 characters",
    }),
  });
 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // console.log
  };
    return (
      <>
        <h2 className="text-lg font-bold mb-4">Search</h2>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>My Causes</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
          <Button onClick={form.handleSubmit(onSubmit)}>Search</Button>
        </div>
      </>
    );
};

export default SearchBox;
