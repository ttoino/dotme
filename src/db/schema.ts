import { CV } from '@/types/cv';
import { json, singlestoreTable, timestamp, varchar } from 'drizzle-orm/singlestore-core';

const timestamps = {
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().onUpdateNow().notNull(),
  deletedAt: timestamp(),
}

export const usersTable = singlestoreTable('users_table', {
  email: varchar({ length: 255 }).primaryKey(),
  password: varchar({ length: 255 }).notNull(),
  portfolio: json().$type<CV>().notNull(),
  ...timestamps,
});
