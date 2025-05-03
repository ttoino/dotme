import React, { useEffect, useState } from "react";
import { useSession } from "../SessionProvider";
import { area, experience, portfolio_entry, RichText } from "@/types/cv";
import RichTextRenderer from "./rich-text-renderer";
import { User } from "@/types/user";
import { getUser } from "@/lib/user";


interface PortfolioEntryExperienceProps {
    experience: experience;
}
const PortfolioEntryExperience: React.FC<PortfolioEntryExperienceProps> = ({ experience }) => {

    if(!experience){
        return <div>Loading experience...</div>;
    }


    return (
        <div>
            <div className="font-bold text-3xl">{experience.organization}</div>
            {experience.description ? (
                <RichTextRenderer content={experience.description} />
            ) : (
                <p>No description available</p>
            )}
            {experience.location ? (
                <p>{experience.location}</p>
            ) : (
                <p>No description available</p>
            )}
        </div>
    );
};

export default PortfolioEntryExperience;
