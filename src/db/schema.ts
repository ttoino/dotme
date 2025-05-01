import { CV } from '@/types/cv';
import { json, serial, singlestoreTable, timestamp, varchar } from 'drizzle-orm/singlestore-core';

const timestamps = {
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().onUpdateNow().notNull(),
  deletedAt: timestamp(),
}

export const usersTable = singlestoreTable('users_table', {
  id: serial().primaryKey(),
  email: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  portfolio: json().$type<CV>().notNull(),
  ...timestamps,
});
