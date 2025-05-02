import React, { useState } from "react";
import GridLayout, { Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { roles, cvData, experiences, areas } from "@/mock/cv1";
import PortfolioEntry from "./portfolio-entry";


const experienceItems = experiences.flatMap((experience, areaIndex) =>({
  i: experience.organization, // Unique identifier for each item
  x: experience.x, // Adjust the x position based on your layout preferences
  y: experience.y, // Adjust the y position based on the areaIndex or any logic you prefer
  w: experience.w, // Width of the grid item
  h: experience.h, // Height of the grid item
}));



const ProfileGrid = () => {



  return (
    <div className="p-4">
      <GridLayout
        className="layout"
        layout={experienceItems}
        cols={12}
        rowHeight={30}
        width={1200}
        draggableHandle=".drag-handle"
        isResizable
        isDraggable
      >
        {experiences.map(experience => (
          <div key={experience.organization?.toString()} className="bg-white border rounded shadow p-2">
            <PortfolioEntry experience={experience} />
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default ProfileGrid;
