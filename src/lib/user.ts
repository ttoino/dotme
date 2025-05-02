"use server";

import db from "@/db";
import { cvTable, portfolioTable, usersTable } from "@/db/schema";
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


  const portfolio_entries = await db
        .select()
        .from(portfolioTable)
        .where(eq(portfolioTable.userId, email))

    // if(portfolio_entries.length < 0) {
    //     console.log("No portfolio entries")
    //     return null
    // }

    const portfolio_info: portfolio_entry[] = portfolio_entries.map((value) => ({
        type: value.type,
        id: value.foreignId.toString(),
        x: value.x,
        y: value.y,
        w: value.width,
        h: value.height,
      }));

  // const areas = await db
  //   .select()
  //   .from(areasTable)
  //   .where(eq(areasTable.cvId, portfolio.id));

  // const experiences = Object.fromEntries(
  //   await Promise.all(
  //     areas.map(
  //       async (area) =>
  //         [
  //           area.id,
  //           await db
  //             .select()
  //             .from(experiencesTable)
  //             .where(eq(experiencesTable.areaId, area.id)),
  //         ] as const
  //     )
  //   )
  // );
  const areas = await db()
    .select()
    .from(areasTable)
    .where(eq(areasTable.cvId, portfolio.id));

  const experiences = Object.fromEntries(
    await Promise.all(
      areas.map(
        async (area) =>
          [
            area.id,
            await db()
              .select()
              .from(experiencesTable)
              .where(eq(experiencesTable.areaId, area.id)),
          ] as const
      )
    )
  );

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
    },
    portfolio_entries: portfolio_entries ?? [],
  };
  // areas: areas.map((area) => ({
  //         name: area.name,
  //         entries: experiences[area.id].map((experience) => ({
  //           organization: experience.organization ?? undefined,
  //           description: experience.description ?? undefined,
  //           location: experience.location ?? undefined,
  //           roles: experience.roles ?? [],
  //           links: experience.links ?? [],
  //         })),
  //         links: area.links ?? [],
  //       })),
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
