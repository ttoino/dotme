import { Image, Link, RichText, role, skill } from "@/types/cv";
import { area } from "@/types/cv";
import {
  int,
  bigint,
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
  id: int({ unsigned: true }).autoincrement().primaryKey(),
  userId: varchar({ length: 255 }).notNull(), // ligar ao user
  type: varchar({ length: 255 }).notNull(), // saber o tipe de tabela
  foreignId: varchar({ length: 255 }).notNull(), // ligar a tabela
  x: int({ unsigned: true }).notNull(),
  y: int({ unsigned: true }).notNull(),
  width: int({ unsigned: true }).notNull(),
  height: int({ unsigned: true }).notNull(),
})
