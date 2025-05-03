"use client"

import React, { use, useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { experiences } from "@/mock/cv1";
import { getPortfolioEntries, updatePortfolioEntry } from "@/lib/portfolio";
import { useSession } from "../SessionProvider";
import { experience, portfolio_entry, role, skill } from "@/types/cv";
import { getUser } from "@/lib/user";
import { User } from "@/types/user";
import PortfolioEntryExperience from "./portfolio-entry-experience";
import PortfolioEntrySkill from "./portfolio-entry-skill";
import PortfolioEntryRole from "./portfolio-entry-role";


interface ProfileGridProps {
  user: User;
}

const ProfileGrid: React.FC<ProfileGridProps> = ({ user }) => {
  const portfolioInfo: portfolio_entry[] = user.portfolio_entries || [];
  const experiences: Record<string, experience> = {}
  const roles: Record<string, role> = {}
  const skills: Record<string, skill> = {}

  for(const portfolio_entry of portfolioInfo || []){
    if( portfolio_entry.type == "skill"){
      for(const skill of user.portfolio.skills || []){
        if (skill.title == portfolio_entry.foreignId){
          skills[skill.title] = skill
        }
      }
    }else {
      for(const area of user.portfolio.areas || []){
        for(const experience of area.entries || []){
          if(portfolio_entry.type == "experience" ){
            if(experience.organization == portfolio_entry.foreignId){
              experiences[experience.organization] = experience
              console.log(experiences)
            }
          }else if(portfolio_entry.type == "role"){
            for(const role of experience.roles || []){
              if( role.title == portfolio_entry.foreignId){
                roles[role.title] = role
              }
            }   
          }
        }
      }
    }
  }

  if(portfolioInfo.length === 0 || user === null){
    return (
      <div>Loading...</div>
    )
  }

  const styles: Record<string, string> = {
    "experience" : "bg-accent border rounded shadow p-2 drag-handle cursor-move",
    "skill" : "bg-primary border rounded shadow p-2 drag-handle cursor-move",
    "role" : "bg-secondary border rounded shadow p-2 drag-handle cursor-move"
  }


  const handleLayoutChange = (newLayout: any[]) => {
    newLayout.forEach((item) => {
      const updatedEntry: portfolio_entry = {
        ...portfolioInfo.find((entry) => entry.foreignId === item.i)!,
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h,
      };
      
      updatePortfolioEntry(updatedEntry);
    });
  };
  

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
        onLayoutChange={handleLayoutChange}
      >
        {portfolioInfo.map(info => {
        // Determine the component to render based on info.type
        let content;
        switch(info.type) {
          case "experience":
            content = <PortfolioEntryExperience experience={experiences[info.foreignId]} />;
            break;
          case "skill":
            content = <PortfolioEntrySkill skill={skills[info.foreignId]} />;
            break;
          case "role":
            content = <PortfolioEntryRole role={roles[info.foreignId]} />;
            break;
          default:
            content = <div>No content available</div>;
        }

        return (
          <div
            key={info.foreignId?.toString()}
            data-grid={{ x: info.x, y: info.y, w: info.width, h: info.height }}
            className={styles[info.type]}
          >
            {content}
          </div>
        );
      })}
      </GridLayout>
    </div>
  );
};

export default ProfileGrid;
