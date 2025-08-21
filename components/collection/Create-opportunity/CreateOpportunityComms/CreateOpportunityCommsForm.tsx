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
          className="flex flex-col items-center space-y-8 shadow-md py-4 max-w-2xl mx-auto"
        >
          <h1 className="text-2xl font-semibold">
            Automate your communications
          </h1>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Opportunity point of contact
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter contact name"
                    {...field}
                    className="w-full px-4 py-2 border rounded-md dark:border-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator className={cn("bg-gray-300 w-full")} />
          <h1 className="text-2xl font-semibold">
            Screen interested volunteers
          </h1>
          <p className="text-center">
            Gather information from the volunteers when they make connection
          </p>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-lg">Add a volunteer Questionnaire?</h2>
            <div className="flex gap-8">
              {itemsDate.map((itemDate, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <span className="text-xl text-center">{itemDate.label}</span>
                  <div className="mt-2">
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
            <div className="w-full flex flex-col items-center gap-4">
              <CategoryList
                selectedCategories={[]}
                handleCategoryChange={function (category: Category): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <Button
                className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded"
                onClick={handleAddShift}
              >
                Create Custom Question
              </Button>
            </div>
          )}
          <Separator className={cn("bg-gray-300 w-full")} />
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-semibold">Greet your volunteers</h1>
            <p className="text-center">
              Automatically send volunteers an email after they connect. You can
              also manage your greetings in Greeting Manager
            </p>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-lg">Volunteer Greeting</h2>
              <Button className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded">
                Create
              </Button>
            </div>
          </div>



          
          <div className="flex justify-between items-center w-full gap-4 mt-6">
            <Link href="/VolunteerProfile/Opportunity/CreateopportintyFilter">
              <Button className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-l-full">
                Previous
              </Button>
            </Link>
            <div className="flex gap-4">
              <button className="text-green-600 hover:text-green-800 font-semibold px-4 py-2">
                Save Draft
              </button>
              <Link href="/VolunteerProfile/Opportunity/CreateOpportunityComms">
                <Button className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-r-full">
                  Finish
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
