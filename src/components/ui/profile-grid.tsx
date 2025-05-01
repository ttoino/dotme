"use client";

import React from "react";
import GridLayout, { Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const layout: Layout[] = [
  { i: "profile", x: 0, y: 0, w: 4, h: 4 },
  { i: "about", x: 4, y: 0, w: 4, h: 4 },
  { i: "skills", x: 8, y: 0, w: 4, h: 4 },
];

const ProfileGrid = () => {
  return (
    <div className="p-4">
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        draggableHandle=".drag-handle"
        isResizable
        isDraggable
      >
        <div key="profile" className="bg-white border rounded shadow p-2">
          <div className="drag-handle cursor-move font-bold">Profile</div>
          <p>Some profile info...</p>
        </div>
        <div key="about" className="bg-white border rounded shadow p-2">
          <div className="drag-handle cursor-move font-bold">About</div>
          <p>Some about section...</p>
        </div>
        <div key="skills" className="bg-white border rounded shadow p-2">
          <div className="drag-handle cursor-move font-bold">Skills</div>
          <p>Some skills section...</p>
        </div>
      </GridLayout>
    </div>
  );
};

export default ProfileGrid;
