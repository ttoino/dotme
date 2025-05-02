"use server";

import db from "@/db";
import { cvTable, portfolioTable, usersTable } from "@/db/schema";
import { experience, area, portfolio_entry } from "@/types/cv";
import { eq } from "drizzle-orm";
import { User } from "@/types/user";

export const getExperienceFromNameAndEmail = async (email: string, organization: string): Promise<experience | null> => {
    const users = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, email));

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

    const experiences = (
        await Promise.all(
            areas.map((area) =>
                db
                    .select()
                    .from(experiencesTable)
                    .where(
                        and(
                            eq(experiencesTable.areaId, area.id),
                            eq(experiencesTable.organization, organization)
                        )
                    )
            )
        )
    ).flat();

    if (experiences.length !== 1) {
        return null;
    }

    const first_experience = experiences[0]

    const experience: experience = {
        organization: first_experience.organization ?? undefined,
        description: first_experience.description ?? undefined,
        location: first_experience.location ?? undefined,
        roles: first_experience.roles ?? [],
        links: first_experience.links ?? undefined,
    };

    return experience
}