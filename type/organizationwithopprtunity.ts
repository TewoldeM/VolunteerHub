import { Opportunity, Organization } from "@prisma/client";

export type OrganizationWithOpportunities = Organization & {
  opportunities: Opportunity[];
};

