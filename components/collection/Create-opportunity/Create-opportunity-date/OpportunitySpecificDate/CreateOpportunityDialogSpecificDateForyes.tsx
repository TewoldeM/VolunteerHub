import { ReactNode, useState } from "react";
import React from "react";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Organization } from "@prisma/client";
import Router from "next/router";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useRouter } from "next/navigation";
import TimeZoneSelecter from "../../../Reuseable/TimeZoneSelecter";
import DatePicker from "../../../Reuseable/DatePicker";
import Select from "react-select";

interface CreateOpportunityDialogProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const CreateOpportunityDialogSpecificDateForyes = ({
  open,
  setOpen,
}: CreateOpportunityDialogProps) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startPeriod, setStartPeriod] = useState("");
  const [endPeriod, setEndPeriod] = useState("");

  const timeOptions: any = [];
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 4; j++) {
      const hours = i.toString().padStart(2, "0");
      const minutes = (j * 15).toString().padStart(2, "0");
      const time = `${hours}:${minutes}`;
      timeOptions.push({ value: time, label: time });
    }
  }

  const periodOptions = [
    { value: "AM", label: "AM" },
    { value: "PM", label: "PM" },
  ];

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
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {};

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>xxxx</DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add Date and Time</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="postalcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>StartTime</FormLabel>
                  <FormControl>
                    <TimeZoneSelecter  />
                  </FormControl>
                  <FormDescription>StartTime (Required)</FormDescription>
                </FormItem>
              )}
            />
            <div className="flex flex-col md:flex-row justify-center items-center gap-20 ">
              <FormField
                control={form.control}
                name="postalcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>StartDate</FormLabel>
                    <FormControl>
                      <DatePicker />
                    </FormControl>
                    <FormDescription>StartDate (Required)</FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="postalcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>EndDate</FormLabel>
                    <FormControl>
                      <DatePicker />
                    </FormControl>
                    <FormDescription>EndDate (Required)</FormDescription>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-16 ">
              <FormField
                control={form.control}
                name="postalcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>StartTime</FormLabel>
                    <FormControl>
                      <div className="flex flex-row gap-2">
                        <Select
                          options={timeOptions}
                          value={timeOptions.find(
                            (option: any) => option.value === startTime
                          )}
                          onChange={(option) => setStartTime(option.value)}
                          isClearable
                          isSearchable
                          placeholder="Select start time "
                          className="w-36 dark:bg-slate-700 dark:text-gray-800"
                        />
                        <Select
                          options={periodOptions}
                          value={periodOptions.find(
                            (option: any) => option.value === startPeriod
                          )}
                          onChange={(option: any) =>
                            setStartPeriod(option.value)
                          }
                          isClearable
                          isSearchable
                          placeholder="Select period"
                          className="w-32 dark:bg-slate-700 dark:text-gray-800"
                        />
                      </div>
                    </FormControl>
                    <FormDescription>StartTime (Required)</FormDescription>
                  </FormItem>
                )}
              />
              <div className="flex px-0">
                <FormField
                  control={form.control}
                  name="postalcode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>EndTime</FormLabel>
                      <FormControl className="">
                        <div className="flex flex-row gap-2 dark:bg-slate-700">
                          <Select
                            options={timeOptions}
                            value={timeOptions.find(
                              (option: any) => option.value === endTime
                            )}
                            onChange={(option) => setEndTime(option.value)}
                            isClearable
                            isSearchable
                            placeholder="Select end time"
                            className="w-36 dark:bg-slate-700 dark:text-gray-800"
                          />
                          <Select
                            options={periodOptions}
                            value={periodOptions.find(
                              (option: any) => option.value === endPeriod
                            )}
                            onChange={(option: any) =>
                              setEndPeriod(option.value)
                            }
                            isClearable
                            isSearchable
                            placeholder="Select period"
                            className="w-32 dark:bg-slate-900 dark:text-gray-800"
                          />
                        </div>
                      </FormControl>
                      <FormDescription>EndTime (Required)</FormDescription>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </form>
        </Form>
      <DialogFooter>
           <DialogClose asChild>
             <Button
               type="button"
               variant={"secondary"}
               className={cn("bg-red-500 hover:bg-red-400 text-white")}
             >
               cancel
             </Button>
           </DialogClose>
           <Button className={cn("bg-green-500 hover:bg-green-400")}>OK</Button>
         </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOpportunityDialogSpecificDateForyes;
