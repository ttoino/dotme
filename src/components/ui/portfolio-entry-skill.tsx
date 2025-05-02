import React, { useEffect, useState } from "react";
import { useSession } from "../SessionProvider";
import { area, experience, portfolio_entry, RichText, role, skill } from "@/types/cv";
import RichTextRenderer from "./rich-text-renderer";
import { User } from "@/types/user";
import { getUser } from "@/lib/user";


interface PortfolioEntrySkillProps {
    skill: skill;
}
const PortfolioEntrySkill: React.FC<PortfolioEntrySkillProps> = ({ skill }) => {

    if(!skill){
        return <div>Loading skill...</div>;
    }

    const stars = '⭐'.repeat(skill.level || 0);

    return (
        <div>
            <div className="font-bold text-4xl">{skill.title}</div>
            <div>{stars}</div>
        </div>
    );
};

export default PortfolioEntrySkill;