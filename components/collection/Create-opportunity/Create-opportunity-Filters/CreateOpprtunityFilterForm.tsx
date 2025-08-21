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
const formSchema = z.object({
  mini: z.string(),
  max: z.string(),
  donationdetial: z.string(),
});
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Category, Opportunity } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import CategoryList from "../../Create-organazation/CreateOrganization/CategoryList";
import Link from "next/link";
import CategoryList2 from "../../Create-organazation/CreateOrganization/CategoryList2";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
interface DialogProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
}
interface CategoryListProps {
  selectedCategories: Category[];
  handleCategoryChange: (category: Category) => void;
}
interface GroupSizeOption {
  value: string;
  label: string;
}
const groupSizeOptions: GroupSizeOption[] = [
  { value: "1-5", label: "1-5" },
  { value: "6-10", label: "6-10" },
  { value: "11-20", label: "11-20" },
  { value: "21-50", label: "21-50" },
  { value: "51+", label: "51+" },
];
const CreateOpprtunityFilterForm = ({ open, setOpen }: DialogProps) => {
  const items = [
    {
      label: "Kids",
    },
    {
      label: "Teens",
    },
    {
      label: " 55+",
    },
    {
      label: "Public Groups",
    },
    {
      label: "Private Groups",
    },
  ];
  const itemsDate = [
    {
      label: "Yes",
    },
    {
      label: "No",
    },
  ];
  const itemsDate2 = [
    {
      label: "Required",
    },
    {
      label: "Optional",
    },
    {
      label: "NoDonation",
    },
  ];
  const itemsDate3 = [
    {
      label: "OrganzationL",
    },
    {
      label: "VolunteerGL",
    },
    {
      label: "Vertual",
    },
  ];
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedMax, setSelectedMax] = useState<string>("");
  const [selectedMini, setSelectedMini] = useState<string>("");
  const [deactivateSelected, setDeactivateSelected] = useState<string[]>([]);
  const handleOpenDialogsDonation = (label: string) => {
    if (itemsDate3.some((item) => item.label === label)) {
      if (selected.includes(label)) {
        setSelected(selected.filter((item) => item !== label));
      } else {
        setSelected([...selected, label]);
      }
      setOpen(true);
    }
  };
  const handleMaxChange = (value: string) => {
    setSelectedMax(value);
  };

  const handleMiniChange = (value: string) => {
    setSelectedMini(value);
  };

  const handleOpenDialog = (label: string) => {
    if (items.some((item) => item.label === label)) {
      setSelected((prevSelected) =>
        prevSelected.includes(label)
          ? prevSelected.filter((item) => item !== label)
          : [...prevSelected, label]
      );
      setOpen(true);
    }
  };

  const handleOpenDialogPrivate2 = (label: string) => {
    if (itemsDate2.some((item) => item.label === label)) {
      setSelected((prevSelected) =>
        prevSelected.includes(label)
          ? prevSelected.filter((item) => item !== label)
          : [...prevSelected, label]
      );
      setOpen(true);
    }
  };
  const handleOpenDialogPrivate3 = (label: string) => {
    if (itemsDate3.some((item) => item.label === label)) {
      setSelected((prevSelected) =>
        prevSelected.includes(label)
          ? prevSelected.filter((item) => item !== label)
          : [...prevSelected, label]
      );
      setOpen(true);
    }
  };
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mini: "",
      max: "",
      donationdetial: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      {" "}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex justify-center items-center flex-col space-y-4 mt-4 shadow-md py-6 w-full max-w-5xl mx-auto dark:border-2 border-gray-700 bg-orange-50"
        >
          <h1 className="text-2xl text-orange-700 -ml-44">
            Help Volunteer Find Your Opportunity
          </h1>
          <div className="flex flex-col justify-center items-center gap-6 -ml-24">
            <h1 className="text-md -ml-48 text-orange-600">
              What kinds of volunteer could participate
            </h1>
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="flex justify-center items-center flex-row md:px-28 -mt-6">
                {items.map((itemDate, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center justify-center w-20 h-20 p-2  md:w-42 md:h-32 md:p-1 cursor-pointer -mt-6 gap-2 ml-4"
                  >
                    <span className="mt-4 text-sm text-orange-500 text-center -ml-24">
                      {itemDate.label}
                    </span>
                    <div className="-ml-24 ">
                      <Checkbox
                        checked={selected.includes(itemDate.label)}
                        onClick={() => handleOpenDialog(itemDate.label)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {selected.includes("Public Groups") ||
          selected.includes("Private Groups") ? (
            <div className="flex flex-col px-28 gap-2 items-center py-2 bg-orange-100 -ml-4 shadow-md">
              <h1 className="text-lg -ml-52 text-orange-600">
                What is the size of your group? Select the range
              </h1>
              <div className="flex justify-center items-center md:flex-row gap-4 -ml-24">
                <FormField
                  name="mini"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col justify-center items-center">
                      <FormLabel className="-ml-40 text-orange-500">
                        Mini
                      </FormLabel>
                      <FormControl>
                        <select
                          value={selectedMini}
                          onChange={(e) => handleMiniChange(e.target.value)}
                          disabled={checked}
                          className="bg-orange-50 text-orange-500 border-orange-600 rounded-none px-8 py-1 "
                        >
                          <option
                            value=""
                            className="bg-orange-200 hover:bg-orange-800 hover:text-orange-400"
                          >
                            Select minimum
                          </option>
                          {groupSizeOptions.map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                              className="bg-orange-200 hover:bg-orange-800 hover:text-orange-400"
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="mini"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col justify-center items-center">
                      <FormLabel className="-ml-40 text-orange-500">
                        Max
                      </FormLabel>
                      <FormControl>
                        <select
                          value={selectedMini}
                          onChange={(e) => handleMiniChange(e.target.value)}
                          disabled={checked}
                          className="bg-orange-50 text-orange-500 border-orange-600 rounded-none px-8 py-1 "
                        >
                          <option
                            value=""
                            className="bg-orange-200 hover:bg-orange-800 hover:text-orange-400"
                          >
                            Select Maximum
                          </option>
                          {groupSizeOptions.map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                              className="bg-orange-200 hover:bg-orange-800 hover:text-orange-400"
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-center items-center flex-row gap-2 mt-6">
                  <Checkbox
                    checked={checked}
                    onChange={(e: any) => {
                      setChecked(e.target.checked);
                      if (e.target.checked) {
                        setSelectedMax("50+");
                        setSelectedMini("1");
                      } else {
                        setSelectedMax("");
                        setSelectedMini("");
                      }
                    }}
                  />
                  <span className="cursor-pointer text-orange-500">Any</span>
                </div>
              </div>
            </div>
          ) : null}
          <div className="flex flex-row items-center justify-center mt-4 bg-orange-200 p-2">
            <AlertCircle className="w-8 h-8 text-yellow-500 mr-2" />
            <div className="text-sm text-orange-600 max-w-xl p-2 ">
              All Opportunity in VolunteerHub is consider as for adult. In the
              future,The filter is allwo <br /> for the peopel searching for
              activiatys meeting unique needs.
            </div>
          </div>
          {selected.includes("Private Groups") ? (
            <div className="bg-orange-100 p-2 shadow-md">
              <h1 className="text-lg border-b-2 border-orange-600  text-orange-700 mb-2 py-2">
                Private Groups
              </h1>{" "}
              <div className="flex flex-row items-center justify-center bg-orange-200 p-4">
                <AlertCircle className="w-8 h-8 text-yellow-500 mr-2" />
                <div className="text-sm text-orange-600 ">
                  <span className="text-red-400"> Learn More</span> about
                  Private Groupe opportunity Private Groupe opportunity
                  opportunity
                </div>
              </div>
              <div className="flex flex-col justify-center items-center -ml-40">
                <div className="flex flex-col gap-4 justify-center items-cente -ml-4">
                  <h1 className="text-orange-600 text-lg">
                    Is this Opportunity ONLY for private Groups?{" "}
                    <span className="text-red-400">*</span>
                  </h1>
                  <div className="flex flex-wrap gap-4 justify-center ml-36 mt-4">
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
                            checked={deactivateSelected.includes(
                              itemDate.label
                            )}
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
                </div>

                <div className="flex flex-col gap-4 justify-center items-center  -ml-1">
                  <h1 className="text-orange-600 text-lg">
                    Does this group Opportunity Require A Donation?{" "}
                    <span className="text-red-400">*</span>
                  </h1>
                  <div className="flex flex-wrap gap-4 justify-center ml-8">
                    {itemsDate2.map((itemD2, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 w-32 h-10 p-2 md:w-32 md:h-10 md:p-1 cursor-pointer"
                      >
                        <Checkbox
                          checked={deactivateSelected.includes(itemD2.label)}
                          onClick={() => {
                            if (itemD2.label === "Required") {
                              setDeactivateSelected(["Required"]);
                            } else if (itemD2.label === "Optional") {
                              setDeactivateSelected(["Optional"]);
                            } else {
                              setDeactivateSelected(["NoDonation"]);
                            }
                          }}
                        />

                        <span className="text-xl ">{itemD2.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col  ml-40 mt-12">
                  <FormField
                    name="donationdetial"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>Donation Details (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            value={field.value ?? ""}
                            placeholder="Type your optional message here..."
                            className="text-black border dark:border-gray-400 dark:text-gray-100  border-gray-900 rounded-none px-56 text-nowrap"
                          />
                        </FormControl>
                        <FormDescription>200 characters Max</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-col justify-center items-center mt-12 -ml-60 ">
                    <h1>Where can this private group opportunity be held?*</h1>
                    <div className="flex flex-row mt-2 gap-2">
                      {itemsDate3.map((itemDate, index) => (
                        <div
                          key={index}
                          className="flex flex-row relative w-20 h-20 p-2  md:w-32 md:h-32 md:p-1 cursor-pointer gap-2"
                        >
                          <div className=" ml-10">
                            <Checkbox
                              checked={selected.includes(itemDate.label)}
                              onClick={() => {
                                handleOpenDialogsDonation(itemDate.label);
                              }}
                            />
                          </div>
                          <span className=" text-gray-700 dark:text-gray-200 text-center">
                            {itemDate.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <Separator className={cn("bg-green-300")} />
          <div className="flex flex-col justify-center items-center gap-8 ">
            <h1 className="text-3xl -mb-4 -ml-96">Cause areas</h1>
            <h3 className="text-lg -mb-2 -ml-12">
              This helps your opportunity be more discoverable when volunteers{" "}
              <br />
              search by cause.
            </h3>
            <CategoryList
              selectedCategories={[]}
              handleCategoryChange={(category) => console.log(category)}
            />
          </div>
          <Separator className={cn("bg-green-300")} />
          <div className="flex flex-col justify-center items-center gap-8">
            <h1 className="text-3xl -mb-4 -ml-96">Desired skills</h1>
            <h3 className="text-lg -mb-2 -ml-12">
              This helps your opportunity be more discoverable when volunteers
              <br />
              search by skill.
            </h3>
            <CategoryList2
              selectedCategories={[]}
              handleCategoryChange={(category) => console.log(category.name)}
            />
          </div>
          <div className="flex flex-row items-center justify-center bg-green-100 p-2 mt-8">
            <AlertCircle className="w-8 h-8 text-yellow-500 mr-2" />
            <div className="text-sm text-gray-600">
              All Opportunity in VolunteerHub is consider as for adult. In the
              future,The filter is allwo <br /> for the peopel searching for
              activiatys meeting unique needs.
            </div>
          </div>
          <FormField
            name="donationdetial"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Relevant keywords</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    value={field.value ?? ""}
                    placeholder="Relevant keywords"
                    className="text-black border dark:border-gray-400 border-gray-900 rounded-none px-52 py-2"
                  />
                </FormControl>
                <FormDescription>200 characters Max</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
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
                  Next
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default CreateOpprtunityFilterForm;
