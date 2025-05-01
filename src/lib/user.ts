"use server";

import db from "@/db";
import { areasTable, cvTable, experiencesTable, usersTable } from "@/db/schema";
import { User } from "@/types/user";
import { eq } from "drizzle-orm";

export const getUser = async (email: string): Promise<User | null> => {
    const users = await db.select().from(usersTable).where(eq(usersTable.email, email));

    if (users.length !== 1) {
        return null;
    }

    const user = users[0];

    const portfolios = await db
        .select()
        .from(cvTable)
        .where(eq(cvTable.userId, user.email));
    
    if (portfolios.length !== 1) {
        return null;
    }

    const portfolio = portfolios[0];

    const areas = await db
        .select()
        .from(areasTable)
        .where(eq(areasTable.cvId, portfolio.id));
    
    const experiences = Object.fromEntries(await Promise.all(areas.map(async (area) => [area.id, await db.select().from(experiencesTable).where(eq(experiencesTable.areaId, area.id))] as const)));

    const userWithPortfolio: User = {
        ...user,
        portfolio: {
            info: {
                name: portfolio.info_name,
                profile_picture: portfolio.info_profilePicture ?? undefined,
                roles: portfolio.info_roles ?? [],
                bio: portfolio.info_bio ?? undefined,
                age: portfolio.info_age ?? undefined,
            },
            contacts: {
                email: portfolio.contacts_email ?? undefined,
                phone: portfolio.contacts_phone ?? undefined,
                github: portfolio.contacts_github ?? undefined,
                linkedin: portfolio.contacts_linkedin ?? undefined,
            },
            areas: areas.map((area) => ({
                name: area.name,
                entries: experiences[area.id].map((experience) => ({
                    organization: experience.organization ?? undefined,
                    description: experience.description ?? undefined,
                    location: experience.location ?? undefined,
                    roles: experience.roles ?? [],
                    links: experience.links ?? [],
                })),
                links: area.links ?? [],
            })),
            skills: portfolio.skills ?? [],
        }
    };

    return userWithPortfolio;
}

export const createUser = async ({email, name}: {email: string, name: string}): Promise<User> => {
    await db.insert(usersTable).values({
        email,
    });
    await db.insert(cvTable).values({
        userId: email,
        info_name: name,
    });

    return (await getUser(email))!;
}
