import React from "react";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CV, RichText } from "@/types/cv";
import { Roles } from "@/app/exportcv/columns";
import { area, experience, role } from "@/types/cv";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function renderRichText(nodes: RichText): React.ReactNode {
  return nodes.map((node, index) => {
    switch (node.type) {
      case "text":
        let content: React.ReactNode = node.text;

        if (node.bold) content = <strong>{content}</strong>;
        if (node.italic) content = <em>{content}</em>;
        if (node.underline) content = <u>{content}</u>;

        return <React.Fragment key={index}>{content}</React.Fragment>;

      case "link":
        return (
          <a key={index} href={node.href} className="text-blue-600 underline">
            {node.text}
          </a>
        );

      case "break":
        return <br key={index} />;

      case "list":
        const ListTag = node.ordered ? "ol" : "ul";
        return (
          <ListTag key={index} className="ml-5 list-disc">
            {node.items.map((item, i) => (
              <li key={i}>{renderRichText(item)}</li>
            ))}
          </ListTag>
        );

      case "paragraph":
        return (
          <p key={index} className="mb-3">
            {renderRichText(node.children)}
          </p>
        );

      default:
        return null;
    }
  });
}

export function getRolesFormattedData(user_data: any): Roles[] {
  const roles: Roles[] = [];
  user_data?.portfolio?.areas?.forEach((area: any) => {
    area.entries.forEach((entry: any) => {
      entry.roles.forEach((role: any) => {
        roles.push({
          id: role.id,
          area: area.name,
          organization: entry.organization,
          title: role.title,
          startDate: role.startDate,
          endDate: role.endDate,
        });
      });
    });
  });
  return roles;
}

export type DataSelectedProps = {
  user_data: any;
  selected: any;
};

export function buildSelectedData(
  user_data: CV,
  selected: any,
  template_type: string,
  template_id: string,
  includeURL: boolean,
  includeQR: boolean
): CV {
  const user_areas: area[] = user_data.areas;
  const areas: area[] = [];

  selected.forEach((row: any) => {
    const area = user_areas.find((area: area) => area.name === row.area);
    const new_area: area = {
      name: area!.name,
      entries: [] as experience[],
    };
    const experience = area?.entries.find(
      (experience: experience) => experience.organization === row.organization
    );
    const new_experience = {
      organization: experience!.organization,
      description: experience!.description,
      location: experience!.location,
      roles: [] as role[],
    };
    const role = experience?.roles.find(
      (role: role) => role.title === row.title
    );
    const new_role = {
      title: role!.title,
      startDate: role!.startDate,
      endDate: role!.endDate,
      description: role!.description,
    };
    new_experience.roles.push(new_role);
    new_area.entries.push(new_experience);
    areas.push(new_area);
  });

  return {
    template: {
      type: template_type,
      id: template_id,
      includeURL: includeURL,
      includeQR: includeQR,
    },
    info: user_data.info,
    contacts: user_data.contacts,
    areas: areas,
    skills: user_data.skills,
  };
}
