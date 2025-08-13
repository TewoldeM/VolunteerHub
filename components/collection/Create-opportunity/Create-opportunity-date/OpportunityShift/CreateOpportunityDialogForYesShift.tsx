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
import { AlertCircle } from "lucide-react";
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
        <div className="flex flex-col items-center justify-center mt-4">
          <h1 className="flex justify-start mb-1 -ml-56 md:-ml-80">
            TIMESLOTS
          </h1>
          <Separator className="mb-2 ml-12" />
          {/* <span className="w-96 md:w-full border border-b-2  border-gray-800 dark:border-gray-200 mb-2"></span> */}
          <div className="md:w-96 w-80 -ml-10 flex flex-row items-center justify-center  bg-blue-400 px-4 py-1 text-gray-700 text-lg  dark:text-gray-100 overflow-hidden">
            <AlertCircle className="w-6 h-6 text-yellow-500 mr-2" />
            <div className="text-sm">
              Help volunteers with limited availability filter their search
              results.
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 md:gap-32">
            <h1 className="text-sm md:text-lg  md:font-semibold items-center justify-center mt-4">
              WHEN CAN VOLUNTEERS PARTICIPATE?:*
            </h1>
            <div className="flex flex-row items-center justify-center mt-4">
              <Checkbox checked={selectAll} onClick={handleSelectAll} />
              <span className="ml-2 text-sm">SELECT ALL</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 p-6">
            <div className="w-full  px-28   bg-slate-300 dark:bg-slate-900 ">
              <span className="flex flex-row gap-4 md:gap-20 ml-48">
                <h1>Weekdays</h1>
                <h1>Weekends</h1>
              </span>
            </div>
            {/* the second row */}
            <div className="flex flex-row gap-36 w-full  px-28 bg-slate-300 dark:bg-slate-900 ">
              <h1>Daytime</h1>
              <div className="flex justify-center items-center md:gap-36 gap-24">
                <Checkbox
                  checked={weekdaysDaytime}
                  onClick={() => handleCheckboxChange("weekdaysDaytime")}
                />
                <Checkbox
                  checked={weekendsDaytime}
                  onClick={() => handleCheckboxChange("weekendsDaytime")}
                />
              </div>
            </div>
            {/* the 3rd row */}
            <div className="flex flex-row gap-20 w-full  px-28 bg-slate-300 dark:bg-slate-900 ">
              <h1>Evenings (after 5pm)</h1>
              <div className="flex justify-center items-center md:gap-36 gap-24 -ml-5">
                <Checkbox
                  checked={weekdaysEvenings}
                  onClick={() => handleCheckboxChange("weekdaysEvenings")}
                />
                <Checkbox
                  checked={weekendsEvenings}
                  onClick={() => handleCheckboxChange("weekendsEvenings")}
                />
              </div>
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
