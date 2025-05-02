import React from "react";
import { experience } from "@/types/cv";
import RichTextRenderer from "./rich-text-renderer";



// Updated PortfolioEntry component with RichText rendering
interface PortfolioEntryProps {
  experience: experience;
}

const PortfolioEntry: React.FC<PortfolioEntryProps> = ({ experience }) => {
  return (
    <div>
      <div className="drag-handle cursor-move font-bold">{experience.organization}</div>
      {experience.description ? (
        <RichTextRenderer content={experience.description as unknown as RichText} />
      ) : (
        <p>No description available</p>
      )}
    </div>
  );
};

export default PortfolioEntry;
