import { Blob } from "buffer";

export interface CV {
  info: info;
  contacts: contacts;
  areas: area[];
  skills: skill[];
  portfolio: portfolio_entry[];
}

export interface info {
  name: string;
  profile_picture?: string;
  roles: string[];
  bio?: RichText;
}

export interface contacts {
  email?: string;
  phone?: string;
  github?: string;
  linkedin?: string;
}

export interface area {
  name: string;
  entries?: experience[];
  links?: Link[];
}

export interface experience {
  organization?: string;
  description?: RichText;
  location?: string;
  roles: role[];
  links?: Link[];
  x?: number;
  y?: number;
  w?: number;
  h?: number;
}

export interface role {
  title: string;
  startDate: string;
  endDate: string;
  description: RichText;
  links?: Link[];
}

export interface skill {
  title: string;
  level?: number; // 1-5
}

export interface portfolio_entry {
  type: string;
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

// ===================================================================================================

export type RichTextNode =
  | {
      type: "text";
      text: string;
      bold?: boolean;
      italic?: boolean;
      underline?: boolean;
    }
  | { type: "link"; text: string; href: string }
  | { type: "break" } // line break
  | { type: "list"; items: RichTextNode[][]; ordered?: boolean }
  | { type: "paragraph"; children: RichTextNode[] };

export type RichText = RichTextNode[];

export interface Image {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface Link {
  text: string;
  url: string;
}
