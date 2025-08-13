import React from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
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

interface CreateOpportunityDialogProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const CreateOpportunityDialogSpecificDateForNo = ({
  open,
  setOpen,
}: CreateOpportunityDialogProps) => {


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>xxxx</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            The Opportunity Will't Have Specific date of Start
          </DialogTitle>
        </DialogHeader>
        <div className="md:w-full w-80 -ml-2 gap-4 flex flex-row items-center justify-center bg-green-200 px-4 py-1 text-gray-700 text-lg  dark:text-gray-100 overflow-hidden">
          <AlertCircle className="size= text-yellow-300 w-52 h-32 " />
          <div className="text-sm font-medium">
            This will be considered an "ongoing" opportunity, and will be active
            for 90 days once you publish it. In the future, to change the
            expiration date of an active opportunity, click "edit" in your
            Opportunity Dashboard. Please note that this will affect the
            visibility of your opportunity.
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

export default CreateOpportunityDialogSpecificDateForNo;
//
