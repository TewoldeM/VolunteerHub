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
import Select from "react-select";
import DatePicker from "../../Reuseable/DatePicker";
import { AlertCircle } from "lucide-react";

interface CreateOpportunityDialogProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const CreateShiftDialog = ({ open, setOpen }: CreateOpportunityDialogProps) => {
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
    note: z.string().min(2, {
      message: "Note is required and minimum 2 characters",
    }),
    shift: z.string().min(2, {
      message: "Shift is required and minimum 2 characters",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      country: "",
      postalcode: "",
      note: "",
      shift: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {};

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>xxxx</DialogTrigger>
      <DialogContent className="max-w-3xl h-2/3 overflow-y-scroll">
        <DialogHeader className="flex flex-col gap-2">
          <DialogTitle>Add New Shift</DialogTitle>
          <div className="flex flex-row justify-center items-center bg-blue-200 px-2">
            <AlertCircle className="w-6 h-6 text-yellow-500 mr-2" />
            <div className="text-sm text-gray-600 p-2">
              To save time inputting individual shifts, you can now create
              repeating shifts by setting a start date and changing the <br />
              "Repeats" dropdown. To learn more about shifts click here.
            </div>
          </div>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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
                          placeholder="Select start time"
                          className="w-36"
                        />
                        <Select
                          options={periodOptions}
                          value={periodOptions.find(
                            (option: any) => option.value === startPeriod
                          )}
                          onChange={(option:any) => setStartPeriod(option.value)}
                          isClearable
                          isSearchable
                          placeholder="Select period"
                          className="w-32"
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
                        <div className="flex flex-row gap-2">
                          <Select
                            options={timeOptions}
                            value={timeOptions.find(
                              (option: any) => option.value === endTime
                            )}
                            onChange={(option) => setEndTime(option.value)}
                            isClearable
                            isSearchable
                            placeholder="Select end time"
                            className="w-36"
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
                            className="w-32"
                          />
                        </div>
                      </FormControl>
                      <FormDescription>EndTime (Required)</FormDescription>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 py-2">
              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Notes to volunteer</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        maxLength={150}
                        placeholder="Optional to copy here"
                        {...field}
                        className="text-black px-72 py-6 border dark:border-gray-600 border-gray-800"
                       
                      />
                    </FormControl>
                    <FormMessage className="text-gray-800 dark:text-gray-300">
                      150 characters max.
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="shift"
                render={({ field }) => (
                  <FormItem className="flex flex-col justify-start items-start -ml-64">
                    <FormLabel># volunteers/SHIFT</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1"
                        placeholder=""
                        {...field}
                        className="text-black px-36  py-6 border dark:border-gray-600 border-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              variant={"secondary"}
              onClick={() => {
                form.reset();
              }}
            >
              cancel
            </Button>
          </DialogClose>
          <Button onClick={form.handleSubmit(onSubmit)}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateShiftDialog;
