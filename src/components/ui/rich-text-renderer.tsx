import React, { ReactNode } from "react";
// Define the RichText type structure
// This is an assumption based on common rich text formats
// You may need to adjust this based on your actual RichText structure
interface RichTextNode {
    type: string;
    text?: string;
    children?: RichTextNode[];
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    url?: string;
    // Add other attributes as needed based on your RichText structure
  }
  
  type RichText = RichTextNode[];
  
  // Component for rendering RichText content
  const RichTextRenderer: React.FC<{ content: RichText }> = ({ content }) => {
    if (!content || !Array.isArray(content)) return null;
  
    const renderNode = (node: RichTextNode, index: number): React.ReactNode => {
      if (!node) return null;
  
      // Handle text nodes
      if (node.text) {
        let element: ReactNode = node.text;
        
        // Apply formatting if specified
        if (node.bold) element = <strong key={index}>{element}</strong>;
        if (node.italic) element = <em key={index}>{element}</em>;
        if (node.underline) element = <u key={index}>{element}</u>;
        if (node.url) element = <a href={node.url} target="_blank" rel="noopener noreferrer" key={index}>{element}</a>;
        
        return element;
      }
  
      // Handle block nodes
      switch (node.type) {
        case 'paragraph':
          return <p key={index}>{node.children?.map((child, i) => renderNode(child, i))}</p>;
        case 'heading':
          return <h3 key={index}>{node.children?.map((child, i) => renderNode(child, i))}</h3>;
        case 'list-item':
          return <li key={index}>{node.children?.map((child, i) => renderNode(child, i))}</li>;
        case 'bulleted-list':
          return <ul key={index}>{node.children?.map((child, i) => renderNode(child, i))}</ul>;
        case 'numbered-list':
          return <ol key={index}>{node.children?.map((child, i) => renderNode(child, i))}</ol>;
        case 'link':
          return <a key={index} href={node.url} target="_blank" rel="noopener noreferrer">
            {node.children?.map((child, i) => renderNode(child, i))}
          </a>;
        default:
          return <span key={index}>{node.children?.map((child, i) => renderNode(child, i))}</span>;
      }
    };
  
    return (
      <div className="rich-text-content">
        {content.map((node, index) => renderNode(node, index))}
      </div>
    );
  };

export default RichTextRenderer;