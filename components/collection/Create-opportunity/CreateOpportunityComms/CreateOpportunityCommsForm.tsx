"use client";
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
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { cn } from "@/lib/utils";
import CategoryList from "../../Create-organazation/CreateOrganization/CategoryList";
import { Category } from "@prisma/client";
import { Separator } from "@radix-ui/react-separator";
// import CategoryList from "@/components/CategoryList"; // Import your CategoryList component

const formSchema = z.object({
  name: z.string(),
});

interface DialogProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const CreateOpportunityCommsForm = ({ open, setOpen }: DialogProps) => {
  const itemsDate = [{ label: "Yes" }, { label: "No" }];
  const [showDialog, setShowDialog] = useState(false);
  const [deactivateSelected, setDeactivateSelected] = useState<string[]>([]);
  const [showCategoryList, setShowCategoryList] = useState(false); // State for CategoryList visibility
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const handleAddShift = () => {
    setShowDialog(true);
  };
  const handleCheckboxClick = (label: string) => {
    if (label === "Yes") {
      setDeactivateSelected(["Yes"]);
      setShowCategoryList(true); // Show CategoryList when "Yes" is checked
    } else {
      setDeactivateSelected(["No"]);
      setShowCategoryList(false); // Hide CategoryList when "No" is checked
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex justify-center items-center flex-col space-y-8  shadow-md py-4
        "
        >
          <h1 className="text-2xl -ml-96">Automate your communications</h1>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="ml-8">
                <FormLabel>
                  Opportunity point of contact
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    className="px-72 dark:border-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator className={cn("bg-green-300")} />
          <h1 className="text-2xl -ml-96">Screen interested volunteers</h1>
          <h1 className="-ml-48">
            Gather information from the volunteers when they make connection
          </h1>
          <div className="flex flex-col gap-4 justify-center -ml-40">
            <h2 className="-ml-32">Add a volunteer Questionnaire?</h2>
            <div className="flex justify-center items-center flex-row mt-2">
              {itemsDate.map((itemDate, index) => (
                <div
                  key={index}
                  className="relative w-20 h-20 p-2 md:w-32 md:h-32 md:p-1 flex flex-col items-center cursor-pointer -mt-10"
                >
                  <span className="mt-4 text-xl text-center -ml-80">
                    {itemDate.label}
                  </span>
                  <div className="mt-2 -ml-80">
                    <Checkbox
                      checked={deactivateSelected.includes(itemDate.label)}
                      onClick={() => handleCheckboxClick(itemDate.label)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {showCategoryList && (
            <div className="flex flex-col gap-4">
              <CategoryList
                selectedCategories={[]}
                handleCategoryChange={function (category: Category): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <Button
                className={cn("text-white bg-blue-500 hover:bg-blue-300")}
                onClick={handleAddShift}
              >
                Create Custom Question
              </Button>
            </div>
          )}
          {/* Conditionally render CategoryList */}
          <Separator className={cn("bg-green-300")} />
          <div className="flex flex-col justify-center items-center gap-6 -ml-40">
            <h1 className="text-3xl -ml-80 md:-ml-64">Greet your volunteers</h1>
            <span className="flex flex-col justify-center items-center gap-4">
              <h1 className="-ml-24">
                Automatically send volunteers an email after they connect You{" "}
                <br />
                can also manage your greetings in Greeting Manager
              </h1>
              <div className="flex flex-col gap-4 items-center -ml-96">
                <h1 className="text-xl">Volunteer Greeting</h1>
                <Button className={cn("-ml-24")}>Create</Button>
              </div>
            </span>
          </div>
          <div className="flex justify-between items-center gap-24 md:gap-64">
            <Link href="/VolunteerProfile/Opportunity/CreateopportintyFilter">
              <Button className="bg-green-500 hover:bg-green-400  font-bold py-2 px-4 rounded-l-full text-white">
                Previous
              </Button>
            </Link>

            <div className="flex justify-end">
              <button className=" hover:text-green-600 font-bold md:py-2 px-4 ">
                Save Draft
              </button>
              <Link href="/VolunteerProfile/Opportunity/CreateOpportunityComms">
                <Button className="bg-green-500 hover:bg-green-400  font-bold py-2 px-4 rounded-r-full text-white">
                  Finsh
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateOpportunityCommsForm;
