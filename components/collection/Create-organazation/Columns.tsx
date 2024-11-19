// columns.ts
import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Organization, Opportunity } from "@prisma/client"; // Import Opportunity type
import { Button } from "@/components/ui/button";

// Create a new type that includes opportunities
type OrganizationWithOpportunities = Organization & {
  opportunities: Opportunity[];
};

export const columns = (
  defaultContact: string
): ColumnDef<OrganizationWithOpportunities>[] => [  
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return <div>{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "defaultcontact",
    header: () => (
      <div>
        Default Contact
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </div>
    ),
    cell: () => {
      return <div className="text-gray-700">{defaultContact}</div>;
    },
  },
  {
    accessorKey: "opportunities",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Active Opportunity
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const hasActiveOpportunities = row.original.opportunities.length > 0;
      return (
        <Badge
          className={`${
            hasActiveOpportunities
              ? "text-green-600 bg-green-50"
              : "text-red-600 bg-red-50 p-2 hover:bg-red-300"
          }`}
        >
          {hasActiveOpportunities ? "Yes" : "No"}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <div>
        <Link
          href={`/VolunteerProfile/organization/${row.original.id}/basic`}
          className="flex gap-2 items-center hover:text-[#40aadf]"
        >
          <Pencil className="h-4 w-4" /> Edit
        </Link>
      </div>
    ),
  },
];
