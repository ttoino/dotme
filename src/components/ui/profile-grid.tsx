"use client"

import React, { use, useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { experiences } from "@/mock/cv1";
import PortfolioEntry from "./portfolio-entry";
import { getPortfolioEntries } from "@/lib/portfolio";
import { useSession } from "../SessionProvider";
import { portfolio_entry } from "@/types/cv";


const experienceItems = experiences.flatMap((experience, areaIndex) => ({
  i: experience.organization, // Unique identifier for each item
  x: experience.x, // Adjust the x position based on your layout preferences
  y: experience.y, // Adjust the y position based on the areaIndex or any logic you prefer
  w: experience.w, // Width of the grid item
  h: experience.h, // Height of the grid item
}));



const ProfileGrid = () => {

  const { sessionPromise } = useSession()
  const [portfolioInfo, setPortfolioInfo] = useState<portfolio_entry[] | null>(null);

  useEffect(() => {
    sessionPromise.then(session => {
      if (session?.email) {
        getPortfolioEntries(session.email).then(setPortfolioInfo);
      }
    });
    console.log(portfolioInfo)
  }, [sessionPromise]);
  

  return (
    <div className="p-4">
      <GridLayout
        className="layout"
        layout={experienceItems}
        cols={4}
        rowHeight={250}
        width={1000}
        draggableHandle=".drag-handle"
        isResizable
        isDraggable
      >
        {experiences.map(experience => (
          <div key={experience.organization?.toString()} className="bg-white border rounded shadow p-2 drag-handle cursor-move">
            <PortfolioEntry experience={experience} />
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default ProfileGrid;
