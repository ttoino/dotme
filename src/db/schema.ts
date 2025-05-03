import { RichText, skill } from "@/types/cv";
import { Category } from "@/types/template";
import { area } from "@/types/cv";
import {
  int,
  bigint,
  json,
  primaryKey,
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
  id: bigint({ unsigned: true, mode: "number" }).autoincrement().primaryKey(),
  userId: varchar({ length: 255 }).notNull(),
  info_name: varchar({ length: 255 }).default("New User").notNull(),
  info_profilePicture: varchar({ length: 255 }),
  info_roles: json().$type<string[]>(),
  info_bio: json().$type<RichText>(),
  contacts_email: varchar({ length: 255 }),
  contacts_phone: varchar({ length: 20 }),
  contacts_github: varchar({ length: 255 }),
  contacts_linkedin: varchar({ length: 255 }),
  areas: json().$type<area[]>(),
  skills: json().$type<skill[]>(),
  ...timestamps,
});

// export const areasTable = singlestoreTable("areas_table", {
//   id: int({ unsigned: true }).autoincrement().primaryKey(),
//   cvId: bigint({ unsigned: true, mode: "bigint" }).notNull(),
//   name: varchar({ length: 255 }).notNull(),
//   links: json().$type<Link[]>(),
//   ...timestamps,
// });

// export const experiencesTable = singlestoreTable("experiences_table", {
//   id: int({ unsigned: true }).autoincrement().primaryKey(),
//   areaId: bigint({ unsigned: true, mode: "bigint" }).notNull(),
//   organization: varchar({ length: 255 }),
//   description: json().$type<RichText>(),
//   location: varchar({ length: 255 }),
//   roles: json().$type<role[]>(),
//   links: json().$type<Link[]>(),
//   ...timestamps,
// });

export const templatesTable = singlestoreTable("templates_table", {
  id: bigint({ unsigned: true, mode: "number" }).autoincrement().primaryKey(),
  ownerId: varchar({ length: 255 }),
  name: varchar({ length: 255 }).notNull(),
  description: json().$type<RichText>().notNull(),
  image: varchar({ length: 255 }).notNull(),
  category: varchar({ length: 255 }).$type<Category>().notNull(),
  price: int({ unsigned: true }).notNull(),
});

export const templateUserRelation = singlestoreTable("template_user_relation", {
  userId: varchar({ length: 255 }),
  templateId: bigint({ unsigned: true, mode: "number" }),
},  (table) => [
  primaryKey({columns: [table.userId, table.templateId]}),
]);
