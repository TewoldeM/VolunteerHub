import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string(),
  miniage: z.number(),
  timeCommitment: z.string(),
  otherrequirment: z.string(),
});

interface DialogProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const CreateOpportunityDetialsForm = ({ open, setOpen }: DialogProps) => {
  const itemsDate = [
    {
      label: "Yes",
    },
    {
      label: "No",
    },
  ];
  const ItemsChuck = [
    {
      label: " DriversLicense",
    },
    {
      label: "BackgroundCheck",
    },
    {
      label: "Orientation/Training",
    },
  ];
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [deactivateSelected, setDeactivateSelected] = useState<string[]>([]);
  const [doneInADaySelected, setDoneInADaySelected] = useState<string[]>([]);
  const [disabledBackgroundCheck, setDisabledBackgroundCheck] = useState(false);
  const [backgroundCheckSelected, setBackgroundCheckSelected] = useState(false);

  const handleOpenDialog = (label: string) => {
    if (ItemsChuck.some((item) => item.label === label)) {
      if (selected.includes(label)) {
        setSelected(selected.filter((item) => item !== label));
      } else {
        setSelected([...selected, label]);
      }
      setOpen(true);
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "name",
      miniage: 1,
      timeCommitment: "",
      otherrequirment: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex justify-center items-center flex-col space-y-8 mt-28
         p-4 md:w-1/2  md:ml-96 shadow-md py-4
        "
        >
          <div className="flex justify-center flex-col gap-4 px-32">
            <h1 className="text-2xl">Let us know what you need</h1>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estimated # Volunteers Needed</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="10"
                      {...field}
                      className="px-72 text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-row items-center justify-center ml-10 mt-4 bg-blue-200 p-2">
            <AlertCircle className="w-8 h-8 text-yellow-500 mr-2" />
            <div className="text-sm text-gray-600">
              This will be considered an "ongoing" opportunity, and will be
              active for 90 days once you publish it. <br />
              In the future, to change the expiration date of an active
              opportunity.
            </div>
          </div>
          <h1 className="">
            Deactivate opportunity once total number of estimated volunteers
            needed is met?
          </h1>
          <div className="flex flex-wrap gap-4 justify-center">
            {itemsDate.map((itemDate, index) => (
              <div
                key={index}
                className="relative w-20 h-20 p-2  md:w-32 md:h-32 md:p-1 flex flex-col items-center cursor-pointer -mt-10 "
              >
                <span className="mt-4 text-xl  text-center -ml-80">
                  {itemDate.label}
                </span>
                <div className="mt-2 -ml-80">
                  <Checkbox
                    checked={deactivateSelected.includes(itemDate.label)}
                    onClick={() => {
                      if (itemDate.label === "Yes") {
                        setDeactivateSelected(["Yes"]);
                      } else {
                        setDeactivateSelected(["No"]);
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <Separator className={cn("bg-green-300")} />
          <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="text-3xl -ml-80  md:-ml-96">Requirements</h1>
            <span className="flex flex-col justify-center items-center gap-4">
              <h1 className="">
                Is this a "DONE IN A DAY" opportunity? Note: "DONE IN A DAY"
                opportunities <br /> Do not require prior training or an ongoing
                commitment.
              </h1>
              <div className="flex flex-wrap gap-4 justify-center">
                {itemsDate.map((itemDate, index) => (
                  <div
                    key={index}
                    className="relative w-20 h-20 p-2  md:w-32 md:h-32 md:p-1 flex flex-col items-center cursor-pointer -mt-6"
                  >
                    <span className="mt-4 text-xl  text-center -ml-80">
                      {itemDate.label}
                    </span>
                    <div className="mt-2 -ml-80">
                      <Checkbox
                        checked={doneInADaySelected.includes(itemDate.label)}
                        onClick={() => {
                          if (itemDate.label === "Yes") {
                            setDoneInADaySelected(["Yes"]);
                            if (backgroundCheckSelected) {
                              setSelected(
                                selected.filter(
                                  (item) => item !== "BackgroundCheck"
                                )
                              );
                              setBackgroundCheckSelected(false);
                            }
                            setDisabledBackgroundCheck(true);
                          } else {
                            setDoneInADaySelected(["No"]);
                            setDisabledBackgroundCheck(false);
                          }
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
            <h1 className="-ml-64 md:-ml-80">THE FOLLOWING ARE REQUIRED:</h1>
            <div className="flex flex-wrap gap-20 justify-center">
              {ItemsChuck.map((itemChuckData, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 w-32 h-10 p-2 md:w-32 md:h-10 md:p-1 cursor-pointer"
                >
                  <Checkbox
                    checked={selected.includes(itemChuckData.label)}
                    disabled={
                      itemChuckData.label === "BackgroundCheck" &&
                      disabledBackgroundCheck
                    }
                    onClick={() => {
                      if (itemChuckData.label === "BackgroundCheck") {
                        setBackgroundCheckSelected(true);
                      }
                      handleOpenDialog(itemChuckData.label);
                    }}
                  />
                  <span className="text-xl ">{itemChuckData.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <FormField
              control={form.control}
              name="miniage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>MINIMUM AGE</FormLabel>
                  <FormControl>
                    <Input {...field} className="px-48" />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timeCommitment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>TIME COMMITMENT</FormLabel>
                  <FormControl>
                    <Input {...field} className="px-48" />
                  </FormControl>
                  <FormDescription>250 characters max..</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="otherrequirment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OTHER REQUIREMENTS</FormLabel>
                  <FormControl>
                    <Input {...field} className="px-48" />
                  </FormControl>
                  <FormDescription>250 characters max..</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between items-center gap-24 md:gap-64">
            <Link href="/VolunteerProfile/Opportunity/CreateopportunityDateTime">
              <Button className="bg-green-500 hover:bg-green-400  font-bold py-2 px-4 rounded-l-full text-white">
                Previous
              </Button>
            </Link>

            <div className="flex justify-end">
              <button className=" hover:text-green-600 font-bold md:py-2 px-4 ">
                Save Draft
              </button>
              <Link href="/VolunteerProfile/Opportunity/CreateopportintyFilter">
                <Button className="bg-green-500 hover:bg-green-400  font-bold py-2 px-4 rounded-r-full text-white">
                  Next
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateOpportunityDetialsForm;
