import React from "react";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { RichText } from "@/types/cv";

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
