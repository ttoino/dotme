"use client"

import React, { useEffect, useState } from "react";
import { getExperienceFromNameAndEmail } from "@/lib/experiences";
import { useSession } from "../SessionProvider";
import { area, experience, portfolio_entry, RichText } from "@/types/cv";
import RichTextRenderer from "./rich-text-renderer";
import { User } from "@/types/user";
import { getUser } from "@/lib/user";


interface PortfolioEntryProps {
  portfolio_entry: portfolio_entry;
}

interface entry_contents {
  type?: string ,
  title?: string,
  description?: RichText,
}

const PortfolioEntry: React.FC<PortfolioEntryProps> = ({ portfolio_entry }) => {
  const { sessionPromise } = useSession();
  const [experience, setExperience] = useState<experience | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    sessionPromise.then(session => {
      if (session?.email) {
        getUser(session.email).then((user: User) => setUser(user))
      }
    });
  }, [sessionPromise, portfolio_entry.id]);

  if (!user) {
    return <div>Loading experience...</div>;
  }

  const contents: entry_contents = {
    type: portfolio_entry.type,
    title: ""
  }

  if( portfolio_entry.type == "experience"){
    for(const area of user.portfolio.areas){
      for(const experience of area.entries){
        if( experience.organization == portfolio_entry.id ){
          contents.title = experience.organization;
          contents.description = experience.description;
        }
      }
    }
  }

  return (
    <div>
      <div className="font-bold">{contents.title}</div>
      {contents.description ? (
        <RichTextRenderer content={contents.description} />
      ) : (
        <p>No description available</p>
      )}
    </div>
  );
};

export default PortfolioEntry;
