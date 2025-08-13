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
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Copy, Edit2, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface CreateOpportunityDialogForYesShift {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const CreateOpportunityDialogForYesShift = ({
  open,
  setOpen,
}: CreateOpportunityDialogForYesShift) => {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [weekdaysDaytime, setWeekdaysDaytime] = useState(false);
  const [weekdaysEvenings, setWeekdaysEvenings] = useState(false);
  const [weekendsDaytime, setWeekendsDaytime] = useState(false);
  const [weekendsEvenings, setWeekendsEvenings] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
    
      const handleOpenDialog = (label: string) => {
        if (label === "Yes") {
          setSelected(label);
        } else {
          setOpen(false);
          setSelected(label);
        }
      };

      const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setWeekdaysDaytime(selectAll ? false : true);
        setWeekdaysEvenings(selectAll ? false : true);
        setWeekendsDaytime(selectAll ? false : true);
        setWeekendsEvenings(selectAll ? false : true);
      };

      const handleCheckboxChange = (type: string) => {
        switch (type) {
          case "weekdaysDaytime":
            setWeekdaysDaytime(!weekdaysDaytime);
            break;
          case "weekdaysEvenings":
            setWeekdaysEvenings(!weekdaysEvenings);
            break;
          case "weekendsDaytime":
            setWeekendsDaytime(!weekendsDaytime);
            break;
          case "weekendsEvenings":
            setWeekendsEvenings(!weekendsEvenings);
            break;
          default:
            break;
        }
      };

      const handleAddShift = () => {
        setShowDialog(true);
      };
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
        <div className="flex flex-col items-center justify-center md:ml-56 mt-4">
          <h1 className="flex justify-start mb-1 -ml-44 md:-ml-80 text-lg">
            Shift Schedule
          </h1>
          <Separator className="mb-2 ml-2" />
          {/* <span className="w-80 md:w-full border border-b-2  border-gray-800 dark:border-gray-400 mb-2"></span> */}
          <div className="flex flex-col items-start justify-between md:px-28 py-20 gap-16 bg-slate-50 dark:bg-slate-950">
            {/* <h3 className="text-lg mt-10 md:-ml-20">No shift yet</h3> */}
            <div className="flex flex-row justify-center items-center gap-24">
              <div className="flex flex-col justify-center items-start dark:text-gray-100">
                <h1>start time to end time</h1>
                <h2>starting date to ending Date</h2>
                <h3>description</h3>
              </div>
              <div className="flex flex-col justify-center items-start gap-2 dark:text-gray-100">
                <h1>10</h1>
                <h2>Volunteers Shift</h2>
              </div>
              <div className="flex flex-row justify-center items-start gap-8">
                <Edit2 className="cursor-pointer text-blue-400 hover:text-blue-500 w-6 h-6" />
                <Copy className="cursor-pointer text-blue-400 hover:text-blue-500 w-6 h-6" />
                <Trash2 className="cursor-pointer text-red-400 hover:text-red-500 w-6 h-6" />
              </div>
            </div>

            <div className="ml-96 mb-6">
              <Button
                className={cn("text-white bg-blue-500 hover:bg-blue-300")}
                onClick={() => setShowDialog(true)}
              >
                Create Custom Question
              </Button>
            </div>
          </div>
        </div>
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

export default CreateOpportunityDialogForYesShift;
