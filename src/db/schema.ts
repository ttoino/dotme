import { RichText, skill, area } from "@/types/cv";
import { Category } from "@/types/template";
import {} from "@/types/cv";
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

export const portfolioTable = singlestoreTable("portfolio_table", {
  id: bigint({ unsigned: true, mode: "number" }).autoincrement().primaryKey(),
  userId: varchar({ length: 255 }).notNull(), // ligar ao user
  type: varchar({ length: 255 }).notNull(), // saber o tipe de tabela
  foreignId: varchar({ length: 255 }).notNull(), // ligar a tabela
  x: int({ unsigned: true }).notNull(),
  y: int({ unsigned: true }).notNull(),
  width: int({ unsigned: true }).notNull(),
  height: int({ unsigned: true }).notNull(),
  ...timestamps,
});

export const templatesTable = singlestoreTable("templates_table", {
  id: bigint({ unsigned: true, mode: "number" }).autoincrement().primaryKey(),
  ownerId: varchar({ length: 255 }),
  name: varchar({ length: 255 }).notNull(),
  description: json().$type<RichText>().notNull(),
  image: varchar({ length: 255 }).notNull(),
  category: varchar({ length: 255 }).$type<Category>().notNull(),
  price: int({ unsigned: true }).notNull(),
  ...timestamps,
});

export const templateUserRelation = singlestoreTable(
  "template_user_relation",
  {
    userId: varchar({ length: 255 }),
    templateId: bigint({ unsigned: true, mode: "number" }),
  },
  (table) => [primaryKey({ columns: [table.userId, table.templateId] })]
);
