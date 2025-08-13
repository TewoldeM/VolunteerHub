import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { causes, causes2, causes3 } from "@/lib/Data/causes";
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
import Dropedoenforsettingforskill from "./Dropedoenforsettingforskill";
import Dropedoenforsettingcauses from "./Dropedoenforsetting";
import Countryselector from "./Countr-selector";
import { Edit2Icon, LocateOffIcon, View } from "lucide-react";
const Dropedoenforsettingforaccount = () => {
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
    <Dialog>
      <DialogTrigger className="w-16 dark:text-gray-400  justify-center items-center flex ml-2">
        <div className="flex flex-row gap-8">
          <View size={25} className="text-blue-400 hover:text-blue-500" />
          <Edit2Icon size={25} className="text-blue-400 hover:text-blue-500" />
        </div>
      </DialogTrigger>
      <DialogContent
        className="dark:bg-gray-900 bg-white shadow-md max-w-4xl w-full"
        style={{ zIndex: 1000 }}
      >
        <DialogHeader className="flex justify-center items-center mt-2">
          <DialogTitle className="text-xl md:text-4xl">
            Your Account info
          </DialogTitle>
          <DialogDescription className="text-lg md:text-xl">
            you can edit your account information
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex justify-center items-center gap-44 flex-row">
                <div className="flex justify-center items-center gap-4 flex-col">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-2 dark:border-gray-700"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-2 dark:border-gray-700"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-2 dark:border-gray-700"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-2 dark:border-gray-700"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Postal Code</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-2 dark:border-gray-700"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-center items-center gap-4 flex-col">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-2 dark:border-gray-700"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-2 dark:border-gray-700"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rigion</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-2 dark:border-gray-700"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl className="border-2 dark:border-gray-700">
                          <Countryselector
                            value={field.value}
                            onChange={(country) => {
                              form.setValue("country", country);
                            }}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account info</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-2 dark:border-gray-700"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </form>
          </Form>
          <div className="flex ml-36 flex-col gap-4 mt-4">
            <h1>Change Password</h1>
            <h1>Delete Account</h1>
          </div>
          <div className="flex justify-center items-center gap-8 mt-8">
            <Button
              type="button"
              variant={"secondary"}
              onClick={() => {
                form.reset();
              }}
            >
              cancel
            </Button>
            <Button onClick={form.handleSubmit(onSubmit)}>Create</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default Dropedoenforsettingforaccount;
