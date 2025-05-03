import React, { useEffect, useState } from "react";
import { useSession } from "../SessionProvider";
import { area, experience, portfolio_entry, RichText, role } from "@/types/cv";
import RichTextRenderer from "./rich-text-renderer";
import { User } from "@/types/user";
import { getUser } from "@/lib/user";

interface PortfolioEntryRoleProps {
  role: role;
}
const PortfolioEntryRole: React.FC<PortfolioEntryRoleProps> = ({ role }) => {
  if (!role) {
    return <div>Loading role...</div>;
  }

  return (
    <div>
      <div className="font-bold text-2xl">{role.title}</div>
      <div className="font-italic text-xl">
        {role.startDate}-{role.endDate}
      </div>
      {role.description ? (
        <RichTextRenderer content={role.description} />
      ) : (
        <p>No description available</p>
      )}
    </div>
  );
};

export default PortfolioEntryRole;
