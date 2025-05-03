"use server";

import db from "@/db";
import { cvTable, portfolioTable, templatesTable, templateUserRelation, usersTable } from "@/db/schema";
import { User } from "@/types/user";
import { eq } from "drizzle-orm";

export const getUser = async (email: string): Promise<User | null> => {
  const users = await db()
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (users.length !== 1) {
    return null;
  }

  const user = users[0];

  const portfolios = await db()
    .select()
    .from(cvTable)
    .where(eq(cvTable.userId, user.email));

  if (portfolios.length !== 1) {
    return null;
  }

  const portfolio = portfolios[0];

  const portfolio_entries = await db()
        .select()
        .from(portfolioTable)
        .where(eq(portfolioTable.userId, email))

  const templates = await db()
    .select()
    .from(templatesTable)
    .leftJoin(templateUserRelation, eq(templatesTable.id, templateUserRelation.templateId))
    .where(eq(templateUserRelation.userId, user.email));

  const userWithPortfolio: User = {
    ...user,
    portfolio: {
      info: {
        name: portfolio.info_name,
        profile_picture: portfolio.info_profilePicture ?? undefined,
        roles: portfolio.info_roles ?? [],
        bio: portfolio.info_bio ?? undefined,
      },
      contacts: {
        email: portfolio.contacts_email ?? undefined,
        phone: portfolio.contacts_phone ?? undefined,
        github: portfolio.contacts_github ?? undefined,
        linkedin: portfolio.contacts_linkedin ?? undefined,
      },
      areas: portfolio.areas ?? [],
      skills: portfolio.skills ?? [],
      portfolio: portfolio_entries ?? [],
    },
    portfolio_entries: portfolio_entries ?? [],
    templates: templates.map(t => t.templates_table),
  };

  return userWithPortfolio;
};

export const createUser = async ({
  email,
  name,
}: {
  email: string;
  name: string;
}): Promise<User> => {
  await db().insert(usersTable).values({
    email,
  });
  await db().insert(cvTable).values({
    userId: email,
    info_name: name,
  });

  return (await getUser(email))!;
};
