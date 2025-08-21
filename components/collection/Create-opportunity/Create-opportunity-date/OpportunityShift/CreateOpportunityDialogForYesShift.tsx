import { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CreateOpportunityDialogProps {
  openshift: boolean;
  setOpenshift: (arg: boolean) => void;
}

const CreateOpportunityDialogForYesShift = ({
  openshift,
  setOpenshift,
}: CreateOpportunityDialogProps) => {
  const handleSave = () => {
    // Add save logic here if needed
    setOpenshift(false);
  };

  const handleCancel = () => {
    setOpenshift(false);
  };

  return (
    <Dialog open={openshift} onOpenChange={setOpenshift}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-orange-500 font-semibold">
            Confirmation
          </DialogTitle>
          <div className="mt-2 flex items-center justify-between bg-blue-100 p-2 rounded text-blue-700 text-sm">
            <span>
              <span className="mr-1">ℹ️</span>
              To save time inputting individual shifts, you can now create
              repeating shifts by setting a start date and changing the
              "Repeats" dropdown. To learn more about shifts click here.
            </span>
            <button
              onClick={(e) => {
                e.preventDefault();
                // Close the message (in this case, it’s just hidden visually)
              }}
              className="text-blue-700 hover:text-blue-900"
            >
              ✕
            </button>
          </div>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Start Date and End Date side by side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="start-date" className="text-right">
                START DATE
              </label>
              <input
                id="start-date"
                type="text"
                defaultValue="05 Aug 2025"
                className="col-span-3 p-2 border rounded"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="end-date" className="text-right">
                END DATE
              </label>
              <input
                id="end-date"
                type="text"
                defaultValue="06 Aug 2025"
                className="col-span-3 p-2 border rounded"
              />
            </div>
          </div>

          {/* Start Time and End Time side by side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="start-time" className="text-right text-red-500">
                START TIME*
              </label>
              <select id="start-time" className="col-span-3 p-2 border rounded">
                <option>8:00am</option>
              </select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="end-time" className="text-right text-red-500">
                END TIME*
              </label>
              <select id="end-time" className="col-span-3 p-2 border rounded">
                <option>4:15pm</option>
              </select>
            </div>
          </div>

          {/* Notes to Volunteer */}
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="notes" className="text-right">
              NOTES TO VOLUNTEER
            </label>
            <textarea
              id="notes"
              className="col-span-3 p-2 border rounded"
              placeholder="Optional copy here"
              maxLength={150}
            ></textarea>
          </div>

          {/* # Volunteers/Shift */}
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="volunteers" className="text-right text-red-500">
              # VOLUNTEERS/SHIFT*
            </label>
            <input
              id="volunteers"
              type="number"
              defaultValue="10"
              className="col-span-3 p-2 border rounded"
            />
          </div>
        </div>
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
            className="bg-green-500 hover:bg-green-400 text-white"
          >
            SAVE
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOpportunityDialogForYesShift;
