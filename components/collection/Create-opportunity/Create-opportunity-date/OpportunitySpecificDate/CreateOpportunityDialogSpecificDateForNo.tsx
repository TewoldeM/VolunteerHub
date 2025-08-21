import React from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CreateOpportunityDialogProps {
  opendate: boolean;
  setOpendate: (arg: boolean) => void;
}

const CreateOpportunityDialogSpecificDateForNo = ({
  opendate,
  setOpendate,
}: CreateOpportunityDialogProps) => {
  const handleSave = () => {
    setOpendate(false); // Close the dialog
  };

  const handleCancel = () => {
    setOpendate(false); // Close the dialog
  };

  return (
    <Dialog open={opendate} onOpenChange={setOpendate}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-orange-500 font-semibold">
            Confirmation
          </DialogTitle>
        </DialogHeader>
        <p className="text-gray-800 p-4">
          This will be considered an "ongoing" opportunity, and will be active
          for 90 days once you publish it. In the future, to change the
          expiration date of an active opportunity, click "edit" in your
          Opportunity Dashboard.
        </p>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={handleCancel}
            className="bg-red-600 hover:bg-red-400 text-white hover:text-white"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-400"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOpportunityDialogSpecificDateForNo;
