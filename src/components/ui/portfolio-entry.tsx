"use client"

import React, { useEffect, useState } from "react";
import { getExperienceFromNameAndEmail } from "@/lib/experiences";
import { useSession } from "../SessionProvider";
import { experience, portfolio_entry } from "@/types/cv";
import RichTextRenderer from "./rich-text-renderer";


interface PortfolioEntryProps {
  portfolio_entry: portfolio_entry;
}

const PortfolioEntry: React.FC<PortfolioEntryProps> = ({ portfolio_entry }) => {
  const { sessionPromise } = useSession();
  const [experience, setExperience] = useState<experience | null>(null);

  useEffect(() => {
    sessionPromise.then(session => {
      if (session?.email) {
        getExperienceFromNameAndEmail(session.email, portfolio_entry.id).then((experiences) => {
          setExperience(experiences);
        });
      }
    });
  }, [sessionPromise, portfolio_entry.id]);

  if (!experience) {
    return <div>Loading experience...</div>;
  }

  return (
    <div>
      <div className="font-bold">{experience.organization}</div>
      {experience.description ? (
        <RichTextRenderer content={experience.description} />
      ) : (
        <p>No description available</p>
      )}
    </div>
  );
};

export default PortfolioEntry;
