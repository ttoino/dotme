import { CV, Image, Link, RichText, role, skill } from "@/types/cv";
import {
  int,
  json,
  singlestoreTable,
  timestamp,
  varchar,
} from "drizzle-orm/singlestore-core";

const timestamps = {
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().onUpdateNow().notNull(),
  deletedAt: timestamp(),
};

export const usersTable = singlestoreTable("users_table", {
  email: varchar({ length: 255 }).primaryKey(),
  ...timestamps,
});

export const cvTable = singlestoreTable("cv_table", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  userId: varchar({ length: 255 }).notNull(),
  info_name: varchar({ length: 255 }).notNull(),
  info_profilePicture: json().$type<Image>(),
  info_roles: json().$type<string[]>(),
  info_bio: json().$type<RichText>(),
  contacts_email: varchar({ length: 255 }),
  contacts_phone: varchar({ length: 20 }),
  contacts_github: varchar({ length: 255 }),
  contacts_linkedin: varchar({ length: 255 }),
  skills: json().$type<skill[]>(),
  ...timestamps,
});

export const areasTable = singlestoreTable("areas_table", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  cvId: int({ unsigned: true }).notNull(),
  name: varchar({ length: 255 }).notNull(),
  links: json().$type<Link[]>(),
  ...timestamps,
});

export const experiencesTable = singlestoreTable("experiences_table", {
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  areaId: int({ unsigned: true }).notNull(),
  organization: varchar({ length: 255 }),
  description: json().$type<RichText>(),
  location: varchar({ length: 255 }),
  roles: json().$type<role[]>(),
  links: json().$type<Link[]>(),
  ...timestamps,
});
