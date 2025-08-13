import { ReactNode } from "react";
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
// import Countryselector from "../../Reuseable/Countr-selector";

interface CreateOpportunityDialogProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const CreateOpportunityDialogSHift = ({
  open,
  setOpen,
}: CreateOpportunityDialogProps) => {
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

  //     try {
  //     const response = await axios.post("/api/organization", values);
  //     router.push(`/instructor/courses/${response.data.id}/basic`);
  //     toast.success("New Course Created");
  //   } catch (err) {
  //     console.log("Failed to create new course", err);
  //     toast.error("Something went wrong!");
  //   }
  // };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // try {
    //   const token = localStorage.getItem("token");
    //   const response = await fetch("/api/organization", {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       ...data,
    //       orgtype: selectedOrgType,
    //     }),
    //   });
    //   const result = await response.json();
    //   if (result.id) {
    //     // Redirect to the Basic page of the newly created organization
    //     router.push(`/VolunteerProfile/organization/${result.id}/basic`);
    //     toast.success("New Organization Created");
    //   } else {
    //     toast.error("Failed to create organization");
    //   }
    // } catch (error: any) {
    //   toast.error("Failed to create organization");
    // }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>xxxx</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>ADD Opportunity Shift</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-row justify-center items-center gap-20 ">
              <FormField
                control={form.control}
                name="postalcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>StartDate</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
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
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormDescription>EndDate (Required)</FormDescription>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-row justify-center items-center gap-20 ">
              <FormField
                control={form.control}
                name="postalcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>StartTime</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormDescription>StartTime (Required)</FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="postalcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>EndTime</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormDescription>EndTime (Required)</FormDescription>
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

export default CreateOpportunityDialogSHift;
