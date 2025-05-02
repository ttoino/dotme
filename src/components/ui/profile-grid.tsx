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

  if(portfolioInfo === null){
    return (
      <div>Loading...</div>
    )
  }


  

  return (
    <div className="p-4">
      <GridLayout
        className="layout"
        cols={4}
        rowHeight={250}
        width={1000}
        draggableHandle=".drag-handle"
        isResizable
        isDraggable
      >
        {portfolioInfo.map(info => (
          <div key={info.id?.toString()} data-grid={{ x: info.x, y: info.y, w: info.w, h: info.h}} className="bg-white border rounded shadow p-2 drag-handle cursor-move">
            <PortfolioEntry portfolio_entry={info} />
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default ProfileGrid;
